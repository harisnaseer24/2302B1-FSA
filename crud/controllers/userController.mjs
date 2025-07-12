import User from "../models/user.mjs"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
// login 
let Login= async(req, res) => {

const checkUser= await User.findOne({email:req.body.email});

if(!checkUser){
  res.json({msg:"User does not exists. Please register first."}).status(200);

}else{
  const match = await bcrypt.compare(req.body.password, checkUser.password);

    if(match) {
      const token= await jwt.sign({email:checkUser.email,role:checkUser.role},process.env.JWT_SECRET,{ expiresIn: '2h'})

      res.json({msg:"User Logged in successfully.", user :checkUser,token:token}).status(200);
    }

else{
  res.json({msg:"Invalid Credentials."}).status(400);

}
};

}


//auth middleware
    //through Authorization headers bearer
    const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'Authorization token missing or malformed' });
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Optionally attach decoded data to request for downstream use
    req.user = decoded;
    console.log(decoded)
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: 'Invalid or expired token' });
  }
};






const userController ={getAllUsers,Signup, Login,auth}
export default userController;