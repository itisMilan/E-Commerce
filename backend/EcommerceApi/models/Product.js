const mongoose = require ("mongoose")
const Scheme= mongoose.Schema
const ProductSchema = new Scheme({
    title:{type:String,required:true,unique:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    categories:{type:Array,required:true},
    size:{type:Array,},
    color:{type:Array,},
    price:{type:Number,required:true},
    inStock:{type:Boolean}
  
},
{timestamps:true}
);

module.exports = mongoose.model("Product",ProductSchema)