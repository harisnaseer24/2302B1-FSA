
import fs from "node:fs"
const data= JSON.parse(fs.readFileSync("data.json","utf-8"));
// console.log(data);
let products = data.products;


// REST APIs
let getAllProducts=(req, res) => {
  res.json(products).status(200)
}

let getSingleProduct=(req, res) => {
const id = req.params.id;
let product= products.filter((item,index)=>{
if (item.id == id) {
  return item}});
if (product.length > 0) {
  res.json(product)
} else {
  res.status(404).json({message:"Product not found"})
}
}

let addProduct=(req,res)=>{
const product = {
  id:req.body.id,
  title:req.body.title,
  description:req.body.description,
  price:req.body.price,
  stock:req.body.stock,
}
console.log(product);
products = [...products,product]
  res.json({msessage: "product added successfully",
    productAdded:product,
  })
}

let deleteProduct=(req,res)=>{

const id =req.params.id;
products = products.filter((item,index)=>{
  if(item.id != id){
    return item;
  }
})
  res.json({msessage: "product deleted successfully",
  })
}

//edit product
let editProduct=(req,res)=>{

const id =req.params.id;

const updatedProduct={
     id:req.body.id,
  title:req.body.title,
  description:req.body.description,
  price:req.body.price,
  stock:req.body.stock,
}

products = products.filter((item,index)=>{
  if(item.id != id){
    return item;
  }
})

products= [...products,updatedProduct]


  res.json({msessage: "product updated successfully",
  })
}

const productController= {getAllProducts,getSingleProduct,addProduct,deleteProduct, editProduct}
export default productController;