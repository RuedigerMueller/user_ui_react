import { LoginState } from "../../type";
import { LoginAction, LoginActionType } from "../actionTypes/loginActionTypes";

const initialState: LoginState = {
    accessToken: '',
    error: '',
}

export const loginReducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
    switch(action.type) {
        case LoginActionType.LOGIN_PENDING:
             return {
                 ...state,
                 accessToken: ''
             }
        case LoginActionType.LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload
            }
        case LoginActionType.LOGIN_FAIL:
            return {
                ...state,
                accessToken: '',
                error: action.payload
            }
        default:
            return state;
    }
}