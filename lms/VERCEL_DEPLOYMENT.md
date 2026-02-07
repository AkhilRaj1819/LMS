# Vercel Deployment Guide

## Prerequisites
- Vercel account
- GitHub repository (recommended)

## Deployment Steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. **IMPORTANT: Set Root Directory to `LMS/lms`** in the project settings
5. Framework Preset should auto-detect as "Next.js"

### 3. Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

- `MONGODB_URI` - Your MongoDB connection string
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
- `NEXTAUTH_URL` - Your Vercel deployment URL (e.g., https://your-app.vercel.app)
- `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
- `NEXTAUTH_CALLBACK_URL` - Your Vercel URL + /api/auth/callback

### 4. Update Google OAuth
In Google Cloud Console, add your Vercel domain to:
- Authorized JavaScript origins: `https://your-app.vercel.app`
- Authorized redirect URIs: `https://your-app.vercel.app/api/auth/callback`

### 5. Deploy
Click "Deploy" and wait for build to complete.

## Troubleshooting
- If "No Next.js version detected" error: Ensure Root Directory is set to `LMS/lms`
- Never commit `.env` file
- Redeploy after updating environment variables
