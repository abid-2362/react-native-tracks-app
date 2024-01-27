export type emptyFunction = () => void;
export type optionalCallbackFunction = (onSuccess?: emptyFunction) => void;
export interface IAuthState {
  token: null | string;
  errorMessage: string;
}
export interface IAuthContext {
  // id: string;
  state: IAuthState;
  signin: (title: string, content: string, onSuccess?: emptyFunction) => void;
  signup: (email: string, password: string) => void;
  signout: emptyFunction;
}
