import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "myfont";
  }

  body {
    font-size: 16px;
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/Orbit-Regular.ttf");
  }
`;
