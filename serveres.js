
const http=require('http')

const express=require('express')

const app=express()

const user=require('./MOCK_DATA.json')

const PORT=8000

const fs=require('fs')

// middlewere
app.use(express.urlencoded({extended:false}))

// does not move next part
app.use((req,res,next)=>{
    console.log("hello")
})


// already move next part 
app.use((req,res,next)=>{
    console.log("hello")
    next()
})


app.use((req,res,next)=>{
    fs.appendFile('log.txt',`${new Date()}:${req.method}:${req.path}`,()=>{
        next()
    })
})

app.get('/users',(req,res)=>{
    return res.json(user)
})

app.get('/api/users',(req,res)=>{
    const html=`
    <ui>
    ${user.map((user)=>`<li>${user.first_name}</li>`)}
    </ui>
    `
    res.send(html)
})

app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    const use=user.find((user)=>user.id===id)
    return res.json(use)
})

app.post('/api/users',(req,res)=>{
    const body=req.body
    user.push({...body,id:user.length+1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(user),(err,data)=>{
        return res.json({status:"success",id:user.length})
    })
})

app.patch('/api/users',(req,res)=>{
    return res.json({status:"pending"})
})

app.delete('/api/users',(req,res)=>{
    return res.json({status:"pending"})
})
const dserver=http.createServer(app)

dserver.listen(8000,()=>console.log(`server create`))



