import { Dispatch } from "redux";
import { User, UserDetailsMode } from "../../type";
import { UserAction, UserActionType } from "../actionTypes/userActionTypes";
import { RootState } from "../reducers/combine";
import { createUser, updateUser } from "./usersActionCreator";

export const selectUser = (user: User, mode: UserDetailsMode) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.USER_SELECT,
      user,
      mode,
    });
  };
};

export const deselectUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.USER_DESELECT,
    });
  };
};

export const updateSelectedUser = (attribute: string, value: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.USER_UPDATE,
      attribute,
      value,
    });
  };
};
