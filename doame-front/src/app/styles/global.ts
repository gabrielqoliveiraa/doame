import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

export const GlobalStyle: GlobalStyleComponent<
  any,
  DefaultTheme
> = createGlobalStyle`
    *{
        padding: 0%;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }

        @media (max-width: 720px) {
            font-size: 87.5%; 
        }
    }

    body {
        font-family: ${(props) => props.theme.font.family};
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

		button {
        cursor: pointer;
    }
    
    [disabled]{
        opacity: 0.6;
        cursor: not-not-allowed;
    }


`;
