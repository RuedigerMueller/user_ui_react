import { combineReducers } from "redux";
import { canvasReducer } from "./canvasReducer";
import { getUsersReducer } from "./getUsersReducer";
import { loginReducer } from "./loginReducer";

const reducers = combineReducers({
    login: loginReducer,
    getUsers: getUsersReducer,
    canvas: canvasReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;