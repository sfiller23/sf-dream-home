import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        border: none;
        font-family: 'Poppins', sans-serif;

        box-sizing: border-box;// chrome
        -webkit-box-sizing: border-box;// safari (apple devices), older versions of Chrome and Opera (2013) and some iOs web apps (webkit based browsers)
        -moz-box-sizing: border-box; //mozilla
        -ms-box-sizing: border-box; // Edge
    }
    body{
        background-color: black;
    }

    // to get rid of scrollbars in older versions of browsers
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

`;
