import Product from "../models/product.mjs"

let getAllProducts= async(req, res) => {
  let products= await Product.find();
  if(products.length == 0){

    res.status(404).json({msg:'No products found!'})
  }else
  {
res.status(200).json({msg:'Showing our producsts!',
  products:products
})

}
} 
//Insert

let addProduct= async(req, res) => {
  
let newProduct={
  title: req.body.title,
  description: req.body.description,
  price: req.body.price,
  rating: req.body.rating,
  stock: req.body.stock,
  brand: req.body.brand,
  category: req.body.category,
  thumbnail: req.body.images,
  discountPercentage: req.body.discountPercentage,
  images: req.body.images,
}

let addProduct= await Product.insertOne(newProduct);

  if(!addProduct){

    res.status(404).json({msg:'Failed to add product!'})
  }else
  {
res.status(200).json({msg:'Product added successfully',
  product:addProduct
})

}
}
//single product

let getProduct= async(req, res) => {
 try {
  const id= req.params.id
let product= await Product.findOne({_id:id});
  if(!product){
    res.status(404).json({msg:'No product found!'})
  }else
  {
res.status(200).json({msg:'Product Found!',
  product:product
})
}
} catch (error) {
  console.log(error)
  res.json({msg:error})
 }
}

//delete product
let deleteProduct= async(req, res) => {
 try {
  const id= req.params.id
let product= await Product.deleteOne({_id:id});
  if(!product){

    res.status(404).json({msg:'Failed to delete product!'})
  }else
  {
res.status(200).json({msg:'Product Deleted Successfully!',
  product:product
})
}
 } catch (error) {
  console.log(error)
  res.json({msg:error})
 }
} 

//Image Uploading 
let addProductWithImage= async(req, res) => {
  console.log(req.file);
let newProduct={
  title: req.body.title,
  description: req.body.description,
  price: req.body.price,
  rating: req.body.rating,
  stock: req.body.stock,
  brand: req.body.brand,
  category: req.body.category,
  thumbnail: req.file.path,
  discountPercentage: req.body.discountPercentage,
  images: req.file.path,
}
let addProduct= await Product.insertOne(newProduct);
  if(!addProduct){
    res.status(404).json({msg:'Failed to add product!'})
  }else
  {
res.status(200).json({msg:'Product added successfully',
  product:addProduct
})

}
}






const controller ={getAllProducts,addProduct, getProduct,deleteProduct,addProductWithImage}
export default controller;