import { combineReducers } from "redux";
import { canvasReducer } from "./canvasReducer";
import { usersReducer } from "./usersReducer";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    login: loginReducer,
    users: usersReducer,
    canvas: canvasReducer,
    user: userReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;