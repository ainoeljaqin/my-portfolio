# Muhammad Ainul Yaqin - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring a dark monochrome theme with teal accents.

## 🌟 Features

- **Modern Dark Theme**: Professional dark monochrome design with teal accent colors
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth hover effects, typewriter text, and matrix background effects
- **Project Showcase**: Categorized portfolio with filtering capabilities
- **Contact Form**: Integrated with Formspree for static form submissions
- **CV Download**: Static PDF download functionality
- **GitHub Pages Ready**: Fully static website optimized for GitHub Pages deployment

## 📱 Pages

- **Home**: Hero section with animated typewriter effect and matrix background
- **Projects**: Portfolio showcase with category filtering
- **About**: Personal information, skills, and experience timeline
- **Blog**: Articles and publications (expandable)
- **Profile**: Professional overview with CV download
- **Contact**: Contact form and social links

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The site will automatically build and deploy

3. **GitHub Actions Workflow** (already configured in `.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy React App to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'yarn'
         
         - name: Install dependencies
           run: yarn install --frozen-lockfile
         
         - name: Build
           run: yarn build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./build
   ```

### Method 2: Manual Build and Deploy

1. **Build the project**:
   ```bash
   yarn build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   yarn add --dev gh-pages
   yarn run build
   npx gh-pages -d build
   ```

## ⚙️ Configuration

### 1. Update Personal Information

Edit `/src/data/mockData.js` with your personal information:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  github: "github.com/yourusername",
  linkedin: "linkedin.com/in/yourusername",
  // ... other details
};
```

### 2. Setup Contact Form (Formspree)

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace 'your-form-id' in `/src/pages/Contact.jsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/your-actual-form-id', {
   ```

### 3. Add Your CV

1. Create a folder `/public/assets/`
2. Add your CV as `CV-Your-Name.pdf`
3. Update the path in `/src/pages/Profile.jsx`:
   ```javascript
   link.href = '/assets/CV-Your-Name.pdf';
   ```

### 4. Update Projects

Modify the projects array in `/src/data/mockData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    category: "Web Development", // or "Game Development", "Research"
    techStack: ["React", "Node.js", "MongoDB"],
    image: "https://your-image-url.jpg",
    codeUrl: "https://github.com/yourusername/project",
    demoUrl: "https://your-demo-url.com",
    bgColor: "teal-accent"
  },
  // ... more projects
];
```

## 🎨 Customization

### Colors
The website uses a custom dark theme with teal accents. Colors are defined in `/src/index.css`:

```css
:root {
  --color-black: 21 21 21;           /* #151515 */
  --color-white: 255 255 255;        /* #ffffff */
  --color-teal-accent: 0 200 150;    /* #00C896 */
  /* ... other colors */
}
```

### Typography
The website uses Inter for headings and JetBrains Mono for code/monospace text.

### Layout
Responsive grid layouts with mobile-first approach using Tailwind CSS classes.

## 📂 Project Structure

```
frontend/
├── public/
│   ├── assets/           # Static assets (CV, images)
│   └── index.html
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Profile.jsx
│   │   └── Contact.jsx
│   ├── data/            # Static data
│   │   └── mockData.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
└── package.json
```

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Local Development
```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build

# Test the build locally
npx serve -s build
```

### Adding New Content

1. **New Project**: Add to the `projects` array in `mockData.js`
2. **Blog Post**: Add to the `blogPosts` array in `mockData.js`
3. **Skills**: Update the `skills` object in `mockData.js`
4. **Experience**: Update the `experience` array in `mockData.js`

## 📱 Mobile Optimization

- Responsive breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly button sizes (min 44px)
- Optimized typography scales for different screen sizes
- Mobile navigation patterns

## 🔍 SEO Optimization

- Semantic HTML structure
- Proper meta tags in `public/index.html`
- Alt tags for images
- Descriptive page titles
- Clean URL structure with React Router

## 📊 Performance

- Optimized images with proper sizes
- Code splitting with React lazy loading (can be implemented)
- Minimized CSS and JS bundles
- Fast loading times optimized for GitHub Pages

## 🎯 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with customization, feel free to open an issue or contact me through the contact form on the website.

---

**Built with ❤️ using React, Tailwind CSS, and deployed on GitHub Pages**