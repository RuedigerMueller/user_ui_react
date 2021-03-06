import { User } from "../../type";
import { UserDetailsMode } from "../reducers/userReducer";

export enum UserActionType {
  USER_SELECT = "USER_SELECT",
  USER_DESELECT = "USER_DESELECT",
  USER_SELECTED_UPDATE = "USER_SELECTED_UPDATE",
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
  type: UserActionType.USER_SELECTED_UPDATE;
  attribute: string;
  value: string | boolean;
}

export type UserAction =
  | userActionSelect
  | userActionDeselect
  | userActionUpdate;
