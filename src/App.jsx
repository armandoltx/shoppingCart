import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Products'
import { db } from './mocks/db'
function App() {

  const [products, setProducts] = useState(db)

  return (
    <>
      <Header />
      <Products products={products} />
      <Footer/>
    </>
  )
}

export default App
