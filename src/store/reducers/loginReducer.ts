import { AppState } from "../../type";
import { LoginAction, LoginActionType } from "../actionTypes/loginActionTypes";

const initialState: AppState = {
    displayState: {
        displayLogin: true,
        displayUserList: false,
        displayUserDetail: false,
        displayUserRoles: false,
    },
    accessToken: '',
    user: {
        id: -1,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    },
    userList: [],
    error: ''
}


export const loginReducer = (state: AppState = initialState, action: LoginAction): AppState => {
    switch(action.type) {
        case LoginActionType.LOGIN_PENDING:
             return {
                 ...state,
                 displayState: state.displayState,
                 accessToken: ''
             }
        case LoginActionType.LOGIN_SUCCESS:
            return {
                ...state,
                displayState: {
                    displayLogin: false,
                    displayUserList: true,
                    displayUserDetail: false,
                    displayUserRoles: false,
                },
                accessToken: action.payload
            }
        case LoginActionType.LOGIN_FAIL:
            return {
                ...state,
                displayState: state.displayState,
                accessToken: '',
                error: action.payload
            }
        default:
            return state;
    }
}