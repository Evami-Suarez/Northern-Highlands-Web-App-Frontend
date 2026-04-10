# Northern Highlands Web App Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It provides a modern, fast, and scalable frontend for the Northern Highlands Web App.

For an overview of the project structure, see [FILE_STRUCTURE.md](./FILE_STRUCTURE.md).

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, pnpm, or bun package manager
- A code editor like [VS Code](https://code.visualstudio.com/)

## Getting Started

### 1. Install Dependencies

First, install all required packages:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

### 3. Make Your First Change

You can start editing the page by modifying `app/page.tsx`. The page will automatically update as you edit the file—this feature is called Hot Module Replacement (HMR).

## Project Features

- **Next.js Framework**: Built with the latest Next.js features for optimal performance
- **Font Optimization**: This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a modern font family
- **Fast Refresh**: See your changes instantly without losing state
- **SSR & SSG Support**: Server-side rendering and static site generation capabilities

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the project for production
- `npm start` - Start production server
- `npm run lint` - Run code linting

## Learn More

To expand your knowledge, explore these resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features, API routes, and more
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial to master Next.js concepts
- [Vercel Docs](https://vercel.com/docs) - Platform documentation for deployment and collaboration
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Contribute to the framework and view source code

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the Next.js team.

**Steps:**

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect next.js and configure build settings
4. Your app will be live in minutes!

For detailed deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Deployment Options

- [Netlify](https://www.netlify.com/) - Supports Next.js deployments
- [Railway](https://railway.app/) - Simple and straightforward deployment
- [Self-hosted](https://nextjs.org/docs/app/building-your-application/deploying/self-hosted) - Deploy to your own server

## Troubleshooting

**Port 3000 already in use?**

```bash
npm run dev -- -p 3001
```

**Module not found errors?**

```bash
npm install
```

**Need to clear cache?**

```bash
rm -rf .next
npm run dev
```

