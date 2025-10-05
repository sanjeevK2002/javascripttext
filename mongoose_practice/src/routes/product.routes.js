import {Router} from 'express'
import {Product} from '../models/products.model.js';
import productController from '../controllers/product.controllers.js';
import userAuth from '../middleware/authUser.middleware.js';

const product_router = Router();

product_router.post("/product" , userAuth, async (req,res)=>{
    try {
        const {name,category,price,stock} = req.body;
        productController(req);

        const {_id} = req.user;        
    
        const product = new Product({seller : _id
            , name, category, price, stock});
    
    await product.save();
    res.status(201).json({
        message : "product has been listed successfully"
    })
    
    } catch (error) {
        res.status(400).json({
            message : "product not listed successfully",
            error : error.message
        })
    }
})

export default product_router;

