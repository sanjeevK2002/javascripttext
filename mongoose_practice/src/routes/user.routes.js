import { authController } from "../controllers/auth.controllers.js";
import userAuth from "../middleware/authUser.middleware.js";
import User from "../models/users.model.js";
import { Router } from "express";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    authController(req); // validation

    const { name,email, age, city, hobbies, password } = req.body;

    const user = new User({
      name,
      email,
      age,
      city,
      hobbies,
      password,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(401).json({ message: "User not registered", error: error.message });
  }
});

//login
router.post("/login",async (req,res)=>{
  try {
    const {email , password} = req.body
    
    const user = await User.findOne({email}).select("+password");
    
    if(!user){
      throw new Error("Invalid email ")
    }
    const validPassword = await user.comparePassword(password);
    if(!validPassword){
      throw new Error("password is not correct !!")
    }
    const token = user.accessToken();
    
    if(!token){
      throw new Error("Token not generated !!!")
    }
    const options={
      httpOnly:true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    }
    
    res.cookie("token" ,token ,options)

    res.send("login successful")

  } 
  catch (error) {
    res.status(401).json({ message: "login is unsuccessfull", error: error.message });
  }
})

//profile

router.get("/profile" ,  userAuth, async(req,res)=>{
  try {
    const userprofile = req.user;
    res.send(userprofile);
    
  } catch (error) {
   res.status(400).json({
    message:"profile not fetch",
    error:error
   }) 
  }
})






export default router;
