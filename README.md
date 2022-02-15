# Watson Site

Site made with [Nuxt 2](https://nuxtjs.org).

## Setup

Configure your VS Code Editor

1. Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) into your VS Code.
2. Install [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) into your VS Code.
3. Configure your Workspace Settings to work with Eslint/Prettier correctly.

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.options": {
    "extensions": [".js", ".vue"]
  },
  "eslint.validate": ["vue", "javascript"],
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[md]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Setup and Development

Install all the dependencies of the project and start the development server.

```bash
yarn
yarn dev
```

Development server will start on http://localhost:3000

## Production

Build the application for production:

```bash
yarn build
yarn generate
```

## Deployment

We will use Vercel platform
