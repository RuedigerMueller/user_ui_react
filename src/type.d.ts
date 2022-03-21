export type User = {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
}

export type LoginInfo = {
    username: string,
    password: string,
}

export type DisplayState = {
    displayLogin: boolean,
    displayUserList: boolean,
    displayUserDetail: boolean,
    displayUserRoles: boolean,
}

type Options = {
    key: string,
    text: string
}

type AppState = {
    displayState: DisplayState
    //loginInfo: ILoginInfo
    accessToken: string
    user: User
    userList: ReadonlyArray<User>
    error: string
}

type LoginState = {
    accessToken: string,
    error: string,
}

type GetUsersState = {
    userList: ReadonlyArray<User>,
    error: string,
}

export enum UserDialogMode {
    edit = 'Edit',
    display = 'Display',
}

type UserState = {
    user: User,
    mode: string,
    error: string,
}

type CanvasState = {
    displayState: DisplayState,
    error: string,
}

type AppAction = {
    type: string
    user?: User
}

type DispatchType = (args: AppAction) => AppAction
