import { UsersState } from "../../type";
import { UsersActions, UsersActionType } from "../actionTypes/usersActionTypes";

const initialState: UsersState = {
  users: [],
  selectedUserID: -1,
  error: "",
};

export const usersReducer = (
  state: UsersState = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case UsersActionType.USERS_CREATE_PENDING:
      return {
        ...state,
      };
    case UsersActionType.USERS_CREATE_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case UsersActionType.USERS_CREATE_FAIL:
      return {
        ...state,
        error: action.errorMessage,
      };

    case UsersActionType.USERS_READ_PENDING:
      return {
        ...state,
      };
    case UsersActionType.USERS_READ_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case UsersActionType.USERS_READ_FAIL:
      return {
        ...state,
        error: action.errorMessage,
      };

    case UsersActionType.USERS_DELETE_PENDING:
      return {
        ...state,
      };
    case UsersActionType.USERS_DELETE_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.userID),
      };
    case UsersActionType.USERS_DELETE_FAIL:
      return {
        ...state,
        error: action.errorMessage,
      };

    default:
      return state;
  }
};
