import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#fff',
  white2: '#fff5ff',
  black: '#000',
  dimBlue: '#243447',
  blue: 'rgb(57, 128, 187)',
  lightBlue: '#deeff9',
  green: 'green',
  lightGrey: 'rgba(0, 0, 0, 0.153);',
  pinkBgColor: '#fa709a',
  yellowBgColor: '#fee140',
  boxShadow1: 'rgba(0, 0, 0, 0.24)',
  boxShadow2: 'rgba(100, 100, 111, 0.2)',
  alertDanger: '#ff9999',
  alertSuccess: '#b3d9b3',
  alertDangerText: '#ff1919',
  deleteBtnColor: '#ff4040',
  editBtnColor: '#73b973',
  backgroundColorGradient: 'linear-gradient(45deg, #fa709a 20%, #fee140 100%);',
  clrLightBlueGradiant: 'linear-gradient(135deg, #fef2e5 0%, #e2d1c3 100%)',
  clrOrange: '#c26610;',
  boxShadowBtns: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px',
  boxShadowImg: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
};

export const fonts = {
  lato: "'Lato', sans-serif;",
  playfair: "'Playfair Display', serif;",
  josefin: "'Josefin Sans', sans-serif;",
  nunito: "'Nunito', sans-serif;",
  poppins: "'Poppins', sans-serif;",
};

export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobileXL: 630,
  tablet: 768,
  laptop: 1024,
  laptopM: 1280,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopM: `(min-width: ${size.laptopM}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

// export const device = {
//   mobileS: `(min-width: 320px)`,
//   mobileM: `(min-width: 375px)`,
//   mobileL: `(min-width: 425px)`,
//   tablet: `(min-width: 768px)`,
//   laptop: `(min-width: 1024px)`,
//   laptopL: `(min-width: 1440px)`,
//   desktop: `(min-width: 2560px)`,
// };

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${fonts.poppins};
    }
    
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }


body {
  position: relative;
  min-height: 100vh;
  background:  ${colors.white};

}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

button {
    cursor: pointer;
    /* border: none; */
    /* background: transparent; */
}

ul {
  list-style-type: none;  
}

img {
  width: 100%;
}

h1,
h2 {
  text-align: center;
  font-family: ${fonts.nunito};
}

.hoverAnimation {
  padding: 5px;
}
.hoverAnimation:hover {
  background: rgba(229, 229, 229, .3);
  border-radius: 50px;
}

/* .max-w-1300 {
  width: 100%;
  max-width: 1280px;
  margin: auto;
} */

`;
