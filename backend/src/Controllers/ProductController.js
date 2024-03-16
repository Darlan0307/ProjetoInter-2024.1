import { prisma } from '../services/prisma.js'
import cloudinary from 'cloudinary'
import { configCloud } from '../services/cloudinary.js'

export class ProductController{

  async createProduct(req,res){
    try {
      const {
        name,
        description,
        category,
        gender,
        price,
        quantity
      } = req.body

      // Verificando se o produto ja existe
      const existingProduct = await prisma.product.findUnique({where:{name:name}})

      if(existingProduct) return res.status(400).json({error: "Produto já existente"}) 

      // Upload de imagem no cloudinary
      cloudinary.v2.config(configCloud);

      const result = await cloudinary.v2.uploader.upload(req.file.path)
      
      if(!result.url) throw new Error('Erro ao enviar imagem')


      // Convertendo os valores
      const priceConverted = parseFloat(price)
      const quantityConverted = parseInt(quantity)

      const product = await prisma.product.create({
        data:{
          name,
          urlImage: result.secure_url,
          description,
          category,
          gender,
          price: priceConverted,
          quantity: quantityConverted
        }
      })
      return res.status(201).json(product)
    } catch (error) {
      res.status(400).json({msg:"Error ao tentar criar um produto"})
    }
  }

  async getAllProducts(req,res){
    try {

      const  products = await prisma.product.findMany()

      res.status(200).json({data:products})
    } catch (error) {

      res.status(400).json({msg:"Error ao tentar acessar o banco de dados"});
    }
  }

}

