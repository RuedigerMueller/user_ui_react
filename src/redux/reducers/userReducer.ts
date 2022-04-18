import { User } from "../../type";
import { UserAction, UserActionType } from "../actionTypes/userActionTypes";

type UserState = {
  user: User;
  mode: UserDetailsMode;
};

type Modes = ["edit", "display", "create"];
export type UserDetailsMode = Modes[number];

export const initialUser: User = {
  id: -1,
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  isAdmin: false,
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
    case UserActionType.USER_SELECTED_UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.attribute]: action.value,
        },
      };
    default:
      return state;
  }
};
