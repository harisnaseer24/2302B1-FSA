import express from "express";
import controller from "../controllers/productController.mjs";
const router= express.Router();
router
//GET REQUESTS
.get('/',controller.getAllProducts)
.get('/product/:id',controller.getProduct)
.delete('/deleteproduct/:id',controller.deleteProduct)

//POST REQUESTs
.post('/addproduct',controller.addProduct)


export default router;