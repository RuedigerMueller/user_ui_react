import { UserDetails } from '../components/UserDetails'
import { AppAction, AppState } from '../type'
import * as actionTypes from './actionTypes'

const initialState: AppState = {
    isLoggedIn: false,
    accessToken: '',
    displayUserList: false,
    displayUserDetail: false,
    displayUserRoles: false,
    user: {
        id: -1,
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    },
    userList: [],
}

const reducer = (
    state: AppState = initialState,
    action: AppAction
): AppState => {
    switch (action.type) {
        case actionTypes.LIST_USERS:
            return {
                ...state,
                displayUserList: true,
                displayUserDetail: false,
                displayUserRoles: false
            };
        case actionTypes.CREATE_USER:
            return {
                ...state,
                displayUserList: false,
                displayUserDetail: true,
                displayUserRoles: false
            };
        case actionTypes.DISPLAY_USER:
            return {
                ...state,
                displayUserList: false,
                displayUserDetail: true,
                displayUserRoles: false
            };        case actionTypes.UPDATE_USER:
        case actionTypes.DELETE_USER:
            return {
                ...state,
                displayUserList: true,
                displayUserDetail: false,
                displayUserRoles: false
            };    }
    return state
}

export default reducer