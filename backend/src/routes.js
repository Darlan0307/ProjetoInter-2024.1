import { Router } from "express";

const routes = Router()
// Controllers
import { ProductController } from './Controllers/ProductController.js'
import { UserController } from "./Controllers/UserController.js";
import { uploader } from "./services/multer.js";

const productcontroller = new ProductController()
const usercontroller = new UserController()


// Routes products
routes.get("/", (req, res) => {
    return res.json({ message: ' Hello World' })
})

routes.get("/products",productcontroller.getAllProducts)

routes.post("/product",uploader.single('imageProduct'),productcontroller.createProduct)

routes.put("/product/:id",productcontroller.updateProduct)

routes.delete("/product/:id",productcontroller.deleteProduct)

// Routes users

routes.get("/users",usercontroller.listerUsers)

routes.post("/user",usercontroller.createUser) 


export default routes



