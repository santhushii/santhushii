import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import ContactMessage from '../models/ContactMessage.model';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, message, projectType } = req.body;

      // Save to database
      const contactMessage = new ContactMessage({
        name,
        email,
        message,
        projectType,
        status: 'new'
      });
      await contactMessage.save();

      // Send email (optional, only if email config is provided)
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: email,
            subject: `Portfolio Contact: ${name} - ${projectType || 'General Inquiry'}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `
          });
        } catch (emailError) {
          console.error('Email sending error:', emailError);
          // Don't fail the request if email fails
        }
      }

      res.status(201).json({
        message: 'Message sent successfully',
        id: contactMessage._id
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ message: 'Error sending message', error });
    }
  }
);

export default router;
