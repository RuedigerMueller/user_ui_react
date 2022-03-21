import axios from 'axios';
import { Dispatch } from 'redux';
import { LoginInfo } from '../../type';
import { LoginAction, LoginActionType } from '../actionTypes/loginActionTypes';

export const login = (loginInfo: LoginInfo) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: LoginActionType.LOGIN_PENDING
        });

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            
            const { data } = await axios.post(
                'login',
                {
                    username: loginInfo.username,
                    password: loginInfo.password,
                },
                config)

            dispatch({
                type: LoginActionType.LOGIN_SUCCESS,
                payload: data.access_token
            });
            
        } catch(err) {
            console.log('error');
            dispatch({
                type: LoginActionType.LOGIN_FAIL,
                payload: 'Error'
            });
        }
    }
}