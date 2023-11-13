import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono",
      "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;

    --primary-glow: conic-gradient(
      from 180deg at 50% 50%,
      #16abff33 0deg,
      #0885ff33 55deg,
      #54d6ff33 120deg,
      #0071ff33 160deg,
      transparent 360deg
    );
    --secondary-glow: radial-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));

    --tile-start-rgb: 239, 245, 249;
    --tile-end-rgb: 228, 232, 233;
    --tile-border: conic-gradient(#00000080, #00000040, #00000030, #00000020, #00000010, #00000010, #00000080);

    --callout-rgb: 238, 240, 241;
    --callout-border-rgb: 172, 175, 176;
    --card-rgb: 180, 185, 188;
    --card-border-rgb: 131, 134, 135;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-start-rgb: 0, 0, 0;
      --background-end-rgb: 0, 0, 0;

      --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
      --secondary-glow: linear-gradient(
        to bottom right,
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0.3)
      );

      --tile-start-rgb: 2, 13, 46;
      --tile-end-rgb: 2, 5, 19;
      --tile-border: conic-gradient(#ffffff80, #ffffff40, #ffffff30, #ffffff20, #ffffff10, #ffffff10, #ffffff80);

      --callout-rgb: 20, 20, 20;
      --callout-border-rgb: 108, 108, 108;
      --card-rgb: 100, 100, 100;
      --card-border-rgb: 200, 200, 200;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: "NotoSans";
    src: url("/fonts/NotoSans-Light.woff2") format("woff2");
    font-weight: 300;
  }

  @font-face {
    font-family: "NotoSans";
    src: url("/fonts/NotoSans-Regular.woff2") format("woff2");
    font-weight: 400;
  }

  @font-face {
    font-family: "NotoSans";
    src: url("/fonts/NotoSans-Medium.woff2") format("woff2");
    font-weight: 500;
  }

  @font-face {
    font-family: "NotoSans";
    src: url("/fonts/NotoSans-Bold.woff2") format("woff2");
    font-weight: 700;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb));
    background: #fff;
    font-family: "NotoSans", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  textarea {
    font-family: "NotoSans", sans-serif;
    font-weight: 400;
  }

  button {
    font-size: 16px;
    background-color: #fff;
    border: 0;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 16px;
    color: #bdbdbd;
    font-family: "NotoSans";
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;