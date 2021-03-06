import { Dispatch } from "redux";
import { User } from "../../type";
import { UserAction, UserActionType } from "../actionTypes/userActionTypes";
import { UserDetailsMode } from "../reducers/userReducer";

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

export const updateSelectedUser = (
  attribute: string,
  value: string | boolean
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.USER_SELECTED_UPDATE,
      attribute,
      value,
    });
  };
};
