import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStateDef } from ".";
import { ConfigDef, ForAxiosDefs, ProductDef } from "../../commonTypes";

export interface RootState {
    dropDownReducer: {
        display: boolean;
    };
    fetchConfigurationReducer: {
        status: string;
        error: string | null;
        configuration: ConfigDef;
    };
    fetchProductReducer: {};
    status: string;
    error: string | null;
    product: ProductDef;
}

export interface StoreActionPropsDefs {
    path: string;
    payload: {};
    method: ForAxiosDefs;
    params?: {};
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateDef,
    unknown,
    Action<string>
>;
