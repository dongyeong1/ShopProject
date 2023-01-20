// const http =require('http');

const express=require('express')
const postRouter=require('./routes/post')
const db=require('./models')
db.sequelize.sync()
.then(()=>{
    console.log('db연결성공')
})
.catch((err)=>{
console.log(err)
})
const app=express()
// const server=http.createServer((req,res)=>{
// console.log(req.url,req.method)
// res.end('hello node')

app.use('/post',postRouter)

app.get('/',(req,res)=>{

})

app.listen(3065,()=>{
    console.log('서버실행중')
})