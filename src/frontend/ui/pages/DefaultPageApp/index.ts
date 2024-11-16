import { css, html } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <h1>404</h1>
  </div>
`;

export const DefaultPageApp = () => ({
  template,
  styles,
});

const styles = () => css`
  default-page-app,
  .wrap-ctx {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    background:red;
  }
`;
