import mongoose from "mongoose";
// const Schema= mongoose.Schema;
const { Schema } = mongoose;
const categorySchema = new Schema({
  title: { type: String, required: [true, "Title is Required"] },
  description: { type: String },
  
});
const Category = mongoose.model("Category", categorySchema);

export default Category;