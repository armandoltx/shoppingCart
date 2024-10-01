
export const cartInitialState = []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY'
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  const MAX_ITEMS = 5
  const MIN_ITEMS = 1

  switch(actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART : {
      // 1. comprobar que el producto ya existe en el carrito
      // usamos findIndex, que retorna el indice del 1 elemento que satisface la condicion,
      // si no retornma -1, en este caso retorna la posicion del elemento
      const productInCart = state.findIndex(product => product.id === actionPayload.id) // actionPayload es el payload q en este caso sera todo el producto
      if(productInCart >= 0) { // significa que el elemento existe en el carrito.
        if(state[productInCart].quantity >= MAX_ITEMS) return
        // creamos una copia del state para no modificar el state original
        // const updatedCart = [...cart] // esta copia si la podemos modificar
        const newState = structuredClone(state)
        newState[productInCart].quantity++ // le pasamos la posicion
        return newState // devolvemos el nuevo estado
      }
      actionPayload.quantity = 1
      return [
        ...state,
        actionPayload
      ]
      // SIMILAR
      //  return [
      //   ...state,
      //   {
      //     ...actionPayload, // product
      //     quantity: 1
      //   }
      //  ]
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART : {
     const newState = state.filter(item => item.id !== actionPayload.id)
     return newState
    }

    case CART_ACTIONS_TYPES.CLEAR_CART : {
      return cartInitialState
    }

    case CART_ACTIONS_TYPES.INCREASE_QUANTITY : {
      const updatedItem = state.map(item => {
        // console.log('INCREASE_QUANTITY')
        // console.log(actionPayload)
        if(item.id === actionPayload.id && item.quantity < MAX_ITEMS) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item // para que retorne el resto de los elementos
      })
      // console.log(updatedItem)
      return updatedItem
    }

    case CART_ACTIONS_TYPES.DECREASE_QUANTITY: {
      console.log('DECREASE_QUANTITY')
      console.log(actionPayload)
      const updatedItem = state.map(item => {
        if(item.id === actionPayload.id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    return updatedItem
  }

  }
  return state
}