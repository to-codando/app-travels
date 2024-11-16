declare module "env";

declare module "global-jsdom" {
  import type { ConstructorOptions } from "jsdom";

  function globalJsdom(html?: string, options?: ConstructorOptions): () => void;

  export = globalJsdom;
}

declare namespace NodeJS {
  interface ProcessEnv {
    PROTOCOL: "http" | "https"; // Especifique os valores possíveis para a variável PROTOCOL
    HOST: string; // Se você tem valores específicos, pode usar tipos literais ou simplesmente string
    PORT: string; // Embora PORT seja numérico na execução, ela vem como string do ambiente
    BUILD_VERSION: string;
    IARES_UI_STATICS: string;
    TLS_KEY: string;
    TLS_CERT: string;
    CERT_PATH: string;
  }
}

declare global {
  interface EventSourceEventMap<T> {
    message: MessageEvent<T>;
  }
}
