import { useContext } from "react"
import { FiltersContext } from "../context/FiltersContext"


export function useFilters() {

  const {filters, setFilters} = useContext(FiltersContext)
  // console.log(filters)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (product.price > filters.minPrice)
    })
  }

  return { filters, setFilters, filterProducts }
}
