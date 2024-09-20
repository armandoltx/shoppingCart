import { Product } from './components/Product'


export function Products() {

  return(
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="row mt-5">
        <Product />
      </div>
    </main>
  )
}