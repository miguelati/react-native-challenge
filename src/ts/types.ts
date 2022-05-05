export type LoginFormValues = {
  name: string;
  password: string;
};

export type ChallengeContextType = {
  userName: string | null;
  updateUserName: (userName: string) => void;
};
