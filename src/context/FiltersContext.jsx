import { createContext, useState } from "react";

// creando el contexto q vamos a consumir
export const FiltersContext = createContext()


// creando el proveedor que nos provee el acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0
  })
  return(
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
