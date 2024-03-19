import { prisma } from "../services/prisma.js";
import bcrypt from 'bcryptjs'

export class UserController{

  async createUser(req,res){
    try {
      const {
        admin,
        name,
        email,
        password
      } = req.body

      const userExisted = await prisma.user.findUnique({where:{email}})

      if(userExisted) return res.status(401).json({message: "Email ja existe no nosso banco de dados"})

       // Criptografando a senha
       const hash_password = (await bcrypt.hash(password,8)).toString()

       await prisma.user.create({
         data :{
           name,
           email,
           password: hash_password,
           admin
         }
       })

       return res.status(201).json("Usuário criado com sucesso")
    } catch (error) {
      console.log(error);
      res.status(400).json({msg:"Error ao tentar acessar o banco de dados"});
    }
  }

  async listerUsers(req,res){
    try {
      
      const allUsers = await prisma.user.findMany();

      res.json(allUsers);

    } catch (error) {
      res.status(400).json({msg:"Error ao tentar acessar o banco de dados"});
    }
  }

}