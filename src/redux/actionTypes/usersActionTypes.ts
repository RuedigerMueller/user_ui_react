import { User } from "../../type";

export enum UsersActionType {
  USERS_CREATE_PENDING = "USERS_CREATE_PENDING",
  USERS_CREATE_SUCCESS = "USERS_CREATE_SUCCESS",
  USERS_CREATE_FAIL = "USERS_CREATE_FAIL",

  USERS_READ_PENDING = "USERS_READ_PENDING",
  USERS_READ_SUCCESS = "USERS_READ_SUCCESS",
  USERS_READ_FAIL = "USERS_READ_FAIL",

  USERS_UPDATE_PENDING = "USERS_UPDATE_PENDING",
  USERS_UPDATE_SUCCESS = "USERS_UPDATE_SUCCESS",
  USERS_UPDATE_FAIL = "USERS_UPDATE_FAIL",

  USERS_DELETE_PENDING = "USERS_DELETE_PENDING",
  USERS_DELETE_SUCCESS = "USERS_DELETE_SUCCESS",
  USERS_DELETE_FAIL = "USERS_DELETE_FAIL",
}

interface usersCreatePendingAction {
  type: UsersActionType.USERS_CREATE_PENDING;
}

interface usersCreateSuccessAction {
  type: UsersActionType.USERS_CREATE_SUCCESS;
  user: User;
}

interface usersCreateFailAction {
  type: UsersActionType.USERS_CREATE_FAIL;
  errorMessage: string;
}

interface usersReadPendingAction {
  type: UsersActionType.USERS_READ_PENDING;
}

interface usersReadSuccessAction {
  type: UsersActionType.USERS_READ_SUCCESS;
  users: ReadonlyArray<User>;
}

interface usersReadFailAction {
  type: UsersActionType.USERS_READ_FAIL;
  errorMessage: string;
}

interface usersUpdatePendingAction {
  type: UsersActionType.USERS_UPDATE_PENDING;
}

interface usersUpdateSuccessAction {
  type: UsersActionType.USERS_UPDATE_SUCCESS;
  user: User;
}

interface usersUpdateFailAction {
  type: UsersActionType.USERS_UPDATE_FAIL;
  errorMessage: string;
}

interface usersDeletePendingAction {
  type: UsersActionType.USERS_DELETE_PENDING;
}

interface usersDeleteSuccessAction {
  type: UsersActionType.USERS_DELETE_SUCCESS;
  userID: number;
}

interface usersDeleteFailAction {
  type: UsersActionType.USERS_DELETE_FAIL;
  errorMessage: string;
}

export type UsersActions =
  | usersCreatePendingAction
  | usersCreateSuccessAction
  | usersCreateFailAction
  | usersReadPendingAction
  | usersReadSuccessAction
  | usersReadFailAction
  | usersUpdatePendingAction
  | usersUpdateSuccessAction
  | usersUpdateFailAction
  | usersDeletePendingAction
  | usersDeleteSuccessAction
  | usersDeleteFailAction;
