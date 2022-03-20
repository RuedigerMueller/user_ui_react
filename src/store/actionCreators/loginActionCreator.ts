import axios from 'axios';
import { Dispatch } from 'redux';
import { ILoginInfo } from '../../type';
import { LoginAction, LoginActionType } from '../actionTypes/loginActionTypes';

export const login = (loginInfo: ILoginInfo) => {
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
                payload: data
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