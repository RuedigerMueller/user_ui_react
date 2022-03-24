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
