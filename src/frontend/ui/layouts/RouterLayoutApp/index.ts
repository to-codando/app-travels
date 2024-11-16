import { css, html } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <router-view></router-view>
  </div>
`;

export const RouterLayoutApp = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  router-layout-app,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    width:100vw;
    height: 100vh
  }
`;
