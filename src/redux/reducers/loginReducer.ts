import { LoginAction, LoginActionType } from "../actionTypes/loginActionTypes";

type LoginState = {
  accessToken: string;
  error: string;
};

const initialState: LoginState = {
  accessToken: "",
  error: "",
};

export const loginReducer = (
  state: LoginState = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case LoginActionType.LOGIN_PENDING:
      return {
        ...state,
        accessToken: "",
      };
    case LoginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case LoginActionType.LOGIN_FAIL:
      return {
        ...state,
        accessToken: "",
        error: action.errorMessage,
      };
    default:
      return state;
  }
};
