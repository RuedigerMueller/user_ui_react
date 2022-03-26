import { User } from "../../type";

export enum UsersActionType {
    USERS_GET_PENDING = 'USERS_GET_PENDING',
    USERS_GET_SUCCESS = 'USERS_GET_SUCCESS',
    USERS_GET_FAIL = 'USERS_GET_FAIL',
    USER_UPDATE = 'USER_UPDATE',
    USER_ADD = 'USER_ADD',
}

interface usersGetPendingAction {
    type: UsersActionType.USERS_GET_PENDING;
}

interface usersGetSuccessAcction {
    type: UsersActionType.USERS_GET_SUCCESS;
    payload: Array<User>;
}

interface usersGetFailAction {
    type: UsersActionType.USERS_GET_FAIL;
    payload: string;
}

interface userUpdateAction {
    type: UsersActionType.USER_UPDATE;
    payload: User;
}

interface userAddAction {
    type: UsersActionType.USER_ADD;
    payload: User;
}

export type UserAction = usersGetPendingAction | usersGetSuccessAcction | usersGetFailAction | userUpdateAction | userAddAction;