# Watson Site

Site made with [Nuxt 3](https://v3.nuxtjs.org).

## Setup

Configure your VS Code Editor

1. Follow the [prerequisites](https://v3.nuxtjs.org/getting-started/introduction#prerequisites) to configure a Nuxt 3 project.
2. Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) into your VS Code.
3. Configure your Workspace Settings to work with Prettier in all file extensions and languages.

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[md]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Setup and Development

Install all the dependencies of the project and start the development server.

```bash
yarn install
yarn dev
```

Development server will start on http://localhost:3000

## Production

Build the application for production:

```bash
yarn build
```

## Deployment

We will use Vercel platform

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
