import { User } from "../../type";

export enum UserActionType {
    USER_UPDATE = 'USER_UPDATE',
}

interface userUpdate {
    type: UserActionType.USER_UPDATE,
    payload: User,
}   

export type UserAction = userUpdate;