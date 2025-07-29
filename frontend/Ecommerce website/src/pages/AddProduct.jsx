import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddProduct = () => {

  let [categories,setCategory]=useState([])

const getCategories=async()=>{
let myCategories= await axios.get("http://localhost:3000/categories")
console.log(myCategories.data.categories);
if (myCategories.data.categories.length > 0) {

    setCategory(myCategories.data.categories)
} else {
    setCategory([{_id:0,title:"Universal"}])
}


}

useEffect(()=>{
getCategories();
},[])





  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Add a new product..!</h2>
      <div className="row">
         
        <div className="col-md-12">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Title" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Description" />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" placeholder="Price" />
            </div>
            <div className="mb-3">
              <input type="file" className="form-control" placeholder="Choose File" multiple />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" placeholder="Stock" />
            </div>
            <div className="mb-3">
              <select   className="form-control" placeholder="Choose Category" >
                <option disabled selected>Choose category</option>
                {
                    categories.map((item,index)=>{
return (    <option key={index} value={item._id}> {item.title}</option> )
                    })
                }


              </select>
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" placeholder="Rating" max={5} min={1}/>
            </div>
            <div className="mb-3">
              <input type="brand" className="form-control" placeholder="Brand"/>
            </div>
           
            <button type="submit" className="btn btn-danger w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
