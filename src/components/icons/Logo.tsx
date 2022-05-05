import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '~/theme';

const SvgComponent = () => (
  <Svg width={32} height={27} fill="none">
    <Path
      d="M1.033 21.043 12.663 2.27c1.49-2.407 5.185-2.407 6.675 0l9.678 15.624c-1.08-1.695-3.406-2.269-5.234-1.285L9.65 24.224l4.434-2.378-7.799 4.188c-3.432 1.844-7.243-1.778-5.253-4.992Z"
      fill={colors.Turquoise[500]}
    />
    <Path
      d="m29.042 17.935 1.924 3.108c1.99 3.214-1.82 6.836-5.253 4.992l-7.798-4.19a4.08 4.08 0 0 0-3.83 0l-4.435 2.38 14.131-7.616c1.843-.99 4.19-.4 5.26 1.326Z"
      fill={colors.Gray[800]}
    />
  </Svg>
);

export default SvgComponent;
