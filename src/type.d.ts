export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

type LoginInfo = {
  username: string;
  password: string;
};

type Options = {
  key: string;
  text: string;
};

type AppState = {
  //displayState: DisplayState;
  accessToken: string;
  user: User;
  userList: ReadonlyArray<User>;
  error: string;
};

type LoginState = {
  accessToken: string;
  error: string;
};

type UsersState = {
  users: ReadonlyArray<User>;
  selectedUserID: number;
  error: string;
};

type UserState = {
  user: User;
  mode: UserDetailsMode;
};

type Modes = ["edit", "display", "create"];
type UserDetailsMode = Modes[number];
