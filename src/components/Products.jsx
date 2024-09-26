import { useState } from 'react'
import { Filters } from "./Filters";
import { Product } from "./Product";
import { db } from '../mocks/db';
import { useFilters } from './hooks/useFilter';


export function Products() {

  const [products] = useState(db)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return(
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="text-center">
        <Filters
          changeFilters={setFilters}
        />
      </div>

      <div className="row mt-5">
        {filteredProducts.map( product => (
          <Product
            key={product.id}
            product={product}
            />
        ))}
      </div>
    </main>
  )
}