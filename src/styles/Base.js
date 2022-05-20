import { Global, css } from '@emotion/react';

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

  /* selector for top level element i.e html */
  :root {
    --layout-col-width: 64px;
  }

  @media (min-width: 1281px) {
    :root {
      --layout-col-width: 80px;
    }
  }

  @media (min-width: 1441px) {
    :root {
      --layout-col-width: 90px;
    }
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
