# Santhushie Portfolio - Futuristic MERN Stack Portfolio (2026 Ready)

A premium, futuristic personal portfolio website built with the MERN stack, showcasing technical skills and digital marketing expertise.

## 🌟 Features

- **Futuristic Design**: Glassmorphism, gradients, and smooth animations
- **Dark/Light Mode**: Toggle between themes
- **Full Responsive**: Mobile-first design
- **Tech Stack**: React (Vite), TypeScript, Tailwind CSS, Framer Motion, Node.js, Express, MongoDB
- **Deployment Ready**: Configured for Vercel (frontend) + Render (backend) + MongoDB Atlas

## 📁 Project Structure

```
santhushie-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── content/       # Content data files
│   │   ├── styles/        # Global styles
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                 # Express backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   └── package.json
└── package.json           # Root package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (free tier)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**

   Create `server/.env`:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:5173
   
   # Email configuration (for contact form)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

   Create `client/.env`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Run development servers:**
   ```bash
   npm run dev
   ```
   
   This starts both frontend (http://localhost:5173) and backend (http://localhost:5000).

## 📝 Editing Content

All portfolio content is stored in structured files for easy updates:

- **Profile Info**: `client/src/content/profile.ts`
- **Skills**: `client/src/content/skills.ts`
- **Experience**: `client/src/content/experience.ts`
- **Projects**: `client/src/content/projects.ts`
- **Services**: `client/src/content/services.ts`
- **Testimonials**: `client/src/content/testimonials.ts`
- **Case Studies**: `client/src/content/caseStudies.ts`

Simply edit these TypeScript files and the changes will reflect immediately. The backend API also supports these via MongoDB.

## 🌐 Deployment Guide

This guide walks you through deploying the portfolio to **free tiers** of Vercel (frontend), Render (backend), and MongoDB Atlas (database).

### Prerequisites

1. **GitHub Account** - Create a repository for your project
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Render Account** - Sign up at [render.com](https://render.com)
4. **MongoDB Atlas Account** - Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

### Step 1: Prepare Your Code

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MERN portfolio"
   git remote add origin https://github.com/yourusername/santhushie-portfolio.git
   git push -u origin main
   ```

2. **Create `.env` files locally:**
   - Copy `client/.env.example` to `client/.env`
   - Copy `server/.env.example` to `server/.env` (or create one manually)

### Step 2: Deploy MongoDB Atlas (Database)

1. **Create MongoDB Atlas Account:**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Click "Try Free" and sign up

2. **Create a Free Cluster (M0):**
   - Once logged in, click "Build a Database"
   - Select "M0 FREE" tier
   - Choose a cloud provider (AWS, Google Cloud, or Azure)
   - Select a region close to you
   - Click "Create Cluster" (takes 3-5 minutes)

3. **Set Up Database Access:**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and password (save these!)
   - Set privileges to "Atlas admin" or "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access:**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - For Render, click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String:**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority`)
   - Replace `<password>` with your actual password
   - Replace `<dbname>` with `portfolio` (or your preferred database name)
   - **Save this string** - you'll need it for Render

### Step 3: Deploy Backend to Render

1. **Create Web Service on Render:**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub account if not already connected
   - Select your repository

2. **Configure Web Service:**
   - **Name**: `santhushie-portfolio-api` (or your preferred name)
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Select "Free"

3. **Add Environment Variables:**
   Click "Add Environment Variable" and add:
   ```
   PORT=10000
   NODE_ENV=production
   MONGODB_URI=<your-mongodb-connection-string-from-step-2>
   CORS_ORIGIN=<your-vercel-frontend-url> (update this after deploying frontend)
   ```

   **Note**: For `CORS_ORIGIN`, initially use `http://localhost:5173`. After deploying frontend, update it with your Vercel URL.

4. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment to complete (5-10 minutes)
   - Once deployed, you'll get a URL like: `https://santhushie-portfolio-api.onrender.com`
   - **Save this URL** - you'll need it for Vercel

### Step 4: Deploy Frontend to Vercel

1. **Import Project:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository

2. **Configure Project:**
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `dist` (should be auto-detected)

3. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```
   Replace `your-backend-url.onrender.com` with your actual Render backend URL from Step 3.

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Once deployed, you'll get a URL like: `https://santhushie-portfolio.vercel.app`

### Step 5: Update CORS Origin

1. **Update Backend CORS:**
   - Go back to Render dashboard
   - Click on your web service
   - Go to "Environment" tab
   - Update `CORS_ORIGIN` to your Vercel frontend URL
   - Click "Save Changes" (this will trigger a redeploy)

2. **Test Your Deployment:**
   - Visit your Vercel frontend URL
   - Try navigating through pages
   - Test the contact form
   - Check browser console for any errors

### Step 6: Optional - Email Configuration

To enable email sending from the contact form:

1. **Gmail App Password (if using Gmail):**
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate an "App Password" for mail
   - Use this password in your Render environment variables

2. **Add to Render Environment Variables:**
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

3. **Redeploy** your backend service after adding email variables.

### Troubleshooting

- **Backend not connecting to MongoDB:**
  - Check your MongoDB connection string in Render
  - Verify network access in MongoDB Atlas allows Render's IPs
  - Check Render logs for connection errors

- **CORS errors:**
  - Ensure `CORS_ORIGIN` in Render matches your Vercel URL exactly
  - Don't include trailing slash

- **Frontend can't reach backend:**
  - Verify `VITE_API_URL` in Vercel environment variables
  - Check that backend is running (visit Render service URL)
  - Check browser console for API errors

- **Build failures:**
  - Check build logs in Vercel/Render
  - Ensure all dependencies are in `package.json`
  - Verify TypeScript compilation errors are fixed

### Production Checklist

- [ ] MongoDB Atlas cluster is running
- [ ] Backend is deployed and accessible
- [ ] Frontend is deployed and accessible
- [ ] Environment variables are set correctly
- [ ] CORS is configured properly
- [ ] Contact form is working (test it!)
- [ ] All pages load correctly
- [ ] Images and assets are loading
- [ ] Mobile responsive design works

### Custom Domain (Optional)

1. **Vercel Custom Domain:**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update CORS:**
   - Update `CORS_ORIGIN` in Render to include your custom domain

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB, Mongoose
- **Deployment**: Vercel (frontend), Render (backend), MongoDB Atlas (database)

## 📄 License

MIT

## 👤 Author

**Santhushie Nallaperuma**
- IT Graduate
- Associate Project Manager
- Tech & Digital Marketing Enthusiast
- Sri Lanka

---

Built with ❤️ using the MERN stack
