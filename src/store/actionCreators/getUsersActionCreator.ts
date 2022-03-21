import axios from 'axios';
import { Dispatch } from 'redux';
import { GetUserAction, GetUsersActionType } from '../actionTypes/getUsersActionTypes';

export const getUsers = (accessToken: string) => {
    return async (dispatch: Dispatch<GetUserAction>) => {
        dispatch({
            type: GetUsersActionType.USERS_GET_PENDING
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
                type: GetUsersActionType.USERS_GET_SUCCESS,
                payload: data
            });

        } catch (err) {
            console.log('error');
            dispatch({
                type: GetUsersActionType.USERS_GET_FAIL,
                payload: 'Error'
            });
        }
    }
}