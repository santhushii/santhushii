# Local Development Setup Guide

This guide will help you set up the Santhushie Portfolio for local development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **MongoDB Atlas Account** (free) - [Sign Up](https://www.mongodb.com/cloud/atlas)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/santhushie-portfolio.git
cd santhushie-portfolio
```

### 2. Install Dependencies

Install dependencies for both client and server:

```bash
npm run install:all
```

This will install:
- Root dependencies (concurrently for running both servers)
- Client dependencies (React, TypeScript, Vite, Tailwind, etc.)
- Server dependencies (Express, MongoDB, TypeScript, etc.)

**Or install separately:**

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Install server dependencies
cd server
npm install
cd ..
```

### 3. Set Up Environment Variables

#### Backend (.env)

Create `server/.env` file:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Email configuration (optional - for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**Get MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free M0 cluster
3. Create database user
4. Configure network access (allow 0.0.0.0/0 for local dev)
5. Get connection string (see DEPLOYMENT.md for details)

#### Frontend (.env)

Create `client/.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Run Development Servers

**Run both client and server simultaneously:**

```bash
npm run dev
```

This starts:
- Frontend: http://localhost:5173 (Vite dev server)
- Backend: http://localhost:5000 (Express API server)

**Or run separately:**

```bash
# Terminal 1 - Frontend
cd client
npm run dev

# Terminal 2 - Backend
cd server
npm run dev
```

### 5. Open in Browser

Open http://localhost:5173 in your browser.

The frontend will automatically proxy API requests to `http://localhost:5000/api`.

## Project Structure

```
santhushie-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── content/       # Content data files
│   │   ├── contexts/      # React contexts (Theme)
│   │   ├── utils/         # Utility functions (API)
│   │   └── styles/        # Global styles
│   ├── public/            # Static assets
│   ├── package.json
│   └── vite.config.ts
│
├── server/                # Express backend
│   ├── src/
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route controllers
│   │   └── index.ts       # Server entry
│   ├── package.json
│   └── tsconfig.json
│
└── package.json           # Root package.json
```

## Available Scripts

### Root Scripts

```bash
npm run dev              # Run both client and server
npm run dev:client       # Run only client
npm run dev:server       # Run only server
npm run install:all      # Install all dependencies
npm run build            # Build client for production
```

### Client Scripts

```bash
cd client
npm run dev              # Start Vite dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

### Server Scripts

```bash
cd server
npm run dev              # Start dev server (with tsx watch)
npm run build            # Build TypeScript
npm run start            # Run production build
npm run type-check       # Check TypeScript types
```

## Development Workflow

### 1. Making Content Changes

Edit content files in `client/src/content/`:
- Changes are hot-reloaded automatically
- No server restart needed

### 2. Making Frontend Changes

- Edit React components in `client/src/components/` or `client/src/pages/`
- Vite will hot-reload changes automatically
- Check browser console for errors

### 3. Making Backend Changes

- Edit server code in `server/src/`
- tsx watch mode will auto-restart server
- Check terminal for errors

### 4. Testing API Endpoints

**Using curl:**

```bash
# Health check
curl http://localhost:5000/api/health

# Get profile
curl http://localhost:5000/api/profile

# Get skills
curl http://localhost:5000/api/skills
```

**Using browser:**
- Visit http://localhost:5000/api/health
- Should return: `{"status":"ok","message":"Server is running"}`

**Using Postman:**
- Import API collection
- Test all endpoints

## Common Issues & Solutions

### MongoDB Connection Error

**Error**: `MongooseServerSelectionError`

**Solutions:**
1. Check `MONGODB_URI` in `server/.env`
2. Verify MongoDB Atlas cluster is running (not paused)
3. Check network access allows your IP (or 0.0.0.0/0)
4. Ensure username/password are correct in connection string

### Port Already in Use

**Error**: `Port 5000 is already in use`

**Solutions:**
1. Change `PORT` in `server/.env` to another port (e.g., 5001)
2. Update `VITE_API_URL` in `client/.env` accordingly
3. Kill the process using the port:
   ```bash
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # Mac/Linux
   lsof -ti:5000 | xargs kill
   ```

### CORS Errors

**Error**: `CORS policy: No 'Access-Control-Allow-Origin'`

**Solutions:**
1. Ensure `CORS_ORIGIN` in `server/.env` matches frontend URL
2. Restart server after changing `.env`
3. Check server logs for CORS configuration

### TypeScript Errors

**Solutions:**
1. Run `npm run type-check` to see all errors
2. Ensure all imports are correct
3. Check `tsconfig.json` paths configuration

### Module Not Found

**Error**: `Cannot find module 'xyz'`

**Solutions:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Check if package is in `package.json`
4. Clear npm cache: `npm cache clean --force`

### Build Errors

**Solutions:**
1. Check TypeScript compilation errors: `cd server && npm run type-check`
2. Check ESLint errors: `cd client && npm run lint`
3. Ensure all environment variables are set
4. Clear build cache and rebuild

## Debugging Tips

### Frontend Debugging

1. **Browser DevTools:**
   - Open DevTools (F12)
   - Check Console for errors
   - Network tab for API requests
   - React DevTools for component inspection

2. **Vite HMR:**
   - Check terminal for HMR errors
   - Try hard refresh (Ctrl+Shift+R)
   - Clear browser cache

### Backend Debugging

1. **Server Logs:**
   - Check terminal output
   - Look for error stack traces
   - MongoDB connection messages

2. **API Testing:**
   - Use Postman or curl
   - Check response status codes
   - Validate JSON responses

### Database Debugging

1. **MongoDB Atlas:**
   - Check cluster status (should be "Active")
   - View database connections
   - Browse collections

2. **Mongoose Logs:**
   - Enable debug mode (optional):
     ```typescript
     mongoose.set('debug', true);
     ```

## Next Steps

1. **Update Content**: See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)
2. **Deploy to Production**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
3. **Customize Design**: Edit Tailwind config in `client/tailwind.config.js`
4. **Add Features**: Explore component structure in `client/src/components/`

## Need Help?

- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues
- Review [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for content updates
- Check GitHub Issues (if public)
- Review service documentation (Vercel, Render, MongoDB Atlas)

---

**Happy Coding!** 🚀
