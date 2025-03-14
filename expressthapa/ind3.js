// formsub
import express from 'express'

import { PORT } from './env.js'

import {fileURLToPath} from 'url'

import path from 'path'

const app=express()

const dir_Name=path.dirname(fileURLToPath(import.meta.url))

const static_Data=path.join(dir_Name,'public')

app.use(express.static(static_Data))
app.use(express.urlencoded({extended:true}))

// app.get('/contact',(req,res)=>{
//     console.log(req.query)
//     return res.redirect('/')
// })

app.post('/contact',(req,res)=>{
    // req.body is use to save data
    console.log(req.body)
    // redirect use redirect file in open page
    return res.redirect('/')
})

app.use((req,res)=>{
    
    // return res.status(404).send("Page not found")

    return res.status(404).sendFile(path.join(import.meta.dirname,'views','404.html'))
})

app.listen(PORT,()=>{
    console.log(`server is ${PORT}`)
})