import http, { type IncomingMessage, type ServerResponse } from "node:http";
import { join } from "node:path";
import type { BuildResult, Plugin, PluginBuild } from "esbuild";

export type BuildHandlerParams = {
  buildVersion: number;
  build: PluginBuild;
};
export type BuildHandler = (params: BuildHandlerParams) => void;

const TLS_KEY = process.env.TLS_KEY;
const TLS_CERT = process.env.TLS_CERT;
const CERT_PATH = join(__dirname, process.env.CERT_PATH as string);
const KEYPEM = join(`${CERT_PATH}/${TLS_KEY}`);
const CERTPEM = join(`${CERT_PATH}/${TLS_CERT}`);

const ENV = process.env.NODE_ENV;
const PROTOCOL = process.env.PROTOCOL;
const PORT = Number(process.env.PORT) + 1;
const HOST = process.env.HOST;
const URL = `${PROTOCOL}://${HOST}:${PORT}/events`;

const TLS = {
  key: KEYPEM,
  cert: CERTPEM,
};
const TLS_OPTIONS = PROTOCOL === "https" ? TLS : {};

let clients: ServerResponse[] = [];

// Função para enviar notificações de mudança
const sendMessage = (message: string): void => {
  for (const res of clients) {
    res.write(`data: ${message}\n\n`);
  }
};

// Criar um servidor HTTP para conexões SSE
const server = http.createServer(TLS_OPTIONS, (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      Connection: "keep-alive",
    });
    clients.push(res);

    // Remove a conexão quando o cliente se desconecta
    req.on("close", () => {
      clients = clients.filter((client) => client !== res);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, HOST, () => {
  if (ENV === "production") {
    console.log("-----------------");
    return console.log("[ 🤔 Building... ] ");
  }
  console.log(`SSE Server: ${URL}`);
});

export const onRebuild = (buildHandler?: BuildHandler): Plugin => ({
  name: "onRebuild",
  setup(build) {
    let buildVersion = 0;

    build.onStart(() => {
      buildVersion++;
    });

    build.onEnd((result: BuildResult) => {
      if (!result.errors.length) {
        const message = { type: "message", buildVersion };
        buildHandler?.({ buildVersion, build });
        return sendMessage(JSON.stringify(message));
      }

      const errors = JSON.stringify({
        type: "message",
        errors: result.errors,
      });

      sendMessage(errors);
      console.error("Build error:", result.errors);
    });
  },
});
