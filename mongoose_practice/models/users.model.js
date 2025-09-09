import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },
    age:{
        type :Number,
        required : [true , 'Age is required'],
        min : 5,
        max : 100
    },
    city:{
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },
    hobby:{
        type : [String],
        default : []
    },
    
}
, {timestamps : true});
userSchema.pre('save' , async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 10);
        next();
    }})

const User = mongoose.model('User', userSchema);
export default User;