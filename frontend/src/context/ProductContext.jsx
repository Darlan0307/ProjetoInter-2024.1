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
  const [productsHandbag,setProductsHandbag] = useState(JSON.parse(localStorage.getItem("ProductsHandbag")) || [])

  let priceTotal = useMemo(()=>{
    let value = 0
    productsHandbag.forEach(product => {
      let valueProduct = product.price * product.qtdItem
      value += valueProduct
    })
    return value
  },[productsHandbag])

  const addProductHandbag = (id) => {
    const productExisted = productsHandbag.findIndex((item)=> item.id == id)

    if(productExisted != -1){
      toast.warn("Produto já está na bolsa")
      return
    }
    const productFiltred = products.find((item)=> item.id == id)
    productFiltred["qtdItem"] = 1
    setProductsHandbag([...productsHandbag,productFiltred])
    toast.success("Produto adicionado na bolsa!")
  }

  const removeProductHandbag = (id) => {
    const productsFiltred = productsHandbag.filter((item)=> item.id != id)

    setProductsHandbag(productsFiltred)
    toast.success("Produto removido da bolsa!")
  }

  const plusQtdItemHandbag = (id) => {
    const productsModificad = productsHandbag.map((item)=> {
      if(item.id == id){
        item["qtdItem"] = item.qtdItem + 1
        return item
      }
      return item
    })
    setProductsHandbag(productsModificad)
  }

  const minusQtdItemHandbag = (id) => {
    const productsModificad = productsHandbag.map((item)=> {
      if(item.id == id){

        if(item.qtdItem - 1 == 0){
          return item
        }
        item["qtdItem"] = item.qtdItem - 1
        return item
      }
      return item
    })
    setProductsHandbag(productsModificad)
  }

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
      toast.warn(error.response.data.error)
    }
  }

  const removeProduct = async(id) => {
    try {

      const response = confirm("Deseja realmente excluir o produto?")
      if(!response){
        toast.success('Cancelado')
        return;
      }
      await api.delete(`product/${id}`)

      toast.success('Produto removido com sucesso!')
    } catch (error) {
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

  useEffect(()=>{
    localStorage.setItem("ProductsHandbag",JSON.stringify(productsHandbag))
  },[productsHandbag])


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
        removeProduct,
        handleProductEditSelected,
        productEditSelected,
        setProductEditSelected,
        productsHandbag,
        setProductsHandbag,
        addProductHandbag,
        removeProductHandbag,
        plusQtdItemHandbag,
        minusQtdItemHandbag,
        priceTotal
        }}
      > 
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext)
}
