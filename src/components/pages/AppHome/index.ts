import { AppBanner, AppHeader } from "@/ui";
import { css, html } from "iares";

const template = () => html`
  <${AppHeader}/>
  <${AppBanner}/>


`;

export const AppHome = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-home {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction:column;
    width:100%;
}
`;
