import { User, UserState } from "../../type";
import { UserAction, UserActionType } from "../actionTypes/userActionTypes";

export const initialUser: User = {
  id: -1,
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

const initialState: UserState = {
  user: initialUser,
  mode: "display",
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.USER_SELECT:
      return {
        ...state,
        user: action.user,
        mode: action.mode,
      };
    case UserActionType.USER_DESELECT:
      return {
        ...state,
        user: initialUser,
        mode: "display",
      };
    default:
      return state;
  }
};
