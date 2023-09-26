import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Nanum Gothic', sans-serif;
    }
    
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    header {
        display: block;
    }
`;
export default GlobalStyles;
