import { UserDialogMode, UserState } from "../../type";
import { UserAction, UserActionType } from "../actionTypes/userActionTypes";

const initialState: UserState = {
    user: {
        id: -1,
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
    mode: 'display',
    error: '',
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionType.USER_UPDATE:
             return {
                 ...state,
             }
        default:
            return state;
    }
}