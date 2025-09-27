# Muhammad Ainul Yaqin - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring a dark monochrome theme with teal accents.

## 🌟 Features

- **Modern Dark Theme**: Professional dark monochrome design with teal accent colors (#00C896)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth hover effects, typewriter text, and matrix background effects
- **Real CV Integration**: Downloadable PDF resume with authentic project data
- **Project Showcase**: Real projects including Kediri UMKM E-Commerce, Education websites
- **Contact Form**: Integrated with Formspree for static form submissions
- **GitHub Pages Ready**: Fully static website optimized for GitHub Pages deployment

## 📱 Pages

- **Home**: Hero section with animated typewriter effect and matrix background
- **Projects**: Portfolio showcase with category filtering (Web Development, Software Development)
- **About**: Personal information, skills, and experience timeline
- **Blog**: Tech articles and professional insights
- **Profile**: Professional overview with real CV download (186KB PDF)
- **Contact**: Contact form and social links

## 🚀 Quick Start - Local Development

### Prerequisites
- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- Yarn package manager - [Installation guide](https://yarnpkg.com/getting-started/install)
- Git - [Download here](https://git-scm.com/)

### 1. Clone the Repository
```bash
# Clone this repository
git clone https://github.com/yourusername/muhammad-ainul-yaqin-portfolio.git

# Navigate to the project directory
cd muhammad-ainul-yaqin-portfolio
```

### 2. Install Dependencies
```bash
# Install all required packages
yarn install
```

### 3. Start Development Server
```bash
# Start the development server
yarn start

# The website will open automatically at http://localhost:3000
```

### 4. Build for Production (Optional)
```bash
# Create optimized production build
yarn build

# Test the production build locally
npx serve -s build
```

## 📂 Project Structure
```
frontend/
├── public/
│   ├── assets/              # Static assets (CV, images)
│   │   └── Muhammad-Ainul-Yaqin-resume.pdf
│   └── index.html
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   └── Footer.jsx       # Site footer
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page with matrix effect
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── About.jsx        # About page
│   │   ├── Blog.jsx         # Blog posts
│   │   ├── Profile.jsx      # Professional profile
│   │   └── Contact.jsx      # Contact form
│   ├── data/
│   │   └── mockData.js      # All website content and data
│   ├── App.js               # Main application component
│   ├── index.css            # Global styles and Tailwind
│   └── index.js             # Application entry point
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🚀 GitHub Pages Deployment

Deploy your portfolio to GitHub Pages for **FREE** hosting with a custom domain option.

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

#### Step 1: Prepare Your Repository
```bash
# Make sure all changes are committed
git add .
git commit -m "Portfolio website ready for deployment"
git push origin main
```

#### Step 2: Configure GitHub Repository
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. The deployment workflow is already configured in `.github/workflows/deploy.yml`

#### Step 3: Update Repository Settings
1. Edit `package.json` and update the `homepage` field:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```
2. Commit and push this change:
   ```bash
   git add package.json
   git commit -m "Update homepage URL for GitHub Pages"
   git push origin main
   ```

#### Step 4: Automatic Deployment
- GitHub Actions will automatically build and deploy your site
- Visit your live website at: `https://yourusername.github.io/your-repo-name`
- Updates deploy automatically when you push to the `main` branch

### Method 2: Manual Deployment with gh-pages

#### Install gh-pages
```bash
# Install gh-pages as a dev dependency
yarn add --dev gh-pages
```

#### Deploy Manually
```bash
# Build and deploy to GitHub Pages
yarn build
yarn deploy

# Or use the predefined script
yarn predeploy && yarn deploy
```

### 🌐 Custom Domain (Optional)
1. Buy a domain from any domain registrar
2. In your repository, go to **Settings** → **Pages**
3. Add your custom domain under **Custom domain**
4. Update the `cname` field in `.github/workflows/deploy.yml`:
   ```yaml
   cname: yourdomain.com
   ```

## ⚙️ Configuration & Customization

### 1. Update Personal Information
Edit `/src/data/mockData.js` with your details:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  phone: "your-phone-number",
  github: "github.com/yourusername",
  linkedin: "linkedin.com/in/yourusername",
  location: "Your City, Country",
  // ... other details
};
```

### 2. Setup Contact Form with Formspree

**Step 1**: Sign up at [Formspree.io](https://formspree.io) (Free tier available)

**Step 2**: Create a new form and get your form ID

**Step 3**: Update `/src/pages/Contact.jsx`:
```javascript
// Replace 'your-form-id' with your actual Formspree form ID
const response = await fetch('https://formspree.io/f/your-actual-form-id', {
```

**Step 4**: Test your contact form by submitting a message

### 3. Add Your CV/Resume

**Option A**: Replace the existing CV
1. Replace `/public/assets/Muhammad-Ainul-Yaqin-resume.pdf` with your CV
2. Keep the same filename, or update the filename in `/src/pages/Profile.jsx`

**Option B**: Use a different filename
1. Add your CV to `/public/assets/Your-Name-CV.pdf`
2. Update `/src/pages/Profile.jsx`:
   ```javascript
   link.href = '/assets/Your-Name-CV.pdf';
   ```

### 4. Update Projects Portfolio

Edit the `projects` array in `/src/data/mockData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief project description",
    category: "Web Development", // or "Software Development"
    techStack: ["React", "Node.js", "MongoDB"],
    image: "https://your-image-url.jpg", // Use Unsplash or your images
    codeUrl: "https://github.com/yourusername/project",
    demoUrl: "https://your-demo-url.com",
    bgColor: "teal-accent"
  },
  // ... add more projects
];
```

### 5. Customize Colors and Theme

Colors are defined in `/src/index.css`:

```css
:root {
  --color-black: 21 21 21;           /* #151515 - Main background */
  --color-teal-accent: 0 200 150;    /* #00C896 - Accent color */
  /* ... other colors */
}
```

### 6. Update Skills and Experience

Modify the `skills`, `experience`, and `education` objects in `/src/data/mockData.js` to reflect your background.

## 🛠️ Development Commands

```bash
# Start development server
yarn start

# Build for production
yarn build

# Test production build locally
npx serve -s build

# Deploy to GitHub Pages (if using manual method)
yarn deploy

# Install new dependencies
yarn add package-name

# Install dev dependencies
yarn add --dev package-name
```

## 🌍 Live Demo

Visit the live demo: [Muhammad Ainul Yaqin Portfolio](https://yourusername.github.io/your-repo-name)

## 📱 Mobile Optimization

- Responsive breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly button sizes (minimum 44px)
- Optimized typography scales for different screen sizes
- Mobile-first design approach

## 🔍 SEO Features

- Semantic HTML structure
- Proper meta tags in `public/index.html`
- Alt tags for images
- Descriptive page titles
- Clean URL structure with React Router

## 🚀 Performance Features

- Optimized images with proper dimensions
- Minimized CSS and JS bundles
- Fast loading times
- Code splitting ready (can be implemented)
- Static site generation for GitHub Pages

## 📊 Browser Support

- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox
- ✅ Safari (Desktop & Mobile)  
- ✅ Edge
- ✅ Modern mobile browsers

## 🐛 Troubleshooting

### Common Issues:

**1. Site not loading on GitHub Pages**
- Check if the `homepage` field in `package.json` is correct
- Ensure GitHub Actions workflow completed successfully
- Verify repository settings under Pages section

**2. Contact form not working**
- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure form endpoint URL is properly formatted

**3. CV download not working**
- Verify CV file exists in `/public/assets/` folder
- Check filename matches the one referenced in code
- Test locally first with `yarn start`

**4. Images not displaying**
- Verify image URLs are accessible
- Check browser developer tools for 404 errors
- Consider using relative paths for local images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have questions or need help customizing the portfolio:

- 📧 Email: aanainul110303@gmail.com
- 💼 LinkedIn: [Muhammad Ainul Yaqin](https://linkedin.com/in/muhammad-ainul-yaqin-36bb88297)
- 🔗 GitHub: [ainoeljaqin](https://github.com/ainoeljaqin)

---

**Built with ❤️ using React, Tailwind CSS, and deployed on GitHub Pages**

⭐ **Star this repository if it helped you!**