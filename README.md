# Spencer Frost Portfolio

My personal portfolio website built with Nuxt 3, Tailwind CSS v4, and ShadCN UI.

## 🚀 Features

- **Server-Side Rendering (SSR)** with Nuxt 3
- **Modern UI components** using ShadCN UI
- **Type-safe** with TypeScript
- **Responsive design** with Tailwind CSS v4
- **Catppuccin theme** for beautiful, cohesive styling
- **Performance optimized** with image optimization and code splitting
- **Continuous Integration** using CircleCI

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **UI Library**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theme**: [Catppuccin](https://github.com/catppuccin/tailwindcss)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Build Tool**: [Vite](https://vitejs.dev/) (via Nuxt)
- **Deployment**: CircleCI → NGINX

## 📋 Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher

## 🚦 Getting Started

1. Clone the repository

  ```bash
  git clone https://github.com/spencerfrost/portfolio.git
  cd portfolio
  ```

2. Install dependencies

  ```bash
  pnpm install
  ```

3. Start the development server

  ```bash
  pnpm dev
  ```

4. Open your browser and visit `http://localhost:3000`

## 📦 Build and Production

### Generate static site

```bash
pnpm generate
```

### Preview production build

```bash
pnpm preview
```

### Build for production

```bash
pnpm build
```

## 🚢 Deployment

The site is automatically deployed using CircleCI when changes are pushed to the `master` branch.

### Manual deployment

If needed, you can manually deploy using:

```bash
pnpm build
```

Then copy the contents of the `.output` directory to your web server.

## 📁 Project Structure

```
spencer-frost-portfolio/
├── .nuxt/                # Nuxt build files
├── .output/              # Production build output
├── assets/               # CSS, SCSS files
│   └── css/              # Tailwind CSS
├── components/           # Vue components
│   ├── sections/         # Page section components
│   └── ui/               # ShadCN UI components
├── layouts/              # Nuxt layouts
├── lib/                  # Utility functions
├── pages/                # Route pages
├── public/               # Static files
│   └── images/           # Image assets
├── server/               # Server-side code
├── app.vue               # App entry point
├── nuxt.config.ts        # Nuxt configuration
└── package.json          # Dependencies
```

## 🧩 Components

This project uses ShadCN UI components, which are located in the `components/ui` directory. These components are styled using Tailwind CSS and follow the Catppuccin theme.

To add a new ShadCN component, use:

```bash
npx shadcn-vue add button
```

## 🎨 Styling

The project uses Tailwind CSS v4 for styling. The main configuration is handled through Nuxt modules in `nuxt.config.ts`.

Custom CSS can be added to `assets/styles/tailwind.css`.

## 🧪 Development Notes

### Adding new pages

Create a new file in the `pages` directory. Nuxt will automatically create a route for it.

### Working with components

All reusable components should be placed in the `components` directory. They will be auto-imported by Nuxt.

### Environment variables

Environment variables should be added to `.env` file and referenced in `nuxt.config.ts`.

## 📝 License

MIT

## 👤 Author

Spencer Frost

- Website: [mrspinn.ca](https://www.mrspinn.ca)
- GitHub: [@spencerfrost](https://github.com/spencerfrost)
- LinkedIn: [Spencer Frost](https://www.linkedin.com/in/spencer-frost-40405463/)
