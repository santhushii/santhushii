# Detailed Deployment Instructions

This document provides step-by-step instructions for deploying the Santhushie Portfolio to production using free tiers.

## Quick Reference

- **Frontend**: Vercel (Free Tier)
- **Backend**: Render (Free Tier)
- **Database**: MongoDB Atlas (Free M0 Cluster)

## Prerequisites Checklist

- [ ] GitHub repository created and code pushed
- [ ] Vercel account created
- [ ] Render account created
- [ ] MongoDB Atlas account created

---

## Part 1: MongoDB Atlas Setup

### 1.1 Create Account and Cluster

1. Visit [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" and sign up
3. Choose "Build a database" option
4. Select **M0 FREE** tier
5. Choose a cloud provider (AWS recommended) and region
6. Click "Create" (cluster creation takes 3-5 minutes)

### 1.2 Configure Database Access

1. In Atlas dashboard, go to "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Select "Password" authentication method
4. Create a username (e.g., `santhushie`)
5. Generate a secure password (save this!)
6. Select "Atlas admin" privileges
7. Click "Add User"

### 1.3 Configure Network Access

1. Go to "Network Access" (left sidebar)
2. Click "Add IP Address"
3. For Render deployment, click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click "Confirm"

⚠️ **Security Note**: In production, you should restrict to specific IPs. For free tier Render, 0.0.0.0/0 is acceptable.

### 1.4 Get Connection String

1. Go to "Database" (left sidebar)
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" driver and latest version
5. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace placeholders:
   - `<username>` → your database username
   - `<password>` → your database password
   - After the domain, add `/portfolio` for database name:
   ```
   mongodb+srv://santhushie:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

7. **Save this connection string** - you'll need it for Render!

---

## Part 2: Deploy Backend to Render

### 2.1 Create Web Service

1. Visit [https://render.com](https://render.com)
2. Sign up or log in (can use GitHub OAuth)
3. Click "New +" → "Web Service"
4. Connect your GitHub account if not already connected
5. Select your repository: `santhushie-portfolio`

### 2.2 Configure Service Settings

**Basic Settings:**
- **Name**: `santhushie-portfolio-api` (or your preferred name)
- **Region**: Choose closest to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: `server`
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

**Plan:**
- Select **Free** (has limitations: spins down after inactivity, longer cold starts)

### 2.3 Add Environment Variables

Click "Add Environment Variable" and add each:

| Key | Value | Description |
|-----|-------|-------------|
| `PORT` | `10000` | Render automatically assigns a PORT, but set this for consistency |
| `NODE_ENV` | `production` | Environment mode |
| `MONGODB_URI` | `mongodb+srv://...` | Your MongoDB connection string from Part 1.4 |
| `CORS_ORIGIN` | `https://your-app.vercel.app` | Your Vercel frontend URL (update after frontend deploy) |

**Initial Setup:**
- Set `CORS_ORIGIN` to `http://localhost:5173` temporarily
- After deploying frontend, update it to your Vercel URL

### 2.4 Deploy

1. Click "Create Web Service"
2. Render will:
   - Install dependencies
   - Build the TypeScript code
   - Start the server
3. Wait 5-10 minutes for first deployment
4. Once complete, you'll see:
   - **Service URL**: `https://santhushie-portfolio-api.onrender.com`
   - Status: "Live"

5. **Test Backend:**
   - Visit `https://your-service-url.onrender.com/api/health`
   - Should return: `{"status":"ok","message":"Server is running"}`

6. **Save your service URL** - needed for Vercel!

---

## Part 3: Deploy Frontend to Vercel

### 3.1 Import Project

1. Visit [https://vercel.com](https://vercel.com)
2. Sign up or log in (can use GitHub OAuth)
3. Click "Add New..." → "Project"
4. Import your GitHub repository: `santhushie-portfolio`

### 3.2 Configure Project

**Framework Preset:**
- Should auto-detect "Vite"
- If not, select "Vite" manually

**Project Settings:**
- **Root Directory**: `client`
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 3.3 Add Environment Variables

Click "Environment Variables" and add:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://your-render-service.onrender.com/api` |

Replace `your-render-service.onrender.com` with your actual Render backend URL from Part 2.4.

### 3.4 Deploy

1. Click "Deploy"
2. Vercel will:
   - Install dependencies
   - Build the React app
   - Deploy to CDN
3. Wait 2-3 minutes
4. Once complete:
   - **Deployment URL**: `https://santhushie-portfolio.vercel.app`
   - Status: "Ready"

5. **Visit your live site!**

---

## Part 4: Update CORS and Final Configuration

### 4.1 Update Backend CORS

1. Go back to Render dashboard
2. Click on your web service
3. Go to "Environment" tab
4. Find `CORS_ORIGIN` variable
5. Update value to your Vercel frontend URL:
   ```
   https://santhushie-portfolio.vercel.app
   ```
   **Important**: 
   - Use `https://` not `http://`
   - No trailing slash
   - Match exactly (case-sensitive domain)

6. Click "Save Changes"
7. Render will automatically redeploy (2-3 minutes)

### 4.2 Test Full Stack

1. Visit your Vercel frontend URL
2. Open browser DevTools → Network tab
3. Navigate through pages
4. Check that API calls are successful (200 status)
5. Test contact form submission
6. Check MongoDB Atlas → Browse Collections to see saved data

---

## Part 5: Email Configuration (Optional)

### 5.1 Gmail Setup (Example)

1. **Enable 2FA on Gmail**
   - Go to Google Account settings
   - Security → 2-Step Verification

2. **Generate App Password:**
   - Go to Google Account → Security
   - Under "2-Step Verification", click "App passwords"
   - Generate password for "Mail"
   - Copy the 16-character password

### 5.2 Add to Render Environment

In Render dashboard, add:

| Key | Value |
|-----|-------|
| `EMAIL_HOST` | `smtp.gmail.com` |
| `EMAIL_PORT` | `587` |
| `EMAIL_USER` | `your-email@gmail.com` |
| `EMAIL_PASS` | `your-16-char-app-password` |

**Redeploy** after adding email variables.

---

## Troubleshooting

### Backend Issues

**Error: MongoDB connection failed**
- ✅ Check connection string format
- ✅ Verify username/password are correct
- ✅ Check Network Access allows 0.0.0.0/0
- ✅ Ensure cluster is running (not paused)

**Error: CORS policy**
- ✅ Verify `CORS_ORIGIN` matches frontend URL exactly
- ✅ Check protocol (https vs http)
- ✅ No trailing slashes

**Build fails on Render**
- ✅ Check build logs for TypeScript errors
- ✅ Verify all dependencies in `package.json`
- ✅ Ensure `tsconfig.json` is correct

### Frontend Issues

**Error: Failed to fetch API**
- ✅ Check `VITE_API_URL` environment variable
- ✅ Verify backend is running (visit Render URL)
- ✅ Check CORS configuration in backend
- ✅ Open browser DevTools → Network tab to see actual error

**Build fails on Vercel**
- ✅ Check build logs
- ✅ Verify Vite config is correct
- ✅ Ensure all dependencies are installed

**Images not loading**
- ✅ Check image paths are correct
- ✅ Ensure images are in `client/public` folder
- ✅ Use absolute paths from root (e.g., `/images/logo.png`)

### Database Issues

**Empty database**
- ✅ Data needs to be seeded manually or via API
- ✅ Use MongoDB Compass or Atlas Data Explorer
- ✅ Or create a seed script to populate data

---

## Post-Deployment Checklist

- [ ] Frontend loads correctly at Vercel URL
- [ ] Backend API health check works
- [ ] All pages navigate correctly
- [ ] Contact form submits successfully
- [ ] Data is saved to MongoDB Atlas
- [ ] Mobile responsive design works
- [ ] Images and assets load correctly
- [ ] No console errors in browser
- [ ] Performance is acceptable (Vercel analytics)

---

## Maintenance

### Updating Content

1. Edit files in `client/src/content/`
2. Commit and push to GitHub
3. Vercel will auto-deploy changes
4. No backend restart needed for content changes

### Updating Backend

1. Make changes to server code
2. Commit and push to GitHub
3. Render will auto-deploy (or trigger manually)
4. Check logs in Render dashboard

### Monitoring

- **Vercel**: Check deployment logs and analytics
- **Render**: Monitor service logs and uptime
- **MongoDB Atlas**: Monitor database usage and connections

---

## Cost Notes

All services used are **free tier**:

- **Vercel**: Free for personal projects
- **Render**: Free tier (service may spin down after inactivity)
- **MongoDB Atlas**: Free M0 cluster (512MB storage)

For production traffic, consider upgrading:
- Render: $7/month for always-on service
- MongoDB Atlas: M10 tier for better performance

---

## Support

If you encounter issues:
1. Check service logs (Vercel, Render, MongoDB Atlas)
2. Review this deployment guide
3. Check GitHub issues (if public)
4. Review service documentation

---

**Last Updated**: 2024
