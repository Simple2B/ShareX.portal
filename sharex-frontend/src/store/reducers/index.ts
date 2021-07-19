import { combineReducers } from "redux";
import { reducer_login } from "./reducer_1";

export const rootReducer = combineReducers({
    reducer_login: reducer_login,
})

export type RootState = ReturnType<typeof rootReducer>