import { User, UserDetailsMode } from "../../type";

export enum UserActionType {
  USER_SELECT = "USER_SELECT",
  USER_DESELECT = "USER_DESELECT",
  USER_UPDATE = "USER_UPDATE",
}

interface userActionSelect {
  type: UserActionType.USER_SELECT;
  user: User;
  mode: UserDetailsMode;
}

interface userActionDeselect {
  type: UserActionType.USER_DESELECT;
}

interface userActionUpdate {
  type: UserActionType.USER_UPDATE;
  attribute: string;
  value: string;
}

export type UserAction =
  | userActionSelect
  | userActionDeselect
  | userActionUpdate;
