export type User = {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
}

interface ILoginInfo {
    username: string,
    password: string,
}

export interface IDisplayState {
    displayLogin: boolean,
    displayUserList: boolean,
    displayUserDetail: boolean,
    displayUserRoles: boolean,
}

export enum screenActions {
    create,
    edit,
    delete,
    assignRoles,
}

type Options = {
    key: string,
    text: string
}

type LoginState = {
    loginInfo: ILoginInfo;
    accessToken: string,
}

type AppState = {
    displayState: IDisplayState
    //loginInfo: ILoginInfo
    accessToken: string
    user: User
    userList: ReadonlyArray<User>
    error: string
}

type AppAction = {
    type: string
    user?: User
}

type DispatchType = (args: AppAction) => AppAction
