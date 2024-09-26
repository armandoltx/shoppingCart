import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Products'
import { db } from './mocks/db'
function App() {

  const [products, setProducts] = useState(db)
  const [filters, setFilters] = useState({
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (product.price > filters.minPrice)
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products
        products={filteredProducts}
        changeFilters={setFilters}
        />
      <Footer/>
    </>
  )
}

export default App
