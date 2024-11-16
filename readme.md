# The Project

This project consists of a responsive application, builded with the most modern, efficient, and productive technologies.

This project is based on the standard rendering (SSR) that facilitates the application of SEO by delivering only simple HTML to the browser. However, when loading the page, the browser activates the javascript resources that make the application reactive, favoring the best UX.

## Technologies 

- **Languages**: HTML, CSS, Typescript
- **Standards and practices**: Hexagonal Archtecture, KISS, YAGNI, 2CA
- **Core libraries**: IARES, IARES-UI

## General aspect of the project

Below you will find information about the project structure, its folder structure and adopted architectures.

## Project Structure

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
│   │   ├── useCases/
│   │   │   ├── user/
│   │   │   │   ├── index.ts
│   │   │   │   └── test.spec.ts
│   │   │   └── other/
│   │   │       ├── index.ts
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
## The [ app/ ] directory

The `app` directory contains the core logic of the application, organized into several subdirectories to manage different aspects of the project.


### The subdirectory adapters
- **Purpose**: Adapters are responsible for integrating external services, APIs, or other systems.
  - **Structure**: Each adapter (e.g., `AuthAdapter`, `OtherAdapter`) has its own subdirectory containing:
    - **index.ts**: Interface or contract of the adapter.
    - **implementation.ts**: Concrete implementation of the adapter.
    - **test.spec.ts**: Unit tests for the adapter.

### The subdirectory services
- **Purpose**: Services perform complex and domain-specific actions.
  - **Structure**: Services are organized by context (e.g., `user`, `other`, `shared`).
    - Each service has its own subdirectory containing:
      - **index.ts**: Definition of the service.
      - **test.spec.ts**: Unit tests for the service.

### The subdirectory formatters (or transformers)
- **Purpose**: Formatters or transformers handle data formatting and transformation.
  - **Structure**: Similar to services, organized by context (e.g., `user`, `other`, `shared`).
    - Each formatter has its own subdirectory containing:
      - **index.ts**: Definition of the formatter.
      - **test.spec.ts**: Unit tests for the formatter.

### The subdirectory validators
- **Purpose**: Validators contain logic for data validation.
  - **Structure**: Validators are organized by context (e.g., `email`, `other`).
    - Each validator has its own subdirectory containing:
      - **index.ts**: Definition of the validator.
      - **test.spec.ts**: Unit tests for the validator.

### The subdirectory useCases (Optional but Recommended)
- **Purpose**: Use cases define the business logic and orchestrate the interactions between services and adapters.
  - **Structure**: Use cases are organized by context (e.g., `user`, `product`, `order`).
    - Each use case has its own subdirectory containing:
      - **[UseCaseName].ts**: Definition of the use case.
      - **tests.ts**: Unit tests for the use case.

## Benefits

    **Separation of Concerns**: Each subdirectory has a clear and specific responsibility, making it easier to maintain and scale the project.
    **Testability**: The structure allows for easy writing of unit tests and integration tests.
    **Reusability**: Services, formatters, and validators can be reused across different parts of the application.
    **Scalability**: The clear structure helps in organizing new features and components without cluttering the existing codebase.

This structure aligns with principles like "Ports and Adapters" and "Domain-Driven Design," ensuring that the application's logic is well-organized and maintainable.

## The [ ui/ ] directory

### Overview
The `ui` directory contains the components and structures that make up the user interface of the application. It is organized into several subdirectories to manage different levels of complexity and functionality.

### Subdirectories

#### elements
- **Purpose**: Basic and reusable components, such as buttons, inputs, and icons. These are the fundamental building blocks of the interface.
  - **Structure**: Each element has its own subdirectory containing:
    - **[ElementName].ts**: Definition of the component.
    - **state.ts**: State logic for the component.
    - **types.ts**: Type definitions for the component.
    - **actions.ts**: Actions related to the component.
    - **hooks.ts**: Hooks for the component.
    - **tests.ts**: Unit tests for the component.

#### blocks
- **Purpose**: Components composed of elements, such as cards or form components. These blocks combine elements to form more complex and functional components.
  - **Structure**: Similar to elements, each block has its own subdirectory containing:
    - **[BlockName].ts**: Definition of the component.
    - **state.ts**: State logic for the component.
    - **types.ts**: Type definitions for the component.
    - **actions.ts**: Actions related to the component.
    - **hooks.ts**: Hooks for the component.
    - **tests.ts**: Unit tests for the component.

#### sections
- **Purpose**: Larger components that organize blocks into dedicated areas with specific goals, such as headers, footers, or main sections of a page.
  - **Structure**: Each section has its own subdirectory containing:
    - **[SectionName].ts**: Definition of the component.
    - **state.ts**: State logic for the component.
    - **types.ts**: Type definitions for the component.
    - **actions.ts**: Actions related to the component.
    - **hooks.ts**: Hooks for the component.
    - **tests.ts**: Unit tests for the component.

#### pages
- **Purpose**: Complete structures that make up a page, combining sections to form full screens within the application.
  - **Structure**: Each page has its own subdirectory containing:
    - **[PageName].ts**: Definition of the component.
    - **state.ts**: State logic for the component.
    - **types.ts**: Type definitions for the component.
    - **actions.ts**: Actions related to the component.
    - **hooks.ts**: Hooks for the component.
    - **tests.ts**: Unit tests for the component.

#### layouts
- **Purpose**: Structural templates that define the organization and arrangement of components within the application's pages.
  - **Structure**: Each layout has its own subdirectory containing:
    - **[LayoutName].ts**: Definition of the component.
    - **state.ts**: State logic for the component.
    - **types.ts**: Type definitions for the component.
    - **actions.ts**: Actions related to the component.
    - **hooks.ts**: Hooks for the component.
    - **tests.ts**: Unit tests for the component.


### Components organization

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

## Component Layers

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

## Cloning the project


```
git clone git@github.com:to-codando/diBoaApp.git

```

## Running the project

Install bun to serve the application and npm to manage its dependencies.

- Bun installation

```
curl -fsSL https://bun.sh/install | bash

```

- PNPM Installation

```
curl -fsSL https://get.pnpm.io/install.sh | sh -

```

Install the project dependencies with the command below:

```
pnpm -i
```

Running in development mode:

```
bun dev

```

Running in production mode:
```
bun start

```

## Accessing the application

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

