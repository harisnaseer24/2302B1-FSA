import Category from "../models/category.mjs"

let getCategories= async(req, res) => {
  let categories= await Category.find();
  if(categories.length == 0){

    res.status(404).json({msg:'No categories found!'})
  }else
  {
res.status(200).json({msg:'Showing our categories!',
  categories:categories
})

}
} 
//Insert

let addCategory= async(req, res) => {
  
let newCategory={
  title: req.body.title,
  description: req.body.description,
 
}

let addCategory= await Category.insertOne(newCategory);

  if(!addCategory){

    res.status(404).json({msg:'Failed to add Category!'})
  }else
  {
res.status(200).json({msg:'Category added successfully',
  Category:addCategory
})

}
}
//single product

// let getProduct= async(req, res) => {
//  try {
//   const id= req.params.id
// let product= await Product.findOne({_id:id});
//   if(!product){
//     res.status(404).json({msg:'No product found!'})
//   }else
//   {
// res.status(200).json({msg:'Product Found!',
//   product:product
// })
// }
// } catch (error) {
//   console.log(error)
//   res.json({msg:error})
//  }
// }

//delete product
// let deleteProduct= async(req, res) => {
//  try {
//   const id= req.params.id
// let product= await Product.deleteOne({_id:id});
//   if(!product){

//     res.status(404).json({msg:'Failed to delete product!'})
//   }else
//   {
// res.status(200).json({msg:'Product Deleted Successfully!',
//   product:product
// })
// }
//  } catch (error) {
//   console.log(error)
//   res.json({msg:error})
//  }
// } 






const catController ={getCategories,addCategory}
export default catController;