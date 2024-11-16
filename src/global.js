import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root{
        //background
        --blue-100: #78b3ce;
        --blue-50: #c9e6f0;

        //font-color
        --white: #fbfbfb;

        //border
        --orange: #f96e2a;
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    body{
        color: var(--orange);
        font-family: 'Poppins', sans-serif;

        background: var(--blue-50);

    }

    a, input, span{
        color: var(--white);
    }

    a{
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }

`