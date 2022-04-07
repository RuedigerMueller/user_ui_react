import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { usersReducer } from "./usersReducer";

const reducers = combineReducers({
  login: loginReducer,
  userList: usersReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
