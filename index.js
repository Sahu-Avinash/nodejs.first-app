// console.log("hello world");
// console.log(200/6);
// const http = require("http");
// import http from "http";
// const gfname = require("./features");
// import gfname from "./features.js"
// import * as myobj from "./features.js" ;
// console.log(myobj.default);
// import {gfname1,gfname3} from "./features.js";
// console.log(gfname);
// import { generateLovePercent } from "./features.js";
// console.log(generateLovePercent());
// import fs from "fs";


// const home = fs.readFileSync("./index.html");
// import path from "path";
// console.log(path.dirname ("/home/random/index.html"))
   

// const server = http.createServer((req,res)=>
// {
//     if(req.url==="/about")
//     {
//         res.end("<h1> About page is rendered</h1>");
//     }

//     else if(req.url==="/")
//     {
       
//         res.end("home");
//      }
       
    
//     else{
//         res.end("<h1> page not found</h1>");
//     }

// });

// server.listen(30011,()=>{
//     console.log("server is working");
// });
// import express from "express";
// import fs from "fs";
// import path from "path";
// import cookieParser from "cookie-parser";
// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";

// mongoose.connect("mongodb://localhost:27017",{
//     dbName: "backend",
// }).then(()=> console.log("database connected"))
// .catch((e)=> console.log(e));


// const usersSchema = new mongoose.Schema({
//     name: {type :'string'},
//     email : {type : 'string'},
//     password:{type: 'string'},
// });

// const User = mongoose.model("User", usersSchema);

// const app = express();


// // using middlewares
// app.use(express.static(path.join(path.resolve(),"public")));
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());


// // setting up view engine
// app.set("view engine","ejs");

// const isAuthenticated= async (req,res,next)=>
// {
//     const token = req.cookies.token;
//     if(token)
//     {
//       const decoded=  jwt.verify(token,"dcvshdvchsch");
//     //   console.log(decoded);
//     req.user = await User.findById(decoded._id);
//        next();
//     }
//     else
//     {
//         res.render("login");
//     }
// }

// app.get("/",isAuthenticated,(req,res)=>{
    // console.log(req.user);
    // res.send("hii");
    // res.json(
    //     {
    //         sucesses : true,
    //         products:[],

    //     }
    // );
    //    res.sendFile("index.html");
    // console.log(path.resolve());
//     const pathLocation = path.resolve();
//   res.sendFile(path.join(pathLocation,"./index.html"));
  
    //  const pathLocation = path.resolve();
    //  res.render("index",{name: "Avinash Sahu"})
    // res.render("login")

    
    // res.render("login")
    // const token = req.cookies.token;

    // if(token)
    // {
    //    res.render("logout");
    // }
    // else
    // {
    //     res.render("login")
    // }
//      res.render("logout");
    
// });

// app.get("/register",(req,res)=>{
     
//      res.render("register");
    
// });


// app.post("/login",async(req,res)=>
// {
//     // console.log(req.body);
//     const{name,email,password} = req.body;
//     let user = await User.findOne({email})
//     if(!user)
//     {
//     //   return  console.log("register first");
//       return res.redirect("/register");
//     }
//    user =  await User.create({name,email,password})

//    const token = jwt.sign({_id:user._id},"dcvshdvchsch");
 

//     res.cookie("token",token,{
//         httpOnly:true, expires: new Date(Date.now()+60*1000)

//     });
//     res.redirect("/");
// })

// app.post("/register",async(req,res)=>
// {
//     // console.log(req.body);
//     const{name,email,password} = req.body;
//     let user = await User.findOne({email})
//     if(user)
//     {
//     //   return  console.log("register first");
//       return res.redirect("/login");
//     }
//    user =  await User.create({name,email,password})

//    const token = jwt.sign({_id:user._id},"dcvshdvchsch");
 

//     res.cookie("token",token,{
//         httpOnly:true, expires: new Date(Date.now()+60*1000)

//     });
//     res.redirect("/");
// })

// app.get("/logout",(req,res)=>
// {
//     res.cookie("token",null,{
//         httpOnly:true, expires: new Date(Date.now())

//     });
//     res.redirect("/");
// })

// app.get("/add",(req,res)=>{
    
//     Message.create({name:"Avi",email:"sample@gmail.com"})
//     res.send("nice");
    
// });
// app.get("/success",(req,res)=>
// {
//     res.render("success");
// });


// app.post("/contact",async (req,res)=>
// {
// //    console.log(req.body)
//    const {name,email}= req.body; // destructuring
// //    const messagedata={name: req.body.name, email: req.body.email};
//   await Message.create({name,email});
//   res.redirect("/success");

// });

// app.get("/users",(req,res)=>
// {
//    res.json({
//     users,
//    })

   
// })


// app.listen(3005,()=>
// {
//     console.log("server is working");
// })


import express from "express";
import fs from "fs";
import path from "path";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

mongoose.connect("mongodb://localhost:27017",{
    dbName: "backend",
}).then(()=> console.log("database connected"))
.catch((e)=> console.log(e));


const usersSchema = new mongoose.Schema({
    name: {type :'string'},
    email : {type : 'string'},
    password:{type: 'string'},
});

const User = mongoose.model("User", usersSchema);

const app = express();



app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.set("view engine","ejs");

const isAuthenticated= async (req,res,next)=>
{
    const token = req.cookies.token;
    if(token)
    {
      const decoded=  jwt.verify(token,"dcvshdvchsch");
   
    req.user = await User.findById(decoded._id);
       next();
    }
    else
    {
        res.render("login");
    }
}

app.get("/",isAuthenticated,(req,res)=>{

     res.render("logout",{name:req.user.name});
    
});

app.get("/register",(req,res)=>{
     
     res.render("register");
    
});
app.post("/register",async(req,res)=>
{
   
    const{name,email,password} = req.body;
    let user = await User.findOne({email})
    if(user)
    {
      return res.redirect("/login");
    }
    const hashedPassword = await bcrypt.hash(password,10);
   user =  await User.create({name,email,password:hashedPassword})

   const token = jwt.sign({_id:user._id},"dcvshdvchsch");
 

    res.cookie("token",token,{
        httpOnly:true, expires: new Date(Date.now()+60*1000)

    });
    res.redirect("/");
})

app.get("/login",(req,res)=>
{
    res.render("login");
})
app.post("/login",async(req,res)=>
{
   
    const{email,password} = req.body;
    let user = await User.findOne({email})
    if(!user)
    {
      return res.redirect("/register");
    }
     const isMatch = await  bcrypt.compare(password,user.password);
     if(!isMatch)
     {
        return res.render("login",{email,message:"incorrect password"});
     }


   const token = jwt.sign({_id:user._id},"dcvshdvchsch");
 

    res.cookie("token",token,{
        httpOnly:true, expires: new Date(Date.now()+60*1000)

    });
    res.redirect("/");

})



app.get("/logout",(req,res)=>
{
    res.cookie("token",null,{
        httpOnly:true, expires: new Date(Date.now())

    });
    res.redirect("/");
})

app.listen(3005,()=>
{
    console.log("server is working");
})