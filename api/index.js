const express=require('express');
const app= express();
const cors= require('cors');
const mongoose=require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User= require('./models/user.js');
require('dotenv').config()

const bcyptSalt=await 'bcrypt.genSalt(10)';
const jwtSecret= 'jghtr5edfhnbvv654ef';

app.use(express.json());

app.use(cors({
    credential: true,
    origin: 'http://localhost:5173/',
}));
//console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get('/test',(req,res)=>{
    res.json('test ok');
});

app.post('/register',async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        const UserDoc= await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcrptSalt),
        })
        res.json({UserDoc});
    }
    catch(e){
        res.status(401).json(e);
    }
    
});
app.post('/login',async (req,res)=>{
    const{email,password}= req.body;
    const UserDoc = await User.findOne({email});
    if(UserDoc){
        const passOk= bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            jwt.sign({email:userDoc.email,id:userDoc._id}, jwtSecret, {}, (err,token) => {
                if(err)throw err;
                res.cookie('token', token).json('pass Ok');

            });   
        }
        else{
            res.status(401).json('pass not Ok');
        }
    }
    else{
        res.json('not found');
    }
})

app.listen(3000);

//wJc9qzdPBSjFXk8D
//(61.12.70.61) ip address
//mongodb+srv://booking:wJc9qzdPBSjFXk8D@cluster0.lwswece.mongodb.net/
//Click on "View" and open "Command Palette."
//Search "MongoDB: Connect" on the Command Palette and click on "Connect with Connection String."