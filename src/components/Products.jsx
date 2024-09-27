import { useState } from 'react'
import { Filters } from "./Filters";
import { Product } from "./Product";
import { db } from '../mocks/db';
import { useFilters } from './hooks/useFilter';


export function Products() {

  const [products] = useState(db)
  const [cart, setCart] = useState([])
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

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
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  return(
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="text-center">
        <Filters />
      </div>

      <div className="row mt-5">
        {filteredProducts.map( product => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            />
        ))}
      </div>
    </main>
  )
}
