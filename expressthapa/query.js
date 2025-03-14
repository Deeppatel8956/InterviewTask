import express from 'express'

import { PORT } from './env.js'
const app=express()


app.get('/',(req,res)=>{
    return res.end('get')
})

app.get('/product',(req,res)=>{
    console.log(req.query)
    return res.end(`User product is here ${req.query.search} and price ${req.query.price}`)
})

app.listen(PORT,()=>{
    console.log(`server is done ${PORT}`)
})
// queryparameter.js