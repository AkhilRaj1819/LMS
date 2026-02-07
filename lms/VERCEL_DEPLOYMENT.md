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
4. Set root directory to: `LMS/lms`

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

## Important Notes
- Never commit `.env` file
- Use `.env.example` as reference
- Update `NEXTAUTH_URL` after first deployment
- Redeploy after updating environment variables
