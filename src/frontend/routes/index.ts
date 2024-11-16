import { html, render } from "iares";
import type { TRoute } from "iares";

import { HomePageApp, DefaultPageApp } from "@/ui/pages";

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${DefaultPageApp} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/home$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${HomePageApp} />`, context);
    },
  },
];
