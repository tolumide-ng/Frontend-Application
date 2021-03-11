import actionTypes from "../actionTypes";
import { product as initialState } from "../index";
import { FetchProductStateDef, FetchProductActionTypeDefs } from "../types";

const fetchProductTypes = [...actionTypes];

export const fetchProductReducer = (
    state = initialState,
    fetchProductProps: FetchProductActionTypeDefs
): FetchProductStateDef => {
    return fetchProductTypes.includes(fetchProductProps.type)
        ? { ...state, ...fetchProductProps }
        : state;
};
