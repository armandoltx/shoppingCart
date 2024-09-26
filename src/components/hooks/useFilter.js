import { useState } from "react"


export function useFilters() {
  const [filters, setFilters] = useState({
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (product.price > filters.minPrice)
    })
  }

  return { filterProducts, setFilters }
}