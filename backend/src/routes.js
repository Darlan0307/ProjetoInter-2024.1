import { Router } from "express";

const routes = Router()
// Controllers
import { ProductController } from './Controllers/ProductController.js'
import { uploader } from "./services/multer.js";

const productcontroller = new ProductController()


// Routes products
routes.get("/", (req, res) => {
    return res.json({ message: ' Hello World' })
})

routes.get("/products",productcontroller.getAllProducts)

routes.post("/product",uploader.single('imageProduct'),productcontroller.createProduct)

routes.put("/product/:id",productcontroller.updateProduct)

routes.delete("/product/:id",productcontroller.deleteProduct)

// Routes users

export default routes



