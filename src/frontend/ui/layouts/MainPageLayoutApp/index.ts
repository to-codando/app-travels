import { html, render } from "iares";

export type Options = {
  title: string;
  stylePath?: string;
  lang?: string;
};

const renderStyle = (filePath: string) => {
  if (!filePath) return "";
  return /*html*/ `<link rel="stylesheet" href="${filePath}">`;
};

export const MainPageLayoutApp = (componentFactory: Function, options: Options) => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="${options?.lang || "pt-BR"}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/svg+xml" href="./assets/images/favicon.svg">
      <title>${options.title}</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,300,0,0" />
      <link rel="stylesheet" href="/assets/styles/main.css" />

      ${renderStyle(options?.stylePath || "")}
    </head>
    <body style="opacity:0">
      ${render(html`<${componentFactory} title="${options.title}"/>`)}

      <script type="module">
        import { createApp } from './main.js'
        const app = createApp()
        app.mount()
      </script>
    </body>
    </html>
  `;
};
