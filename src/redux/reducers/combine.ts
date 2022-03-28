import { combineReducers } from "redux";
import { canvasReducer } from "./canvasReducer";
import { loginReducer } from "./loginReducer";
import { usersReducer } from "./usersReducer";

const reducers = combineReducers({
  login: loginReducer,
  users: usersReducer,
  canvas: canvasReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
