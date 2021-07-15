import { combineReducers } from "redux";
import { reducer_1 } from "./reducer_1";

export const rootReducer = combineReducers({
    reducer_1: reducer_1,
})

export type RootState = ReturnType<typeof rootReducer>