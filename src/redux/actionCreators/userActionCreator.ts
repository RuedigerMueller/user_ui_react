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

export const updateUserStatus = (attribute: string, value: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.USER_UPDATE,
      attribute,
      value,
    });
  };
};

export const handleUserDetailsAction = (action: string) => {
  return async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
    const state: RootState = getState();
    switch (action) {
      case "Update": {
        updateUser(state.userDetails.user);
        break;
      }
      case "Create": {
        createUser(state.userDetails.user);
        break;
      }
      case "Close": {
        break;
      }
      case "Cancel": {
        break;
      }
      default: {
        console.log("Unexpected action");
      }
    }
  };
};
