import { MainPageLayout } from "@/layouts";
import { AppHome } from "@/pages";
import { type AppType, createApp } from "iares";

type App = {
  core: AppType | null;
};

export const appBuilder = () => {
  const _app: App = { core: null };

  const _cleanAppDom = async (): Promise<boolean> => {
    document.body.innerHTML = "";
    return document.body.children.length < 1;
  };

  const _createApp = () => {
    return createApp({
      onMount(context, props) {
        MainPageLayout(AppHome, { title: "Outro" });
      },
    });
  };

  const _destroyApp = async (): Promise<boolean> => {
    _app.core = null;
    return _app.core === null;
  };

  const _watchChanges = () => {
    const modulePath = "/src/main.js";
    if (process.env.NODE_ENV === "development") {
      const eventSource = new EventSource("http://localhost:3001/events");

      eventSource.onmessage = async (event: Event) => {
        const messageEvent = event as MessageEvent;
        const data: { buildVersion: string } = JSON.parse(messageEvent.data);
        const { appBuilder } = await import(`${modulePath}?t=${Date.now()}`);
        await _cleanAppDom();
        await _destroyApp();
        _app.core = appBuilder();
        _app.core?.mount();
        console.log(`build version: ${data.buildVersion}`);
      };
    }
  };

  const mount = () => {
    _app.core = _createApp();
    _app.core?.mount?.();
    _watchChanges();
  };

  const unmount = async (): Promise<boolean> => {
    _destroyApp();
    _cleanAppDom();
    const children = document.body.children.length;
    return !children && _app.core === null;
  };

  return { mount, unmount };
};
