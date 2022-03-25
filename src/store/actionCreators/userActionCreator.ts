import axios from 'axios';
import { Dispatch } from 'redux';
import { User } from '../../type';
import { UserAction, UserActionType } from '../actionTypes/userActionTypes';

export const setUserCreateMode = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.SET_CREATE_MODE,
        });
    }
}

export const setUserEditMode = (user: User) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.SET_EDIT_MODE,
            payload: user
        });
    }
}

export const setUserDisplayMode = (user: User) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.SET_DISPLAY_MODE,
            payload: user
        });
    }
}

export const updateUser = (user: User, accessToken: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.USER_UPDATE_PENDING
        });

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            };
            
            const { data } = await axios.patch(
                `users/${user.id}`,
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
                config)

            dispatch({
                type: UserActionType.USER_UPDATE_SUCCESS,
                payload: data.user
            });
            
        } catch(err) {
            console.log('error');
            dispatch({
                type: UserActionType.USER_UPDATE_FAIL,
                payload: 'Error'
            });
        }
    }
}

export const createUser = (user: User, accessToken: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.USER_CREATE_PENDING
        });

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            };
            console.log(user);
            const { data } = await axios.post(
                `users`,
                {
                    username: user.username,
                    password: 'changeme',
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
                config)

            dispatch({
                type: UserActionType.USER_CREATE_SUCCESS,
                payload: data.user
            });
            
        } catch(err) {
            console.log('error');
            dispatch({
                type: UserActionType.USER_CREATE_FAIL,
                payload: 'Error'
            });
        }
    }
}