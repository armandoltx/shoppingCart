import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";


export const CartContext = createContext()

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCartReducer()

  // function addToCart(item) {
  //   // 1. comprobar que el producto ya existe en el carrito
  //   // usamos findIndex, que retorna el indice del 1 elemento que satisface la condicion,
  //   // si no retornma -1, en este caso retorna la posicion del elemento
  //   const productInCart = cart.findIndex(product => product.id === item.id)
  //   if(productInCart >= 0) { // significa que el elemento existe en el carrito.
  //     if(cart[productInCart].quantity >= MAX_ITEMS) return
  //     // creamos una copia del state para no modificar el state original
  //     const updatedCart = [...cart] // esta copia si la podemos modificar
  //     updatedCart[productInCart].quantity++ // le pasamos la posicion
  //     return setCart(updatedCart)
  //   }
  //   item.quantity = 1
  //   setCart([...cart, item])
  // }

  // function removeFromCart(id) {
  //    setCart(prevState => (prevState.filter(item => item.id !== id)))
  // }

  // function clearCart() {
  //   setCart([])
  // }

  // function increaseQuantity(id) {
  //   const updatedItem = cart.map(item => {
  //     if(item.id === id && item.quantity < MAX_ITEMS) {
  //       return {
  //         ...item,
  //         quantity: item.quantity + 1
  //       }
  //     }
  //     return item // para que retorne el resto de elementos que no sean el del id
  //   })
  //   setCart(updatedItem)
  // }

  // function decreaseQuantity(id) {
  //   const updatedItem = cart.map(item => {
  //     if(item.id === id && item.quantity > MIN_ITEMS) {
  //       return {
  //         ...item,
  //         quantity: item.quantity - 1
  //       }
  //     }
  //     return item
  //   })
  //   setCart(updatedItem)
  // }

  return(
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}
