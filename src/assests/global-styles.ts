import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // @font-face {
  //   font-family: 'AmaticSC';
  //   src: local('AmaticSC'), url(fonts/AmaticSC-Bold.woff) format('woff');
  // }
  //
  // @font-face {
  //   font-family: 'Montserrat';
  //   src: local('Montserrat'), url(fonts/Montserrat.woff) format('woff');
  // }
  
  :root {
    --white: #FFFFFF;
    --black: #000000;
    --yellow: #F7C918;
    --light-yellow: #FBF1CC;
    --gray: #F2F2F2;
    --dark-gray: #828282;
    --orange: #EC8105;
  }
`;
