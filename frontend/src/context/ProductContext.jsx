import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from '../services/api'
import { useLoader } from "./LoaderContext";
import { toast } from "react-toastify";

export const ProductContext = createContext({});

export const ProductProvider = ({children}) => {

  const { setIsLoading } = useLoader()

  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState(null)
  const [productEditSelected, setProductEditSelected] = useState(null)

  const handleProductSelected = (id) => {
    const productFiltred = products.find((item)=> item.id == id)
    setProductSelected(productFiltred)
  }

  const handleProductEditSelected = (id) => {
    const productFiltred = products.find((item)=> item.id == id)
    setProductEditSelected(productFiltred)
  }

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
    setPage(prevPage => prevPage - 1)
  }

  // Filtros
  const handleNameFilterChange = (text) => {
    setPage(1)
    setFilters({
      ...filters,
      name: text,
    });
  };

  const handleGenderFilterChange = (event) => {
    setPage(1)
    setFilters({
      ...filters,
      gender: event.target.value,
    });
  };

  const handleCategoryFilterChange = (event) => {
    setPage(1)
    setFilters({
      ...filters,
      category: event.target.value,
    });
  };

  const handleCleanFilterChange = () => {
    setFilters({
      name: "",
      gender: "",
      category: ""
    });
  };


  const fetchData =  async (filters) => {
    try {
      setIsLoading(true)
      const response = await api.get(`/products?pagina=${page}&name=${filters.name}&category=${filters.category}&gender=${filters.gender}`)

      setProducts(response.data.data)  
      setIsLoading(false)
    } catch (error) {
      toast.warn("Error ao tentar se conectar ao servidor")
    }
  }

  const updateProduct = async(id,{name,description,category,gender,price,quantity}) => {
    try {
      await api.put(`product/${id}`,{name,description,category,gender,price,quantity})

      toast.success('Produto atualizado com sucesso!')
    } catch (error) {
      console.log(error);
      toast.warn(error.response.data.error)
    }
  }


  const filtersMemo = useMemo(() => ({
    name: filters.name,
    gender: filters.gender,
    category: filters.category,
  }), [filters]);

  useEffect(()=>{
    fetchData(filtersMemo);
  },[page,filtersMemo])

  return (
    <ProductContext.Provider 
      value={{
        products,
        page,
        nextPage,
        prevPage,
        filters,
        handleNameFilterChange,
        handleGenderFilterChange,
        handleCategoryFilterChange,
        handleCleanFilterChange,
        productSelected,
        handleProductSelected,
        setProductSelected,
        updateProduct,
        handleProductEditSelected,
        productEditSelected,
        setProductEditSelected
        }}
      > 
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext)
}
