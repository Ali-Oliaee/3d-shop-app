import {SvgProps,Svg,G,Path,Mask} from 'react-native-svg';

const FilterIcon = (props: SvgProps) => {
 return  (
<Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
<Path d="M11.7179 8.46699H4.1272" stroke="white" stroke-width="1.51815" stroke-linecap="round"/>
<Path d="M18.0436 10.7442C19.441 10.7442 20.5738 9.61137 20.5738 8.21395C20.5738 6.81653 19.441 5.6837 18.0436 5.6837C16.6462 5.6837 15.5133 6.81653 15.5133 8.21395C15.5133 9.61137 16.6462 10.7442 18.0436 10.7442Z" fill="white" stroke="white" stroke-width="0.8376"/>
<Path d="M20.8269 17.5759H12.224" stroke="white" stroke-width="1.51815" stroke-linecap="round"/>
<Path d="M5.89837 19.8531C7.29579 19.8531 8.42862 18.7203 8.42862 17.3229C8.42862 15.9254 7.29579 14.7926 5.89837 14.7926C4.50095 14.7926 3.36812 15.9254 3.36812 17.3229C3.36812 18.7203 4.50095 19.8531 5.89837 19.8531Z" fill="white" stroke="white" stroke-width="0.8376"/>
</Svg>
     )  
}

export default FilterIcon;