export type LoginFormValues = {
  name: string;
  password: string;
};

export type ChallengeContextType = {
  userName: string | null;
  updateUserName: (userName: string) => void;
};

export type StackParams = {
  ToDo: undefined;
  Home: undefined;
  List: undefined;
  Detail: {id: string};
  Wallet: undefined;
};
