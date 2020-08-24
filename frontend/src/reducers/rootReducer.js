import { combineReducers } from 'redux';
import {productReducer, producDetailsReducer} from './product/productReducers'
import {cartReducer} from './cart/cartReducers'


const rootReducer = combineReducers({
    product : productReducer,
    productDetails : producDetailsReducer,
    cart : cartReducer
})

export default rootReducer