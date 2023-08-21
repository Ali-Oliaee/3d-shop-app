import { SvgProps, SvgXml } from 'react-native-svg';

const AdidasLogo = (props: SvgProps) => {
  const xml = `<svg version="1.0" id="katman_1" width="36" height="36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 3694.2 2666.7" style="enable-background:new 0 0 3694.2 2666.7;" xml:space="preserve">
     <style type="text/css">
     .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#1D1E1B;}
     </style>
     <path class="st0" d="M3054.2,2039.3L2156.1,486.9l-488.2,277.4l732.5,1275H3054.2z M1347.1,2039.3l-288.9-504.2l-478.7,282.4
     l121.6,221.8 M1551.5,2039.3h649.3L1609,1010L1123,1290.7L1551.5,2039.3z"/>
     </svg>`;
  return <SvgXml xml={xml} {...props} />;
};

export default AdidasLogo;
