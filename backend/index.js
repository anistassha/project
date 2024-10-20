const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://nastushakozak62598:anistassha@cluster0.hlcunpf.mongodb.net/Route");

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

const Route = mongoose.model("Route",{
    id:{
        type: Number,
        required: true,
    },
    city_from:{
        type: String,
        required: true,
    },
    city_to:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    avilable:{
        type: Boolean,
        default: true,
    },
})

app.post('/addroute',async (req,res)=>{
    let routes = await Route.find({});
    let id;
    if(routes.length > 0) {
        let last_route_array = routes.slice(-1);
        let last_route = last_route_array[0];
        id = last_route.id+1;
    }
    else {
        id = 1;
    }
    const route = new Route({
        id: id,
        city_from: req.body.city_from,
        city_to: req.body.city_to,
        date: req.body.date,
        time: req.body.time,
    })
    console.log(route);
    await route.save();
    console.log("Saved");
    res.json({
        success: true,
        city_from: req.body.city_from
    })
})

app.post('/removeroute', async (req,res)=>{
    await Route.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        city_from: req.body.city_from
    })
})

app.get('/allroutes', async (req,res)=>{
    let routes = await Route.find({});
    console.log("All Products Fetched");
    res.send(routes);
})

const Users = mongoose.model('Users', {
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

app.post('/signup', async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false,errors:"Введённый email уже используется"})
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})
})

app.post('/login', async(req,res) =>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Неправильный пароль"});
        }
    }
    else{
        res.json({success:false,errors:"Неправильный email"})
    }
})

const fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Для бронирования мест необходимо пройти авторизацию"});
    }
    else {
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Пройдите аутентификацию"})
        }
    }
}

app.post('/addtocart',fetchUser, async (req,res)=>{
    console.log("Добавлено",req.body.routeId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.routeId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("Удалено",req.body.routeId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.routeId]>0)
    userData.cartData[req.body.routeId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("Get Cart");
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if(!error) {
        console.log("Server Running on Port "+port)
    }
    else {
        console.log("Error : "+error)
    }
})