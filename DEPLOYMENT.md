# Deployment Guide for IPScope Tracker

## Free Domain Options

### Option 1: Vercel (Recommended - Easiest)
**Free domain format:** `your-project-name.vercel.app`

### Option 2: Netlify
**Free domain format:** `your-project-name.netlify.app`

---

## Deploy to Vercel (Recommended)

### Method 1: Using Vercel CLI (Terminal)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project**:
   ```bash
   cd ~/Desktop/ip-address-tracker-master
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Login/signup when prompted
   - Confirm project settings
   - Choose a project name (this will be your subdomain)

5. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Method 2: Using GitHub Integration (Even Easier!)

1. **Push your latest changes to GitHub**:
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Sign up/Login** with your GitHub account

4. **Click "New Project"**

5. **Import your GitHub repository** (md786-dotcom/ip-address)

6. **Configure project**:
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: `./`

7. **Click "Deploy"**

8. **Your site will be live at:** `https://your-project-name.vercel.app`

---

## Deploy to Netlify (Alternative)

### Method 1: Drag & Drop

1. **Go to [app.netlify.com/drop](https://app.netlify.com/drop)**

2. **Drag your entire project folder** onto the page

3. **Your site will be instantly deployed!**

### Method 2: GitHub Integration

1. **Go to [app.netlify.com](https://app.netlify.com)**

2. **Sign up/Login** with GitHub

3. **Click "New site from Git"**

4. **Choose GitHub** and select your repository

5. **Configure settings**:
   - Build command: (leave empty)
   - Publish directory: `./`

6. **Click "Deploy site"**

---

## Custom Domain (Optional)

Both Vercel and Netlify allow you to add custom domains for free:

1. **Buy a domain** from providers like:
   - Namecheap
   - Google Domains
   - GoDaddy

2. **In Vercel/Netlify dashboard**:
   - Go to your project settings
   - Find "Domains" section
   - Add your custom domain
   - Follow DNS configuration instructions

---

## Environment Variables

Your API key is currently hardcoded. For production, you should:

1. **Create environment variable** in Vercel/Netlify dashboard:
   - Name: `VITE_IPIFY_API_KEY`
   - Value: Your API key

2. **Update your script.js** to use environment variable (optional for now)

---

## Your Free Domain

After deployment, you'll get:
- **Vercel:** `https://ipscope-tracker.vercel.app` (or your chosen name)
- **Netlify:** `https://ipscope-tracker.netlify.app` (or your chosen name)

Both platforms offer:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ Analytics (basic)
