export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
}

type LoginInfo = {
  username: string;
  password: string;
};
