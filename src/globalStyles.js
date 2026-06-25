import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    * {
        font-family: "Roboto", sans-serif;
    }

    input {
        outline: none;
    }
`
export default GlobalStyles