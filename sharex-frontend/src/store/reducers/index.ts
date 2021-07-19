import { combineReducers } from "redux";
import { reducer_login } from "./reducer_1";
import { reducer_profile } from "./reducer_2_profile";

export const rootReducer = combineReducers({
    reducer_login: reducer_login,
    reducer_profile: reducer_profile,
})

export type RootState = ReturnType<typeof rootReducer>