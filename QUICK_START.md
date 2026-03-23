# Quick Start Guide

## 🚀 Running the Project Locally

### Step 1: Install Dependencies

```bash
npm run install:all
```

This installs dependencies for:
- Root project (concurrently)
- Client (React, Vite, etc.)
- Server (Express, MongoDB, etc.)

### Step 2: Set Up Environment Variables

#### Server Environment (`server/.env`)

Create `server/.env` with:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Optional: Email configuration for contact form
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**To get MongoDB URI:**
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free)
2. Create M0 free cluster
3. Create database user
4. Whitelist IP (0.0.0.0/0 for local dev)
5. Get connection string and replace username/password

#### Client Environment (`client/.env`)

Create `client/.env` with:

```env
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Run Development Servers

**Option 1: Run both together (Recommended)**

```bash
npm run dev
```

This starts:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

**Option 2: Run separately**

Terminal 1 (Frontend):
```bash
cd client
npm run dev
```

Terminal 2 (Backend):
```bash
cd server
npm run dev
```

### Step 4: Open in Browser

Visit http://localhost:5173

The frontend will automatically proxy API requests to the backend.

## ⚠️ Important Notes

1. **MongoDB Connection**: 
   - The app will start without MongoDB, but database features won't work
   - Content from `client/src/content/` will be used as fallback
   - To enable full functionality, set up MongoDB Atlas (see DEPLOYMENT.md)

2. **First Run**:
   - Backend may take 10-20 seconds to start
   - Frontend usually starts in 2-3 seconds
   - Check console for any errors

3. **Content Updates**:
   - Edit files in `client/src/content/` to update portfolio
   - Changes hot-reload automatically
   - No server restart needed for content changes

## 🔧 Troubleshooting

**Port already in use?**
- Change `PORT` in `server/.env` to another port (e.g., 5001)
- Update `VITE_API_URL` in `client/.env` accordingly

**MongoDB connection error?**
- Check your `MONGODB_URI` in `server/.env`
- Ensure MongoDB Atlas cluster is running
- Verify network access allows your IP

**CORS errors?**
- Ensure `CORS_ORIGIN` in `server/.env` matches frontend URL
- Restart server after changing `.env`

**Module not found?**
- Run `npm install` in the affected directory
- Delete `node_modules` and reinstall if needed

## 📝 Next Steps

1. **Update Content**: Edit files in `client/src/content/` (see CONTENT_GUIDE.md)
2. **Customize Design**: Edit `client/tailwind.config.js` and components
3. **Deploy**: Follow DEPLOYMENT.md for production deployment

## 🎯 Quick Commands

```bash
# Install all dependencies
npm run install:all

# Run development servers
npm run dev

# Build for production
npm run build

# Run only frontend
npm run dev:client

# Run only backend
npm run dev:server
```

---

**Happy Coding!** 🚀
