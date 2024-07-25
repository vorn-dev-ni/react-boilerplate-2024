import { ProductType } from "../../types/api/product"
import { ACTIONS_PRODUCT } from "../actions/action_types"
import { ACTIONS } from "../actions/actions"
import { PayloadAction } from "@reduxjs/toolkit"
type initStateType = {
    product:ProductType[],
    isloading:boolean,
    error:string
}

const initState:initStateType = {
    product:[],
    isloading:false,
    error:''
} 

 const ProductReducer = (state=initState,action:ACTIONS_PRODUCT) => {

        switch(action.type) {
        
             case ACTIONS.FETCH_PRODUCT_LOADING :
                return {
                    ...state,
                    isloading:true
                }
                   case ACTIONS.FETCH_PRODUCTSUCCESS :
                return {
                    ...state,
                    isloading:false,
                    product: action.payload
                }
             case ACTIONS.FETCH_PRODUCTFAILED :
                return {
                    ...state,
                    isloading:false,
                    error:action.payload
                }
                case ACTIONS.DELETE_PRODUCT:
                    break;
    
                  default:
                            return initState
        }
}

export default ProductReducer