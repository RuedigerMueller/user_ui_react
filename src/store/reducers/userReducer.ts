import { User, UserState } from "../../type";
import { UserAction, UserActionType } from "../actionTypes/userActionTypes";

const user: User = {
    id: -1,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

const initialState: UserState = {
    user: user,
    mode: 'display',
    error: '',
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.SET_EDIT_MODE:
            return {
                ...state,
                user: action.payload,
                mode: 'edit'
            }
        case UserActionType.SET_CREATE_MODE:
            return {
                ...state,
                user: user,
                mode: 'create'
            }
        case UserActionType.SET_DISPLAY_MODE:
            return {
                ...state,
                user: action.payload,
                mode: 'display'
            }
        case UserActionType.USER_UPDATE_PENDING:
            return {
                ...state,
            }
        case UserActionType.USER_UPDATE_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case UserActionType.USER_UPDATE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case UserActionType.USER_CREATE_PENDING:
            return {
                ...state,
            }
        case UserActionType.USER_CREATE_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case UserActionType.USER_CREATE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}