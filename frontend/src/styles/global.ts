import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;

  }

 input, button {
    font-size: 16px;
    font-weight: 600;
  }

  h1{
    font-family: 'Roboto Slab', serif;
  }

  textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

  }


  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;
