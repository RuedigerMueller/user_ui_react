import { User } from "../../type";

export enum GetUsersActionType {
    USERS_GET_PENDING = 'USERS_GET_PENDING',
    USERS_GET_SUCCESS = 'USERS_GET_SUCCESS',
    USERS_GET_FAIL = 'USERS_GET_FAIL',
}

interface getUsersActionPending {
    type: GetUsersActionType.USERS_GET_PENDING;
}

interface getUsersActionSuccess {
    type: GetUsersActionType.USERS_GET_SUCCESS;
    payload: Array<User>;
}

interface getUsersActionFail {
    type: GetUsersActionType.USERS_GET_FAIL;
    payload: string;
}

export type GetUserAction = getUsersActionPending | getUsersActionSuccess | getUsersActionFail;