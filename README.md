 # Pixel Calculator

A comprehensive pixel aspect ratio calculator website built with Jekyll, featuring multiple calculator types, theme switching, and modern responsive design.

## 🌟 Features

- **Multiple Calculator Types**: Dedicated calculators for 16:9, 4:3, and 9:16 aspect ratios
- **Comprehensive Guides**: Educational content covering aspect ratios for images, videos, and photography
- **Theme Switching**: Light and dark mode support with persistent preferences
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Scrolling**: Lenis-powered smooth scroll with accessibility support
- **Modern UI**: Bootstrap 5.3 with custom styling and animations
- **Accessibility**: Reduced motion support and keyboard navigation

## 🛠️ Tech Stack

- **Static Site Generator**: Jekyll
- **CSS Framework**: Bootstrap 5.3.8
- **Build Tools**: npm, Sass
- **JavaScript**: Vanilla JS with Lenis smooth scroll
- **Icons**: Custom SVG icons
- **Deployment**: Static hosting (GitHub Pages, Netlify, etc.)

## 🚀 Quick Start

### Prerequisites

- Ruby (for Jekyll)
- Node.js and npm (for build tools)
- Bundler gem

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd pixel-calc
   ```

2. **Install Ruby dependencies:**
   ```bash
   bundle install
   ```

3. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

4. **Build the CSS:**
   ```bash
   npm run build-css
   ```

5. **Start the development server:**
   ```bash
   bundle exec jekyll serve --host 0.0.0.0 --port 4000
   ```

6. **Open your browser:**
   Visit `http://localhost:4000`

## 📁 Project Structure

```
pixel-calc/
├── src/                    # Jekyll source files
│   ├── _includes/         # Reusable components (header, footer)
│   ├── _layouts/          # Page layouts
│   ├── assets/            # Static assets
│   │   ├── css/          # Compiled CSS
│   │   ├── js/           # JavaScript files
│   │   └── scss/         # Sass source files
│   ├── favicon.ico       # Favicon (multiple sizes)
│   ├── favicon.svg       # SVG favicon
│   └── index.html        # Main calculator page
├── _config.yml           # Jekyll configuration
├── package.json          # Node.js dependencies and scripts
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## 🔧 Build Scripts

### CSS Development
```bash
npm run watch-css  # Watch mode for development
npm run build-css  # Production build (compressed)
```

### Jekyll Commands
```bash
bundle exec jekyll serve     # Development server
bundle exec jekyll build     # Production build
```

### Combined Development Workflow
```bash
# Terminal 1: Watch CSS changes
npm run watch-css

# Terminal 2: Run Jekyll server
bundle exec jekyll serve
```

## 🎨 Customization

### Themes
The site supports light and dark themes with automatic system preference detection. Users can manually switch themes, and their preference is saved in localStorage.

### Styling
- Custom variables in `src/assets/scss/main.scss`
- Bootstrap overrides for consistent theming
- Responsive breakpoints and utilities

### Calculator Logic
Each calculator page uses shared JavaScript for pixel calculations and aspect ratio simplification.

## 📱 Pages

- **Home (`/`)**: Main calculator with all ratio types
- **16:9 Calculator (`/16x9-calculator/`)**: Dedicated widescreen calculator
- **4:3 Calculator (`/4x3-calculator/`)**: Traditional aspect ratio calculator
- **9:16 Calculator (`/9x16-calculator/`)**: Vertical video calculator
- **Aspect Ratio Guide (`/aspect-ratio/`)**: Educational content
- **Image Ratios (`/image-aspect-ratio/`)**: Photography and image guides
- **Video Ratios (`/video-aspect-ratio/`)**: Video production guides

## 🌐 Deployment

### Static Hosting
Since this is a Jekyll static site, it can be deployed to any static hosting service:

1. **Build for production:**
   ```bash
   npm run build-css
   bundle exec jekyll build
   ```

2. **Deploy the `_site/` directory** to:
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - Any static web server

### Environment Variables
No environment variables are required. All configuration is handled through Jekyll's `_config.yml`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `bundle exec jekyll serve`
5. Submit a pull request

## 📄 License

This project is open source. Feel free to modify and distribute.

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Styled with [Bootstrap](https://getbootstrap.com/)
- Smooth scrolling powered by [Lenis](https://lenis.studiofreight.com/)
- Icons designed with custom SVG