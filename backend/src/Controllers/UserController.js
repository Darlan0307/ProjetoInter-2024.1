import { prisma } from "../services/prisma.js";
import bcrypt from 'bcryptjs'
import jsonwebtoken from "jsonwebtoken";

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

       const newUser = await prisma.user.create({
         data :{
           name,
           email,
           password: hash_password,
           admin
         }
       })

      const secret = process.env.SECRET

      const token = jsonwebtoken.sign({id:newUser.id},`${secret}`,{expiresIn:"1d"})

      const {id} = newUser

      res.status(201).json({user:{id,name,email,admin:newUser.admin},token})
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