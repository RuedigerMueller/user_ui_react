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
        default:
            return state;
    }
}