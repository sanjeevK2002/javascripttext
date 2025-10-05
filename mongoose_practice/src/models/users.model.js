import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: 5,
    max: 100
  },
  city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  hobbies: {
    type: [String],
    default: []
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false   
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});



// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  
  return await bcrypt.compare(candidatePassword, this.password);
};

//accessToken
userSchema.methods.accessToken =  function(){
  return  jwt.sign({
    _id:this._id,
    email:this._email,    
  },process.env.ACCESS_SECRET_KEY,{expiresIn:process.env.ACCESS_EXPITY_DATE}
)
}

const User = mongoose.model('User', userSchema);
export default User;
