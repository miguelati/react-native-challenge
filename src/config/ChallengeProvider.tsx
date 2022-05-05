import React, {useState} from 'react';
import ChallengeContext from './ChallengeContext';

const ChallengeProvider: React.FC<React.ReactNode> = ({children}) => {
  const [userName, setUserName] = useState<string | null>(null);
  const updateUserName = (newUserName: string) => {
    setUserName(newUserName);
  };
  return (
    <ChallengeContext.Provider value={{userName, updateUserName}}>
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
