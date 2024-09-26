import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Products'
import { FiltersProvider } from './context/filters'
import './App.css'





function App() {
  return (
    <FiltersProvider>
      <Header />
      <Products />
      <Footer/>
    </FiltersProvider>
  )
}

export default App
