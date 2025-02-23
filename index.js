const http=require('http')

const express=require('express')

const app=express()

// midlewere use express
app.use(express.json())

const todo=[]

// post
app.post('/todos',(req,res)=>{
    todo.push({...req.body,ischecked:true,id:todo.length+1})
    return res.json({message:"success full add"})
})

// delete 
app.delete('/todos/:id',(req,res)=>{
    const fillto=todo.filter(todo=>todo.id !== id)
    return res.json({message:"success full delete"})
})


// get id
app.get('/todo/:id',(req,res)=>{
    const {id}=req.params
    let serarch=todo.filter(todo=>todo.id==id)
    return res.json({serarch})
})

// update
app.patch('/todo/:id',(req,res)=>{
    const {id}=req.params

    const index=todo.findIndex(todo=>todo.id==id)

    todo[index]={...todo[index],...req.body}

    return res.json({message:"sucessful patch"})
})

// simple get
app.get('/todos',(req,res)=>{
    let publick=todo.filter(todo=>!todo.dec)
    return res.json({publick})
})


app.get('/',(req,res)=>{
    return res.json({message:"empty"})
})

const TSerever=http.createServer(app)

TSerever.listen(3000,()=>{
    console.log('successful create server')
})