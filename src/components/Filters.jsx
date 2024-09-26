import {useId, useState} from "react"

export function Filters({changeFilters}) {
  const [minPrice, setMinPrice] = useState(0)

  const minPriceFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
      <input
        type="range"
        name=""
        id={minPriceFilterId}
        min="0"
        max="350"
        onChange={handleChangeMinPrice}
      />
      <span>${minPrice}</span>
    </section>
  )
}