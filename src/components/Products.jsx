import {Filters} from "./Filters";
import {Product} from "./Product";



export function Products({ products, changeFilters }) {

  return(
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="text-center">
        <Filters
          changeFilters={changeFilters}
        />
      </div>

      <div className="row mt-5">
        {products.map( product => (
          <Product
            key={product.id}
            product={product}
            />
        ))}
      </div>
    </main>
  )
}