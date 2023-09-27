import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Poppins';
    }
    
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    p{
        font-family: Poppins;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        padding-bottom: 27px;
        -webkit-font-smoothing: antialiased;
    }
    h3 {
        line-height: 1.25 !important;
    }
    ul, ol, li{
        margin-left: 30px;
    }
    header {
        display: block;
    }
`;
export default GlobalStyles;
