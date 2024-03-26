import { prisma } from '../services/prisma.js'
import { deleteImage, uploadImage } from '../services/cloudinary.js'


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
      const result = await uploadImage(req.file.path)
      
      if(!result.url) return res.status(400).json({error: "Erro ao enviar imagem"}) 

      // Convertendo os valores
      const priceConverted = parseFloat(price)
      const quantityConverted = parseInt(quantity)

      await prisma.product.create({
        data:{
          name,
          urlImage: result.url,
          publicId: result.publicId,
          description,
          category,
          gender,
          price: priceConverted,
          quantity: quantityConverted
        }
      })
      return res.status(201).json("Produto criado com sucesso")
    } catch (error) {
      res.status(400).json({msg:"Error ao tentar criar um produto"})
    }
  }

  async getAllProducts(req,res){
    try {
      const pagina = parseInt(req.query.pagina) || 1;
      const limite = parseInt(req.query.limite) || 10;
      const name =   req.query.name || "";
      const category = req.query.category || "";
      const gender = req.query.gender || "";
      
      const  products = await prisma.product.findMany({
        skip: (pagina - 1) * limite,
        take: limite,
        where:{
          name: {
            contains: name,
            mode:"insensitive"
          },
          gender:{
            contains: gender,
            mode:"insensitive"
          },
          category:{
            contains: category,
            mode:"insensitive"
          }
        }
      })

      res.status(200).json({data:products})
    } catch (error) {
      res.status(400).json({msg:"Error ao tentar acessar o banco de dados"});
    }
  }

  async updateProduct(req,res){
    try {
      const { id } = req.params
      const updates = req.body

      const  productExist = await prisma.product.findUnique({where:{id}})

      if (!productExist)return res.status(400).json({error: "Produto não existe"}) 

      if(productExist.name == updates.name)return res.status(400).json({error: "Já existe um produto com esse nome"})

      const updatedProduct = await prisma.product.update({
        where: { id },
        data: updates,
      });

      res.status(200).json({ data: updatedProduct });

    } catch (error) {
      res.status(400).json({msg:"Error ao tentar acessar o banco de dados"});
    }
  }

  async deleteProduct(req,res){
    try {
      const { id } =  req.params;

      const productExists = await prisma.product.findUnique({
        where :{id} 
      });

      if(!productExists) return res.status(400).json({error: "Produto não existe"})

      // Removendo imagem do produto no clodinary
      deleteImage(productExists.publicId)

      // Removendo o produto da base de dados
      await prisma.product.delete({where:{id}})
      
      return res.status(204).json({message:"Removido com sucesso!"});

    } catch (error) {
      res.status(400).json({msg:"Error ao tentar acessar o banco de dados"});
    }
  }

}

