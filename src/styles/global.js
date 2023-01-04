import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    background-color: #1e1e1e;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  input,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0%;
  }
  ol, ul {
    list-style: none;
  }

  img { max-width: 100%; height: auto; }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  input, select, textarea {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.20);
  }

  .container {
    display: block;
    max-width: 480px;
    margin: 0 auto;
    padding: 1rem;
  }

  .main {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    border-radius: 3px;
  }

  .title {
    color: #fff;
    font-size: 64px;
    font-weight: 100;
    text-align: center;
  }
`;
