import { createGlobalStyle } from 'styled-components';
// import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(to bottom right, #882859, #245077) no-repeat ;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    color: #fff;
  }

  body, input, button {
    font: 16px Enriqueta, serif;
    border:none;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

`;
