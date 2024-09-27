import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Products'
import { FiltersProvider } from './context/FiltersContext'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
    <FiltersProvider>
      <CartProvider>
      <Header />
      <Products />
      <Footer/>
    </CartProvider>
    </FiltersProvider>
  )
}

export default App
