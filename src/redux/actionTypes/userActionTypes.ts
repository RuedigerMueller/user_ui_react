import { User, UserDetailsMode } from "../../type";

export enum UserActionType {
  USER_SELECT = "USER_SELECT",
  USER_DESELECT = "USER_DESELECT",
}

interface userActionSelect {
  type: UserActionType.USER_SELECT;
  user: User;
  mode: UserDetailsMode;
}

interface userActionDeselect {
  type: UserActionType.USER_DESELECT;
}

export type UserAction = userActionSelect | userActionDeselect;
