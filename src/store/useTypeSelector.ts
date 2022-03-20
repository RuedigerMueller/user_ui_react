import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./reducers/combine";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
