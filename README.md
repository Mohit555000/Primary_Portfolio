# Portfolio Website - Mohit Gangwani

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Component-Based**: Modular architecture for easy maintenance
- **Centralized Data**: All personal information in one file for easy updates
- **Smooth Animations**: Framer Motion for beautiful scroll animations
- **Custom Styling**: Tailwind CSS with custom color scheme

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Top navigation bar
│   │   ├── Hero.jsx          # Hero/landing section
│   │   ├── About.jsx         # About section
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Education.jsx     # Education timeline
│   │   ├── Contact.jsx       # Contact with social links
│   │   └── Footer.jsx        # Footer component
│   ├── data/
│   │   └── portfolioData.js  # ALL YOUR DATA HERE
│   ├── App.jsx               # Main app component
│   ├── App.css               # Custom styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── postcss.config.js         # PostCSS configuration
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd portfolio-website
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## ✏️ Customization Guide

### Update Your Personal Information

All your data is centralized in one file: `src/data/portfolioData.js`

#### Personal Info
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  email: "your.email@example.com",
  location: "Your Location",
};
```

#### About Section
```javascript
export const aboutInfo = {
  description: [
    "Your first paragraph...",
    "Your second paragraph..."
  ],
  skills: [
    { label: 'Skill Category', value: 'Technologies' },
    // Add more skills...
  ]
};
```

#### Projects
```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    tags: ['Tech1', 'Tech2'],
    color: 'from-blue-400 to-blue-600', // Tailwind gradient
    github: 'https://github.com/yourusername/repo',
    live: 'https://your-live-site.com' // or null if no live demo
  },
  // Add more projects...
];
```

#### Education
```javascript
export const education = [
  {
    id: 1,
    degree: 'Your Degree',
    institution: 'Institution Name',
    year: '2019 - 2023',
    description: 'Description...'
  },
  // Add more education...
];
```

#### Social Links
```javascript
export const socialLinks = [
  {
    name: 'Platform Name',
    icon: 'SVG path data', // You can find icons at heroicons.com
    url: 'https://your-profile-url.com'
  },
  // Add more social links...
];
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'primary': '#0a0a0a',      // Dark color
  'secondary': '#f5f5f5',    // Light background
  'accent': '#ff6b35',       // Main accent color
  'accent-light': '#ffa07a', // Lighter accent
}
```

### Change Fonts

1. Update Google Fonts import in `src/index.css`
2. Update font families in `tailwind.config.js`

## 📦 Dependencies

- **React 18**: UI framework
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and dev server

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Run `npm run build`
2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🎨 Customization Tips

1. **Add More Sections**: Create new components in `src/components/` and import them in `App.jsx`
2. **Change Layout**: Edit individual component files
3. **Add More Animations**: Use Framer Motion's `motion` components
4. **Responsive Design**: Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)

## 📝 To-Do After Setup

- [ ] Update all personal information in `portfolioData.js`
- [ ] Replace project placeholders with your real projects
- [ ] Update education details
- [ ] Add your social media links
- [ ] Change colors to match your brand (optional)
- [ ] Add your own favicon
- [ ] Test on mobile devices
- [ ] Deploy to your hosting platform

## 🤝 Support

If you need help or have questions:
1. Check the component files - they're well-commented
2. Review the Tailwind CSS documentation
3. Check Framer Motion docs for animation customization

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
