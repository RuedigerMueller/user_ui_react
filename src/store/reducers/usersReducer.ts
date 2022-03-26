import { User, UsersState } from "../../type";
import { UserAction, UsersActionType } from "../actionTypes/usersActionTypes";

const initialState: UsersState = {
    userList: [],
    error: ''
}

export const usersReducer = (state: UsersState = initialState, action: UserAction): UsersState => {
    switch (action.type) {
        case UsersActionType.USERS_GET_PENDING:
            return {
                ...state,
            }
        case UsersActionType.USERS_GET_SUCCESS:
            return {
                ...state,
                userList: action.payload
            }
        case UsersActionType.USERS_GET_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case UsersActionType.USER_ADD: {
            let updatedUserList: ReadonlyArray<User> = [];
            updatedUserList = updatedUserList.concat(state.userList);
            updatedUserList = updatedUserList.concat(action.payload);
            console.log('reached', updatedUserList);
            return {
                ...state,
                userList: updatedUserList
            }
        }
        case UsersActionType.USER_UPDATE:
            const updatedUser: User = action.payload;
            const newUserList = state.userList.map(user => {
                if(user.id === updatedUser.id)
                    return updatedUser
                return user;
            });

            return {
                ...state,
                userList: newUserList
            }
        default:
            return state;
    }
}