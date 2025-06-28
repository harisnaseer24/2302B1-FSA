import express from 'express'
import productController from '../controllers/productController.mjs'
const router= express.Router()

router
.get("/",productController.getAllProducts)
.get('/product/:id', productController.getSingleProduct)
.post('/addproduct',productController.addProduct)
.delete('/deleteproduct/:id',productController.deleteProduct)
.put('/editproduct/:id',productController.editProduct)



export default router;