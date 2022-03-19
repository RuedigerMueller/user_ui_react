export type User = {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string
}

export enum screenActions {
    create,
    edit,
    delete,
    assignRoles,
}

type AppState = {
    isLoggedIn: boolean
    accessToken: string
    displayUserList: boolean
    displayUserDetail: boolean
    displayUserRoles: boolean
    user: User
    userList: ReadonlyArray<User>
}

type AppAction = {
    type: string
    user?: User
}

type DispatchType = (args: AppAction) => AppAction
