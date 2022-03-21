import { GetUsersState } from "../../type";
import { GetUserAction, GetUsersActionType } from "../actionTypes/getUsersActionTypes";

const initialState: GetUsersState = {
    userList: [],
    error: ''
}

export const getUsersReducer = (state: GetUsersState = initialState, action: GetUserAction): GetUsersState => {
    switch(action.type) {
        case GetUsersActionType.USERS_GET_PENDING:
             return {
                 ...state,
             }
        case GetUsersActionType.USERS_GET_SUCCESS:
            return {
                ...state,
                userList: action.payload
            }
        case GetUsersActionType.USERS_GET_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}