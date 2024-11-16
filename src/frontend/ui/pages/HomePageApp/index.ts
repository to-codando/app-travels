import { LogoApp } from "@/ui/elements";
import { css, html } from "iares";

const template = () => html`
  <${LogoApp} />

`;

export const HomePageApp = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  home-page-app {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction:column;
    width:100%;
}
`;
