import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api'
import { useLoader } from "./LoaderContext";

export const ProductContext = createContext({});

export const ProductProvider = ({children}) => {

  const { setIsLoading } = useLoader()

  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    name: "",
    gender: "",
    category: ""
  });
  const [page,setPage] = useState(1)

  const nextPage = ()=>{
    setPage(prevPage => prevPage + 1 )
  }

  const prevPage = ()=>{
    setPage(prevPage => prevPage + 1)
  }

  // Filtros
  const handleNameFilterChange = (text) => {
    setFilters({
      ...filters,
      name: text,
    });
  };

  const handleGenderFilterChange = (event) => {
    setFilters({
      ...filters,
      gender: event.target.value,
    });
  };

  const handleCategoryFilterChange = (event) => {
    setFilters({
      ...filters,
      category: event.target.value,
    });
  };


  const fetchData =  async (filters) => {
    try {
      setIsLoading(true)
      const response = await api.get(`/products?pagina=${page}&name=${filters.name}&category=${filters.category}&gender=${filters.gender}`)

      setProducts(response.data.data)
      console.log(response.data.data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData(filters)
  },[page,filters])


  return (
    <ProductContext.Provider 
      value={{
        products,
        page,
        nextPage,
        prevPage,
        handleNameFilterChange,
        handleGenreFilterChange: handleGenderFilterChange,
        handleCategoryFilterChange
        }}
      > 
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext)
}
