import { SvgProps, Svg, G, Path, Mask } from 'react-native-svg';

const ArchiveIcon = (props: SvgProps) => {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" {...props}>
      <Mask id="mask0_8_136" maskUnits="userSpaceOnUse" x="3" y="1" width="16" height="18">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.38194 2.71995C3.40063 3.70127 3.40063 5.28066 3.40063 8.43945V17.3188C3.40063 18.5961 4.77281 19.4036 5.88939 18.7832L10.1255 16.4298C10.6315 16.1487 11.2466 16.1487 11.7526 16.4298L15.9887 18.7832C17.1053 19.4036 18.4774 18.5961 18.4774 17.3188V8.43945C18.4774 5.28066 18.4774 3.70127 17.4961 2.71995C16.5149 1.73865 14.9354 1.73865 11.7766 1.73865H10.1014C6.94265 1.73865 5.36326 1.73865 4.38194 2.71995Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_8_136)">
        <Path
          d="M17.4961 2.72001L18.3845 1.8316L17.4961 2.72001ZM10.1255 16.4299L10.7357 17.5281L10.1255 16.4299ZM11.7526 16.4299L11.1424 17.5281L11.7526 16.4299ZM5.88938 18.7833L6.49954 19.8815L5.88938 18.7833ZM4.65703 8.43951C4.65703 6.8246 4.6597 5.7398 4.76849 4.93061C4.87242 4.15758 5.05204 3.82673 5.27035 3.60842L3.49353 1.8316C2.73052 2.59461 2.41949 3.54411 2.2781 4.59579C2.14156 5.61133 2.14423 6.89563 2.14423 8.43951H4.65703ZM4.65703 17.3189V8.43951H2.14423V17.3189H4.65703ZM6.49954 19.8815L10.7357 17.5281L9.51536 15.3316L5.27922 17.6849L6.49954 19.8815ZM11.1424 17.5281L15.3786 19.8815L16.5989 17.6849L12.3628 15.3316L11.1424 17.5281ZM17.221 8.43951V17.3189H19.7338V8.43951H17.221ZM16.6077 3.60842C16.826 3.82673 17.0056 4.15758 17.1096 4.93061C17.2184 5.7398 17.221 6.8246 17.221 8.43951H19.7338C19.7338 6.89563 19.7365 5.61133 19.6 4.59579C19.4586 3.54411 19.1475 2.59461 18.3845 1.8316L16.6077 3.60842ZM11.7766 2.9951C13.3915 2.9951 14.4763 2.99778 15.2855 3.10656C16.0585 3.21049 16.3894 3.39012 16.6077 3.60842L18.3845 1.8316C17.6215 1.0686 16.672 0.757566 15.6204 0.616171C14.6048 0.479635 13.3205 0.482304 11.7766 0.482304V2.9951ZM10.1014 2.9951H11.7766V0.482304H10.1014V2.9951ZM5.27035 3.60842C5.48866 3.39012 5.8195 3.21049 6.59254 3.10656C7.40173 2.99778 8.48652 2.9951 10.1014 2.9951V0.482304C8.55756 0.482304 7.27326 0.479635 6.25772 0.616171C5.20604 0.757566 4.25653 1.0686 3.49353 1.8316L5.27035 3.60842ZM15.3786 19.8815C17.3325 20.9672 19.7338 19.5542 19.7338 17.3189H17.221C17.221 17.6382 16.878 17.8401 16.5989 17.6849L15.3786 19.8815ZM10.7357 17.5281C10.8621 17.4579 11.0159 17.4579 11.1424 17.5281L12.3628 15.3316C11.4774 14.8397 10.4007 14.8397 9.51536 15.3316L10.7357 17.5281ZM2.14423 17.3189C2.14423 19.5542 4.54554 20.9672 6.49954 19.8815L5.27922 17.6849C5.00008 17.8401 4.65703 17.6382 4.65703 17.3189H2.14423Z"
          fill="#999999"
        />
        <Path
          d="M9.05444 8.64886H12.8236"
          stroke="#999999"
          stroke-width="1.2564"
          stroke-linecap="round"
        />
      </G>
    </Svg>
  );
};

export default ArchiveIcon;
