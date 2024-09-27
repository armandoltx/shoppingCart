import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    // 1. comprobar que el producto ya existe en el carrito
    // usamos findIndex, que retorna el indice del 1 elemento que satisface la condicion,
    // si no retornma -1, en este caso retorna la posicion del elemento
    const productInCart = cart.findIndex(product => product.id === item.id)
    console.log(productInCart)
    if(productInCart >= 0) { // significa que el elemento existe en el carrito.
      // creamos una copia del state para no modificar el state original
      const updatedCart = [...cart] // esta copia si la podemos modificar
      updatedCart[productInCart].quantity++ // le pasamos la posicion
      return setCart(updatedCart)
    }
    item.quantity = 1
    setCart([...cart, item])
  }

  return(
    <CartContext.Provider value={{
      cart,
      addToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
