import express from "express";
import controller from "../controllers/productController.mjs";
import userController from "../controllers/userController.mjs";
const router= express.Router();
router
//GET REQUESTS
.get('/',userController.auth,controller.getAllProducts)
.get('/product/:id',controller.getProduct)
.delete('/deleteproduct/:id',controller.deleteProduct)

//POST REQUESTs
.post('/addproduct',userController.auth,controller.addProduct)

//Users
.get("/allusers",userController.getAllUsers)
.post("/auth/signup",userController.Signup)
.post("/auth/login",userController.Login)
.post("/user/verify",userController.sendEmail)


export default router;