export enum LoginActionType {
  LOGIN_PENDING = "LOGIN_PENDING",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
}

interface loginActionPending {
  type: LoginActionType.LOGIN_PENDING;
}

interface loginActionSuccess {
  type: LoginActionType.LOGIN_SUCCESS;
  accessToken: string;
}

interface loginActionFail {
  type: LoginActionType.LOGIN_FAIL;
  errorMessage: string;
}

export type LoginAction =
  | loginActionPending
  | loginActionSuccess
  | loginActionFail;
