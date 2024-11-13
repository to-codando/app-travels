# The Project

This project consists of a responsive application, with the most modern technology.

This project is based on the standard rendering (SSR) that facilitates the application of SEO by delivering only simple HTML to the browser. However, when loading the page, the browser activates the javascript resources that make the application reactive, favoring the best UX.

## Technologies used

- Languages:
Typescript
HTML
CSS

- Libraries:
IARES
IARES-UI
Bun test
Biome

- Standards and practices:
KISS
YAGNI

- Run time, packagers and servers:
Esbuild
Bun
Elysia

## General aspect of the project

Below you will find information about the project structure, its folder structure and adopted architectures.

### 2CA - Architecture for Organizing Components

2CA is the architecture adopted to define and combine components. This UI architecture promotes modularity, reusability, scalability and easy maintenance.

### 2CA - Its Benefits

2CA mainly uses the principles of Clean Component Architecture and Comprehensible Component Architecture to create complete, simple, easy to understand, scale and maintain components. Despite the emblematic names, 2CA is easy to apply and understand.

### 2CA - Folder Structure

Below, the folder and file structure that governs the components within the 2CA architecture:

- **elements**: Self-contained components that do not depend on other components.
- **blocks**: Components formed by the combination of other components.
- **layouts**: Components that structure an interface pattern and that can be composed of elements and blocks.
- **views**: Components that structure part of the user interface using one or more layouts.
- **pages**: Components that group one or more views to form the complete user interface.

> The folder structure is defined in the `src/component/ui` directory.

## Cloning the project

```
npx degit to-codando/iares-template-ssr new-app
```

## Running the project

Install bun to run the project later.

```
curl -fsSL https://bun.sh/install | bash
```

Install the project dependencies with the command below:

```
bun -i
```

Running in development mode:
```
bun dev
```

Running in production mode:
```
bun start
```

## Accessing the application in the browser
Before accessing the application through the browser, you need to define the environment variables that define through which protocol, IP and port the application will be served in the browser.

The default environment variables are defined in the .env file at the root of the project and you should adjust their values ​​according to your needs.

```
PROTOCOL=http
HOST=127.0.0.1
PORT=3000
ENVIRONMENT=development
```
## SSL/TLS Certificate

You can use the default certificate present in the project's SSH directory to serve the application using HTTPS in development mode. However, do not forget to take the necessary security precautions when versioning the application with git and when deploying.

I strongly recommend that for security purposes you remove the SSH directory and the .ENV file from the git versioning history.
