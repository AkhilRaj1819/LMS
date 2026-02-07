# Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- MongoDB Atlas database (or any MongoDB instance)
- Google OAuth credentials

## Environment Variables Required

Add these environment variables in Vercel dashboard:

```
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your_nextauth_secret_key
```

## Deployment Steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-github-repo-url
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `LMS/lms`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
5. Add environment variables in the "Environment Variables" section
6. Click "Deploy"

### 3. Configure Google OAuth
After deployment, update your Google OAuth settings:
1. Go to Google Cloud Console
2. Add your Vercel domain to authorized JavaScript origins:
   - `https://your-domain.vercel.app`
3. Add authorized redirect URIs:
   - `https://your-domain.vercel.app/api/auth/callback/google`

### 4. Update Environment Variables
After getting your Vercel domain, update:
- `NEXTAUTH_URL` to your actual Vercel URL

## Build Configuration

The project uses:
- Next.js 16.1.6
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4

## Troubleshooting

### Build Errors
- Ensure all environment variables are set
- Check that MongoDB URI is accessible from Vercel
- Verify Node.js version compatibility

### Runtime Errors
- Check Vercel function logs
- Verify database connection
- Ensure OAuth credentials are correct

## Post-Deployment

1. Test login functionality
2. Verify database connections
3. Check all routes are working
4. Test admin and student flows
