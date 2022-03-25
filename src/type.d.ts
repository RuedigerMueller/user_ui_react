export type User = {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
}

type LoginInfo = {
    username: string,
    password: string,
}

type DisplayState = {
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

type UserState = {
    user: User,
    mode: string,
    error: string,
}

type CanvasState = {
    displayState: DisplayState,
    error: string,
}

export enum MODES {
    EDIT = 'edit',
    DISPLAY = 'display',
    CREATE = 'create'
}


export type MODE = MODES