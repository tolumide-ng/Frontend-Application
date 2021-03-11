import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchConfigurationReducer } from "./configuration/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchConfigurationReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
