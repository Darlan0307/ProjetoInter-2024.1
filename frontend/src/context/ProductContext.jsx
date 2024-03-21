import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api'

export const ProductContext = createContext({});

export const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    name: "",
    genre: "",
    category: "",
  });

  // Filtros
  const handleNameFilterChange = (text) => {
    setFilters({
      ...filters,
      name: text,
    });
  };

  const handleGenreFilterChange = (event) => {
    setFilters({
      ...filters,
      genre: event.target.value,
    });
  };

  const handleCategoryFilterChange = (event) => {
    setFilters({
      ...filters,
      category: event.target.value,
    });
  };

  const filterProducts = () => {
    const { name, genre, category } = filters;
    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(name.toLowerCase()) &&
        (genre === "" || product.genre === genre) &&
        (category === "" || product.category === category)
      );
    });
  };

  const fetchData =  async () => {
    try {

      const response = await api.get('/products')

      setProducts(response.data.data)
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <ProductContext.Provider 
      value={{
        products,
        filterProducts,
        handleNameFilterChange,
        handleGenreFilterChange,
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
