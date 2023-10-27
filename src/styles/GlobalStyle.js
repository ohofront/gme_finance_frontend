import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // 적용시킬 css 입력
    a{
        text-decoration: none;
        color: inherit;
    }
    b{
        font-family: Poppins;
        font-weight: 600;
    }
    *{
        box-sizing: border-box;
    }
    nav {
        display: flex;
    }
    header{
        display: block;
    }
    body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    html{
        max-width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    body{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    h1 {
        margin-bottom: 7px;
        font-weight: 600;
        line-height: 1.25 !important;
    }
    body h2 {
        font-family: Poppins;
        font-size: 32px;
        line-height: 40px;
        font-weight: 600;
    }
    body h3 {
        font-family: Poppins;
        font-size: 32px;
        line-height: 32px;
        font-weight: 600;
    }
    h5 {
        font-family: Poppins;
        font-weight: 600;
        font-size: 24px;
    }
    strong{
        font-family: Poppins;
        font-weight: 600;
    }
    ul {
        margin-left: 30px;
        margin-bottom: 30px;
    }
`;
export default GlobalStyles;
