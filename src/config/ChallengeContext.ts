import React from 'react';
import {ChallengeContextType} from '~/ts/types';

export const ChallengeContext = React.createContext<ChallengeContextType>({
  userName: '',
} as ChallengeContextType);

export default ChallengeContext;
