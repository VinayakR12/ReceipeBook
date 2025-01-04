import mongoose from "mongoose";
import { Schema } from "mongoose";

const categorySchema= new Schema({
    name:String,
    menuId:Number,
});

const Category = mongoose.model('Category',categorySchema);
export default Category;