# Mini-svendeprøve frontend

# grimbil-frontend

# SvelteKit
## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app

# Go to folder
cd my-app

# Install node modules
npm install 
# Or
npm i
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# Or start the server and open the app in a new browser tab
npm run dev -- --open

# Make it available for all hosts
npm run dev -- --host
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Jsonwebtoken
```bash
npm install jsonwebtoken
```

## Docker
```bash
# Build
$ sudo docker build --no-cache -t grimbil-frontend:latest .

# Run
$ sudo docker run -d --name grimbil-frontend -p 3000:3000 grimbil-frontend:latest
```