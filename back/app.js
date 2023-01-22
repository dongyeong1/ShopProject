// const http =require('http');

const express=require('express')
const postRouter=require('./routes/post')
const userRouter=require('./routes/user')
const db=require('./models')
const app=express()
const cors=require('cors')
const passportConfig=require('./passport')
const cookieParser=require('cookie-parser')
const passport = require('passport')
const dotenv=require('dotenv')
const session = require("express-session");


db.sequelize.sync()
.then(()=>{
    console.log('db연결성공')
})
.catch((err)=>{
console.log(err)
})
// const server=http.createServer((req,res)=>{
// console.log(req.url,req.method)
// res.end('hello node')
passportConfig();
app.use(cors({
    origin:true,
    credentials:true,//쿠키를 같이전달하고싶으면
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//프론트에서 보낸데이터를 req.body에 넣어주는 역할
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:process.env.COOKIE_SECRET
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());
app.use(passport.session())

app.use('/post',postRouter)
app.use('/user',userRouter)

app.listen(3065,()=>{
    console.log('서버실행중')
})