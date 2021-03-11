import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchConfigurationReducer } from "./configuration/reducer";
import { fetchProductReducer } from "./product/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchConfigurationReducer,
    fetchProductReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
