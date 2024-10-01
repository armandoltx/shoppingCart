import { useReducer } from "react"
import { cartReducer, cartInitialState } from "../reducers/cart-reducer"
export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  // console.log("00000")
  // console.log(state)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart =  product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  const increaseQuantity = product => dispatch({
    type: 'INCREASE_QUANTITY',
    payload: product
  })

  const decreaseQuantity = product => dispatch({
    type: 'DECREASE_QUANTITY',
    payload: product
  })

  return { state, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }
}