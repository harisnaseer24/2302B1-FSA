import User from "../models/user.mjs"
import bcrypt from "bcrypt"

let getAllUsers= async(req, res) => {
  let users= await User.find();
  if(users.length == 0){

    res.status(404).json({msg:'No Users found!'})
  }else
  {
res.status(200).json({msg:'Showing our users!',
  users:users
})

}
} 
//Registration // Signup

let Signup= async(req, res) => {
const checkUser= await User.findOne({email:req.body.email});
if(checkUser){

  res.json({msg:"User already exists."}).status(200);

}else{
bcrypt.hash(req.body.password, 15).then(async function(hash) {
    // Store hash in your password DB.
const newUser= new User({
    username:req.body.username,
    email:req.body.email,
    password: hash,
    profilePicture:req.body.profilePicture,
  });
 const addUser= await User.insertOne(newUser);
 if(addUser){

  res.json({msg:"User registered successfully.", user :addUser}).status(200);
  
}else{
  res.json({msg:"Failed to regiter user."}).status(400);

}
});

  

}


  

}

const userController ={getAllUsers,Signup}
export default userController;