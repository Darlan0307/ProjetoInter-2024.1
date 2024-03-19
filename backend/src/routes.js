import { Router } from "express";

const routes = Router()
// Controllers
import { ProductController } from './Controllers/ProductController.js'
import { UserController } from "./Controllers/UserController.js";
import { AuthController } from "./Controllers/AuthController.js";
import { uploader } from "./services/multer.js";

const productcontroller = new ProductController()
const usercontroller = new UserController()
const authcontroller = new AuthController()


// Routes products
routes.get("/", (req, res) => {
    return res.json({ message: ' Hello World' })
})

routes.get("/products",productcontroller.getAllProducts)

routes.post("/product",uploader.single('imageProduct'),productcontroller.createProduct)

routes.put("/product/:id",productcontroller.updateProduct)

routes.delete("/product/:id",productcontroller.deleteProduct)

// Routes users

routes.get("/users",usercontroller.listerUsers) // Listar usuários

routes.post("/user",usercontroller.createUser) // Cadastrar usuario

routes.post("/auth",authcontroller.authUser) // Login do usuário


export default routes



