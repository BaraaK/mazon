import {ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_FAIL} from './cartTypes'

const initialState = {
    cartItems : [],
    isAdded : false
}
export const cartReducer = (state = initialState, action) => {
    const items = action.payload

    switch(action.type) {
        case ADD_CART_REQUEST:
        return {
          ...state
                }
      case ADD_CART_SUCCESS:
        return {
          isAdded: true,
          cartItems: [...state.cartItems, items]
        }
      case ADD_CART_FAIL:
        return {
            ...state,
            isAdded:false
            
        }
      default: return state
    }
  }