import { CanvasState } from "../../type";
import { CanvasAction, CanvasActionType } from "../actionTypes/canvasActionTypes";

const initialState: CanvasState = {
    displayState: {
        displayLogin: true,
        displayUserList: false,
        displayUserDetail: false,
        displayUserRoles: false,
    },
    error: '',
}

export const canvasReducer = (state: CanvasState = initialState, action: CanvasAction): CanvasState => {
    switch (action.type) {
        case CanvasActionType.CANVAS_UPDATE:
            return {
                ...state,
                displayState: action.payload
            }

        default:
            return state;
    }
}