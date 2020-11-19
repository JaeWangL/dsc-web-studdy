export interface SigninParamsType {
  email: string;
  password: string;
}

export interface SigninStates {
  isLoading: boolean;
  isKeepLogin: boolean;
}

export const initSigninStates: SigninStates = {
  isLoading: false,
  isKeepLogin: false,
};
