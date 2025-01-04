import mongoose from "mongoose";
import { Schema } from "mongoose";

const ingrediatentSchema=new Schema({
    name:{type:String ,required:true},
    quantity:{type:String,required:true}
})

const commentSchema=new Schema({
    user:{type:String,required:true},
    comment:{
        type:String,required:true  
    }
})

const ItemSchema = new Schema({
    menuId: { type:Number , required:true},
    name:{type:String, required:true},
    thumbnail_image:{type:String, required:true},
    category:{type:String, required:true},
    instructions:{type:String, required:true},
    tags:{type:[String]},
    ingredients:{type:[ingrediatentSchema], required:true},
    comments:{type:[commentSchema], required:true},

})

const Item = mongoose.model('items',ItemSchema)
export default Item