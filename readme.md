# The Project

This project consists of a responsive application, with the most modern technology.

This project is based on the standard rendering (SSR) that facilitates the application of SEO by delivering only simple HTML to the browser. However, when loading the page, the browser activates the javascript resources that make the application reactive, favoring the best UX.

## Technologies used

- **Languages**: HTML, CSS, Typescript
- **Standards and practices**: Hexagonal Archtecture, KISS, YAGNI, 2CA
- **Core libraries**: IARES, IARES-UI

## General aspect of the project

Below you will find information about the project structure, its folder structure and adopted architectures.

### Project Structure

```
App/
├── src/
│   ├── app/
│   │   ├── adapters/
│   │   │   ├── AuthAdapter/
│   │   │   │   ├── index.ts
│   │   │   │   ├── implementation.ts
│   │   │   │   └── test.spec.ts
│   │   │   └── OtherAdapter/
│   │   │       ├── index.ts
│   │   │       ├── implementation.ts
│   │   │       └── test.spec.ts
│   │   │
│   │   ├── services/
│   │   │   ├── user/
│   │   │   │   ├── index.ts
│   │   │   │   └── test.spec.ts
│   │   │   ├── other/
│   │   │   │   ├── index.ts
│   │   │   │   └── test.spec.ts
│   │   │   └── shared/
│   │   │       └── AnySharedService/
│   │   │           ├── index.ts
│   │   │           └── test.spec.ts
│   │   │
│   │   ├── formatters/
│   │   │   ├── user/
│   │   │   │   ├── index.ts
│   │   │   │   └── test.spec.ts
│   │   │   ├── other/
│   │   │   │   ├── index.ts
│   │   │   │   └── test.spec.ts
│   │   │   └── shared/
│   │   │       └── AnySharedService/
│   │   │           ├── index.ts
│   │   │           └── test.spec.ts
│   │   │
│   │   └── validators/
│   │       ├── email/
│   │       │   ├── index.ts
│   │       │   └── test.spec.ts
│   │       └── other/
│   │           ├── index.ts
│   │           └── test.spec.ts
│   │   
│   ├── ui/
│   │    ├── elements/          
│   │    │   ├── Button/
│   │    │   │   ├── Button.ts
│   │    │   │   ├── Button.css 
│   │    │   │   ├── state.ts
│   │    │   │   ├── types.ts
│   │    │   │   ├── actions.ts
│   │    │   │   ├── hooks.ts
│   │    │   │   └── tests.ts
│   │    │   └── Other components...
│   │    │
│   │    ├── blocks/ (The same structure as the elements directory)            
│   │    ├── sections/(The same structure as the elements directory)           
│   │    ├── layouts/ (The same structure as the elements directory)           
│   │    └── pages/ (The same structure as the elements directory)              
│   │
│   ├── store/
│   │    ├── state.ts            
│   │    ├── actions/         
│   │    │  ├──index.ts
│   │    │  └── test.spec.ts
│   │    ├── types.ts
│   │    └── index.ts            
│   │     
└── public/ 
    └── assets/
        ├── styles/
        │   ├── reset.css
        │    ├── globals.css
        │    ├── var.css
        │    ├── grid.css
        │    └── main.css
        └── images/
            └── logo.png  # Exemplo
```

### 2CA - Architecture for Organizing Components

2CA is the architecture adopted to define and combine components. This UI architecture promotes modularity, reusability, scalability and easy maintenance.

### 2CA - Its Benefits

2CA mainly uses the principles of Clean Component Architecture and Comprehensible Component Architecture to create complete, simple, easy to understand, scale and maintain components. Despite the emblematic names, 2CA is easy to apply and understand.

### 2CA - Folder Structure

Below, the folder and file structure that governs the components within the 2CA architecture:


- **ui (User Interface)**
  - **elements**: Basic and reusable components, such as buttons, inputs, and icons. These are the fundamental building blocks.
  - **blocks**: Components composed by combining elements to form more functional components, like cards and lists.
  - **sections**: Organize blocks into dedicated areas with specific goals, such as filters and product displays in a catalog. Each section defines a distinct functional area within a page.
  - **layouts**: Structural templates that define the organization and arrangement of elements, blocks, and sections within the application's pages.
  - **pages**: Complete structures that make up a page, combining sections to form full screens within the application. These often correspond to the application's routes.
  - **themes**: Management of themes and global styles, including design variables like colors, typography, and spacing, applicable to all components.
  
  ## Component Cascade

This is a basic explanation of how components can be organized in layers to compose visual interface structures.

```raw
Pages
└── Layouts
    ├── Sections
    │   ├── Blocks
    │   │   └── Elements
    │   └── Blocks
    │       └── Elements
    └── Sections
        ├── Blocks
        │   └── Elements
        └── Blocks
            └── Elements
```


### Hierarchy:

- **Elements**: These are the basic atomic components, such as buttons, inputs, etc. They form the foundation of all other components.

- **Blocks**: They are sets of elements that create more complex components, like cards or forms.

- **Sections**: These are groupings of blocks that serve a specific purpose, such as a product section or image gallery.

- **Layouts**: Structures that define the organization and arrangement of sections in the interface. They manage the structure of an application, including headers, footers, and the overall content layout.

- **Pages**: They use layouts to define the complete structure of a page, grouping different sections to form a cohesive screen that the user will see in the application.

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
