import { join } from "node:path";
import { html as HTMLElysia } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";
import globalJsdom from "global-jsdom";
import { AppHome } from "./src/components/pages";
import { MainPageLayout } from "./src/layouts";

const PROTOCOL = process.env.PROTOCOL;
const PORT = (process?.env?.PORT && +process.env.PORT) || 3000;
const HOST = process?.env?.HOST || "localhost";

const TLS_KEY = process.env.TLS_KEY;
const TLS_CERT = process.env.TLS_CERT;
const CERT_PATH = join(__dirname, process.env.CERT_PATH as string);
const KEY_PEM = join(`${CERT_PATH}/${TLS_KEY}`);
const CERT_PEM = join(`${CERT_PATH}/${TLS_CERT}`);

let cleanDom: ReturnType<typeof globalJsdom> = () => {};
const tls = {
  cert: Bun.file(CERT_PEM),
  key: Bun.file(KEY_PEM),
};
const options = {
  serve: PROTOCOL === "https" ? { tls } : {},
};
const app = new Elysia(options);

// Serve arquivos estáticos do diretório dist/assets
app.use(staticPlugin({ assets: "dist/assets", prefix: "/assets" }));
app.use(HTMLElysia());

// Rota para a página inicial
app.get("/", () => {
  cleanDom = globalJsdom();
  const HomePage = MainPageLayout(AppHome, { title: "Outro" });
  cleanDom();
  return HomePage;
});

// Rota para o arquivo main.js
app.get("/main.js", () => {
  const file = Bun.file("dist/src/main.js");
  return new Response(file, {
    headers: {
      "Content-Type": "application/javascript", // Define o tipo MIME correto
    },
  });
});

// Rota para o arquivo main.css
app.get("/main.css", () => {
  return Bun.file("dist/assets/styles/main.css");
});

app.listen({
  port: PORT,
  hostname: HOST,
});
