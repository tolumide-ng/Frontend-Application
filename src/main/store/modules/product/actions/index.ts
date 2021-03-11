import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_PENDING,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_UPDATE,
} from "../actionTypes";

export const fetchProductPending = () => ({
    type: FETCH_PRODUCT_PENDING,
    payload: {
        type: "fetchProductPending",
        error: null,
        product: {},
    },
});

export const fetchProductFailure = (error: string) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: {
        type: "fetchProductFailure",
        error,
        product: {},
    },
});

export const fetchProductSuccess = (product: {}) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: {
        type: "fetchProductSuccess",
        error: null,
        product,
    },
});

export const fetchProductUpdate = (product: {}) => ({
    type: FETCH_PRODUCT_UPDATE,
    payload: {
        type: "fetchProductUpdate",
        error: null,
        product,
    },
});

export const fetchProductAction = (
    props: StoreActionPropsDefs
): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchProductPending());
        const response = await axiosCall(props);
        dispatch(fetchProductSuccess(response?.data));
    } catch (error) {
        dispatch(fetchProductFailure(error ?? ""));
    }
};
