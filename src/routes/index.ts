import { html, render } from "iares";
import type { TRoute } from "iares";

import { AppHome, AppDefault } from "@/pages";

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${AppDefault} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/home$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${AppHome} />`, context);
    },
  },
];
