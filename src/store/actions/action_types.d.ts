import { ProductType } from "../../types/api/product"
import { ACTIONS } from "./actions"

interface ACTION_LOADING  {
       type:ACTIONS.FETCH_PRODUCT_LOADING
}

interface ACTION_FAILED  {
    type:ACTIONS.FETCH_PRODUCTFAILED,
    payload:string

}
interface ACTION_SUCCESS  {
    type:ACTIONS.FETCH_PRODUCTSUCCESS,
    payload:ProductType[]

}

interface ACTION_DELETE {
    type:ACTIONS.DELETE_PRODUCT
    payload:ProductType[]
}


type ACTIONS_PRODUCT = ACTION_SUCCESS  | ACTION_DELETE | ACTION_FAILED | ACTION_LOADING