# 🚀 Deploying react-usekit to Vercel

This guide will help you deploy the react-usekit documentation site to Vercel with a custom GoDaddy domain.

## Prerequisites

- [Vercel Account](https://vercel.com/signup)
- [GitHub Repository](https://github.com) with your react-usekit code
- [GoDaddy Domain](https://godaddy.com) that you own

## Step 1: Push to GitHub

Make sure your latest code is pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy from the project root:

```bash
vercel
```

### Option B: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will automatically detect the Next.js framework
5. Click "Deploy"

## Step 3: Configure Custom Domain

### In Vercel Dashboard:

1. Go to your project settings
2. Click "Domains" tab
3. Add your custom domain (e.g., `react-usekit.yourdomain.com`)
4. Vercel will provide DNS records

### In GoDaddy DNS Management:

1. Login to [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns)
2. Find your domain and click "Manage DNS"
3. Add the DNS records provided by Vercel:

   **For subdomain (e.g., react-usekit.yourdomain.com):**

   - Type: `CNAME`
   - Name: `react-usekit` (or your chosen subdomain)
   - Value: `cname.vercel-dns.com`
   - TTL: `600` (10 minutes)

   **For root domain (e.g., yourdomain.com):**

   - Type: `A`
   - Name: `@`
   - Value: `76.76.19.19`
   - TTL: `600`

4. Save changes

## Step 4: SSL Certificate

Vercel automatically provides SSL certificates for custom domains. Wait 24-48 hours for DNS propagation.

## Step 5: Verify Deployment

1. Check your custom domain in a browser
2. Verify all pages load correctly
3. Test navigation and functionality
4. Check that redirects work properly

## Environment Variables (if needed)

If you need environment variables:

1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add any required variables
3. Redeploy if necessary

## Troubleshooting

### Common Issues:

1. **DNS not propagating**: Wait 24-48 hours
2. **Build errors**: Check Vercel build logs
3. **404 errors**: Verify your `vercel.json` configuration
4. **SSL issues**: Ensure DNS records are correct

### Useful Commands:

```bash
# Check DNS propagation
nslookup yourdomain.com

# Check build locally
pnpm build:docs

# Preview deployment
vercel --prod
```

## Production Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel deployment successful
- [ ] Custom domain configured
- [ ] DNS records added to GoDaddy
- [ ] SSL certificate active
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] SEO metadata correct
- [ ] Favicon and manifest.json working

## Support

If you encounter issues:

1. Check Vercel build logs
2. Verify DNS settings in GoDaddy
3. Use Vercel support documentation
4. Check GitHub repository settings

---

🎉 **Congratulations!** Your react-usekit documentation is now live on your custom domain!
