import { AppAction, User } from '../type'
import * as actionTypes from './actionTypes'

export function listUser() {
    const action: AppAction = {
        type: actionTypes.LIST_USERS,
    }

    // return "call backend"
}

export function createUser(user: User) {
    const action: AppAction = {
        type: actionTypes.CREATE_USER,
        user,
    }

    // return "call backend"
}

export function displayUser(user: User) {
    const action: AppAction = {
        type: actionTypes.DISPLAY_USER,
        user,
    }

    // return "call backend"
}

export function updateUser(user: User) {
    const action: AppAction = {
        type: actionTypes.UPDATE_USER,
        user,
    }
    
    // return "call backend"
}

export function deleteUser(user: User) {
    const action: AppAction = {
        type: actionTypes.DELETE_USER,
        user,
    }
    
    // return "call backend"
}
