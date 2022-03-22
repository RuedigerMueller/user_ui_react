import { User } from "../../type";

export enum UserActionType {
    SET_EDIT_MODE = 'SET_EDIT_MODE',
    SET_CREATE_MODE = 'SET_CREATE_MODE'
}

interface setEditMode {
    type: UserActionType.SET_EDIT_MODE,
    payload: User,
} 

interface setCreateMode {
    type: UserActionType.SET_CREATE_MODE,
}   

export type UserAction = setEditMode | setCreateMode;