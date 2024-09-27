import { CartItem } from "./CartItem"
import {useCart} from "../hooks/useCart"
import {useMemo} from "react"

export function Cart() {
  const { addToCart, cart } = useCart()

  // state derivado
  const isEmpty = useMemo( () => cart.length === 0, [cart] ) // se ejecutara solo cuando el carrito haya cambiado
  const cartTotal = () => (cart.reduce( (total, item) => total + (item.quantity * item.price), 0 ))

  return(
    <>
      <div id="carrito" className="bg-white p-3">
        {isEmpty() ? (
          <p className="text-center">El carrito esta vacio</p>
        ) : (
          <>
            <table className="w-100 table">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <CartItem
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />

                ))}
              </tbody>
            </table>
            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal()}</span></p>
            <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
          </>
        )}

      </div>
    </>
  )
}