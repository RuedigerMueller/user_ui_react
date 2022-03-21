import { combineReducers } from "redux";
import { canvasReducer } from "./canvasReducer";
import { getUsersReducer } from "./getUsersReducer";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    login: loginReducer,
    getUsers: getUsersReducer,
    canvas: canvasReducer,
    user: userReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;