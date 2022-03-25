import { User } from "../../type";

export enum UserActionType {
    SET_EDIT_MODE = 'SET_EDIT_MODE',
    SET_CREATE_MODE = 'SET_CREATE_MODE',
    SET_DISPLAY_MODE = 'SET_DISPLAY_MODE',
    USER_UPDATE_PENDING = 'USER_UPDATE_PENDING',
    USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
    USER_UPDATE_FAIL = 'USER_UPDATE_FAIL',
    USER_CREATE_PENDING = 'USER_CREATE_PENDING',
    USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS',
    USER_CREATE_FAIL = 'USER_CREATE_FAIL',
}

interface setEditMode {
    type: UserActionType.SET_EDIT_MODE,
    payload: User,
} 

interface setDisplaytMode {
    type: UserActionType.SET_DISPLAY_MODE,
    payload: User,
} 

interface setCreateMode {
    type: UserActionType.SET_CREATE_MODE,
}

interface updateUserActionPending {
    type: UserActionType.USER_UPDATE_PENDING;
}

interface updateUserActionSuccess {
    type: UserActionType.USER_UPDATE_SUCCESS;
    payload: User;
}

interface updateUserActionFail {
    type: UserActionType.USER_UPDATE_FAIL;
    payload: string;
}

interface createUserActionPending {
    type: UserActionType.USER_CREATE_PENDING;
}

interface createUserActionSuccess {
    type: UserActionType.USER_CREATE_SUCCESS;
    payload: User;
}

interface createUserActionFail {
    type: UserActionType.USER_CREATE_FAIL;
    payload: string;
}

export type UserAction = 
    setEditMode | setCreateMode | setDisplaytMode | 
    updateUserActionPending | updateUserActionSuccess | updateUserActionFail |
    createUserActionPending | createUserActionSuccess | createUserActionFail;