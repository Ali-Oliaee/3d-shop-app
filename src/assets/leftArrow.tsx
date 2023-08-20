
import {SvgProps,Rect,Defs,ClipPath,Svg,G,Path,Mask, SvgXml} from 'react-native-svg';

const LeftArrow = (props: SvgProps) => {
     const xml = `
     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M11.9125 3.38098L6.46808 8.82538L11.9125 14.2698" stroke="#242424" stroke-width="1.2564" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
     `
     return  (
          <SvgXml xml={xml} {...props}/>
     )  
}

export default LeftArrow;