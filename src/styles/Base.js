import { Global, css } from "@emotion/react";

const Base = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    background: hsla(0, 0%, 100%, 1);
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Styling next js created root div */
  #__next {
    height: 100%;
  }
`;

function GlobalStylesBase() {
  return <Global styles={Base} />;
}

export default GlobalStylesBase;
