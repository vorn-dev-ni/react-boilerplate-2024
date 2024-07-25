import axios from 'axios';
import { ACTIONS } from './actions';
import { ProductType } from '../../types/api/product';
import { Dispatch } from 'redux';

export const fetchProductsSuccess = (products: ProductType[]) => ({
    type: ACTIONS.FETCH_PRODUCTSUCCESS,
    payload: products,
});

export const fetchProductLoading = () => ({
    type: ACTIONS.FETCH_PRODUCT_LOADING,
});

export const fetchProductsFailure = (error: string) => ({
    type: ACTIONS.FETCH_PRODUCTFAILED,
    payload: error,
});


export const getProduct = (baseUrl: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchProductLoading())
        try {

            const response = await axios.get(baseUrl)
            dispatch(fetchProductsSuccess(response.data as ProductType[]))


        } catch (error: any) {
            dispatch(fetchProductsFailure(error?.message))

        }


    }
}