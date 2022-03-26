import axios from 'axios';
import { Dispatch } from 'redux';
import { User } from '../../type';
import { UserAction, UsersActionType } from '../actionTypes/usersActionTypes';

export const getUsers = (accessToken: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UsersActionType.USERS_GET_PENDING
        });

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            };
            const { data } = await axios.get('users', config);
            dispatch({
                type: UsersActionType.USERS_GET_SUCCESS,
                payload: data
            });

        } catch (err) {
            console.log('error');
            dispatch({
                type: UsersActionType.USERS_GET_FAIL,
                payload: 'Error'
            });
        }
    }
}

export const addUser = (user: User) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UsersActionType.USER_ADD,
            payload: user,
        });
    }
}

export const updateUsers = (user: User) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UsersActionType.USER_UPDATE,
            payload: user,
        });
    }
}