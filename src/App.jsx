import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Products'
import { db } from './mocks/db'
import { useFilters } from './components/hooks/useFilter'




function App() {
  const [products] = useState(db)
  const { filterProducts, setFilters } = useFilters()
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
