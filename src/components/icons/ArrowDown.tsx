import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '~/theme';

const ArrowDown = () => (
  <Svg width={10} height={12} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293 6.293a1 1 0 0 0 0 1.414l4.005 4a1.002 1.002 0 0 0 1.416 0l4.005-4a1 1 0 0 0-1.416-1.414L6.007 8.586V1a1 1 0 0 0-1.001-1 1.002 1.002 0 0 0-1.001 1v7.586L1.709 6.293a1.002 1.002 0 0 0-1.416 0Z"
      fill={colors.Red[500]}
    />
  </Svg>
);

export default ArrowDown;
