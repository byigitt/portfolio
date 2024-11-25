# Modern Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, TailwindCSS, and Shadcn/ui. Features a clean design, dark mode support, and smooth animations.

![Portfolio Preview](preview.png)

## Features

- 🎨 Modern and Clean Design
- 🌓 Dark/Light Mode
- 📱 Fully Responsive
- ⚡ Fast Performance
- 🎯 SEO Optimized
- 🎬 Smooth Animations with Framer Motion
- 📝 Easy to Customize
- 🛠 Built with:
  - Next.js 15
  - TypeScript
  - TailwindCSS
  - Shadcn/ui
  - Framer Motion
  - Lucide Icons

## Pages

- 🏠 Home - Hero section with quick links
- 👤 About - Personal introduction and background
- 💻 Skills - Technical skills and expertise
- 🎓 Education - Academic background
- 💼 Experience - Work experience and internships
- 🚀 Projects - Portfolio of projects with filtering
- 🏆 Achievements - Awards and volunteer work
- 📬 Contact - Contact form and social links

## Getting Started

1. Clone this repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio.git
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Update your information:
   - Edit \`src/data/projects.ts\` for your projects
   - Modify content in page components under \`src/app\`
   - Update social links in components

4. Run the development server:
\`\`\`bash
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) to see your portfolio

## Customization

### Changing Content
- Update personal information in respective page components
- Modify projects in \`src/data/projects.ts\`
- Edit navigation items in \`src/components/layout/navbar.tsx\`

### Styling
- Theme colors can be modified in \`src/app/globals.css\`
- Component styling uses Tailwind classes
- Shadcn/ui components can be customized in \`components.json\`

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE) - feel free to use this for your own portfolio!

## Credits

- UI Components: [shadcn/ui](https://ui.shadcn.com)
- Icons: [Lucide](https://lucide.dev)
- Animations: [Framer Motion](https://www.framer.com/motion)
