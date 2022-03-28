import { User, UsersState } from "../../type";
import { UsersAction, UsersActionType } from "../actionTypes/usersActionTypes";

const initialState: UsersState = {
  users: [],
  error: "",
};

export const usersReducer = (
  state: UsersState = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
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

    /* case UsersActionType.USERS_CREATE_SUCCESS: {
      let updatedUserList: ReadonlyArray<User> = [];
      updatedUserList = updatedUserList.concat(state.userList);
      updatedUserList = updatedUserList.concat(action.payload);
      console.log("reached", updatedUserList);
      return {
        ...state,
        userList: updatedUserList,
      };
    }
    case UsersActionType.USERS_UPDATE_SUCCESS:
      const updatedUser: User = action.payload;
      const newUserList = state.userList.map((user) => {
        if (user.id === updatedUser.id) return updatedUser;
        return user;
      });

      return {
        ...state,
        userList: newUserList,
      }; */
    default:
      return state;
  }
};
