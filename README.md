# RHT21 Portfolio

A modern, component‑driven portfolio built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**.  
It showcases Rohit Mishra’s (RHT21) work, including personal projects, freelance collaborations, and UI component library.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Adding a New Component](#adding-a-new-component)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

Visit the live site at **[rht21.in](https://rht21.xyz/)**.

---

## Features

- **Component showcase** – Interactive previews, source code, installation steps, and props documentation for each UI component.
- **Dynamic routing** – Each component has its own page (`/components/:id`).
- **Theming** – Dark / light mode powered by `next-themes`.
- **Responsive design** – Tailwind utilities ensure the site looks great on all devices.
- **Accessibility** – Utilizes Radix UI primitives for accessible UI patterns.
- **SEO‑optimized** – Proper meta tags, Open Graph data, and semantic HTML.

---

## Tech Stack

| Category        | Tools & Libraries                                      |
| --------------- | ------------------------------------------------------ |
| Framework       | **Next.js 15** (App Router)                            |
| Language        | **TypeScript** (React 19)                              |
| Styling         | **Tailwind CSS 4**, **Tailwind Merge**, **clsx**       |
| UI primitives   | **Radix UI** (Collapsible, Dialog, Separator, Tooltip) |
| Icons           | **Tabler Icons**, **Lucide React**                     |
| Animations      | **ldrs** (loader)                                      |
| Linting         | **ESLint** (Next.js core web vitals)                   |
| Formatting      | **Prettier** with `prettier-plugin-tailwindcss`        |
| Build tool      | **TurboPack** (Next.js default)                        |
| Version control | **Git**                                                |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **pnpm**, **yarn**, **npm**, or **bun** (any package manager)

### Install dependencies

```bash
# Using npm
npm install

# Or with Yarn
yarn install

# Or with pnpm
pnpm install

# Or with Bun
bun install
```

### Development

```bash
# Starts the dev server (TurboPack)
npm run dev   # or yarn dev / pnpm dev / bun dev
```

Open <http://localhost:3000> in your browser. The site hot‑reloads on file changes.

### Build for production

```bash
npm run build   # or yarn build / pnpm build
```

### Start the production server

```bash
npm start   # or yarn start / pnpm start
```

---

## Adding a New Component to the Library

1. **Create the component** in `components/ui/YourComponent.tsx`.
2. **Add a preview** (optional) in `components/react-components/YourComponentPreview.tsx`.
3. **Update the registry** (`lib/docs-registry.tsx`):

   ```ts
   import YourComponent from "@/components/ui/YourComponent";

   export const docsList = [
     // ...existing entries
     {
       id: "your-component",
       name: "YourComponent",
       description: "A short description of what it does.",
       preview: <YourComponentPreview />,
       previewCode: `<YourComponent … />`,
       code: `import { YourComponent } from "@/components/ui/YourComponent";
   ```

export const YourComponent = () => { … }`,
props: [
{ name: "propName", type: "string", default: "''", description: "…" },
// ...more props
],
},
];

```
4. **Run the dev server** – the new component will appear under **Components → YourComponent** with live preview, source code, installation steps, and props table.

---

## Scripts

| Command | Description |
|---------|-------------|
| `dev`   | Start development server (TurboPack) |
| `build` | Compile the app for production |
| `start` | Run the production build locally |
| `lint`  | Run ESLint (Next.js core web vitals) |

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/awesome-feature`).
3. Commit your changes with clear messages.
4. Push the branch and open a PR.

Please ensure linting (`npm run lint`) passes and that your code follows the existing style (Prettier + Tailwind CSS conventions).

---

## License

This project is **private** and not open‑sourced. The code is provided for personal portfolio purposes only.

---

*Built with ❤️ by **RHT21** – [GitHub](https://github.com/rht-21/rht21.in)*
```
