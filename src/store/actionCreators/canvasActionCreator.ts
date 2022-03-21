import { Dispatch } from 'redux';
import { DisplayState } from '../../type';
import { CanvasAction, CanvasActionType } from '../actionTypes/canvasActionTypes';


export const displayUserList = () => {
    return async (dispatch: Dispatch<CanvasAction>) => {
        const displayState: DisplayState = {
            displayLogin: false,
            displayUserDetail: false,
            displayUserList: true,
            displayUserRoles: false,
        }
        dispatch({
            type: CanvasActionType.CANVAS_UPDATE,
            payload: displayState
        });
    }
}