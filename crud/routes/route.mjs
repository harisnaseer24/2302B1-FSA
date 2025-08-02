import express from "express";
import controller from "../controllers/productController.mjs";
import userController from "../controllers/userController.mjs";
import { upload } from "../cloudinaryConfig.mjs";
import catController from "../controllers/categoryController.mjs";
const router= express.Router();
router
//GET REQUESTS
.get('/',controller.getAllProducts)
.get('/product/:id',controller.getProduct)
.delete('/deleteproduct/:id',controller.deleteProduct)

//POST REQUESTs
// .post('/addproduct',userController.auth,controller.addProduct)
.post('/addproduct',controller.addProduct)


.post('/addproductwithimage',upload.single("image"),controller.addProductWithImage)

//Users
.get("/allusers",userController.getAllUsers)
.post("/auth/signup",userController.Signup)
.post("/auth/login",userController.Login)
.post("/user/verify",userController.sendEmail)


//Category
.get("/categories",catController.getCategories)
.post("/addcategory",catController.addCategory)

//Brand
// .get("/brand",catController.getCategories)
// .post("/addbrand",catController.addCategory)

.patch("/user/change-activation-status/:id/:status",userController.changeActivationStatus)


export default router;