import { SvgProps, SvgXml } from 'react-native-svg';

const GucciLogo = (props: SvgProps) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="32" height="32" id="gucci"><path fill-rule="evenodd" d="M35 20a10.4 10.4 0 0 1-15 9.31 10.38 10.38 0 1 1 0-18.64A10.43 10.43 0 0 1 35 20Zm-2 0a8.35 8.35 0 0 0-8.34-8.34 8.24 8.24 0 0 0-2.56.34 10.26 10.26 0 0 1 3.32 5.17h-2.14A8.31 8.31 0 0 0 20 13a8.29 8.29 0 0 0-3.25 4.18h-2.14A10.48 10.48 0 0 1 17.94 12a8.67 8.67 0 0 0-2.53-.38 8.34 8.34 0 0 0 0 16.68 8.11 8.11 0 0 0 2.49-.38 10.23 10.23 0 0 1-3.63-7.12h4.94v2H16.8a8.34 8.34 0 0 0 3.21 4 8.34 8.34 0 0 0 3.21-4h-2.41v-2h4.94a10.31 10.31 0 0 1-3.67 7.1 8.48 8.48 0 0 0 2.53.4A8.3 8.3 0 0 0 33 20Z"></path></svg>`;
  return <SvgXml xml={xml} {...props} />;
};

export default GucciLogo;
