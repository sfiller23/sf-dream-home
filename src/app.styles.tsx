import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;

        box-sizing: border-box;// chrome
        -webkit-box-sizing: border-box;// safari (apple devices), older versions of Chrome and Opera (2013) and some iOs web apps (webkit based browsers)
        -moz-box-sizing: border-box; //mozilla
        -ms-box-sizing: border-box; // Edge
    }
    body{
        background-color: white;
    }

    *::before, *::after {
        border: none;
    }

    input{
        border-style: solid;
    }


    button, a{
        cursor: pointer;
        border: none;
        outline: none;
        text-decoration: none;
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
