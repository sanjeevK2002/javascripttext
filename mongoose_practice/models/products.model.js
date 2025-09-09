import mongoose  from "mongoose";
const productSchema = new mongoose.Schema({
    name  :{
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },
    category  :{
        type  :String,
        required : true,
        trim : true,
        lowercase : true
    },
    price  :{
        type : Number,
        required : true,
        min : 0
    },
    stock : {
        type : Number,
        required : true,
        min : 0,
        default : 0
    }
},
{timestamps : true})

export const Product =  mongoose.model('Product' , productSchema);