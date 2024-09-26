import {useId} from "react"
import {useFilters} from "./hooks/useFilter"

export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
      <input
        type="range"
        id={minPriceFilterId}
        min="0"
        max="350"
        onChange={handleChangeMinPrice}
      />
      <span>${filters.minPrice}</span>
    </section>
  )
}
