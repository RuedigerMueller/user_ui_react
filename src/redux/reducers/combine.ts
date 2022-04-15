import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";
import { usersReducer } from "./usersReducer";

const reducers = combineReducers({
  login: loginReducer,
  userList: usersReducer,
  userDetails: userReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
