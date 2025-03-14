// import express from 'express'

// const app =express()

// app.get('/',(req,res)=>{
//     return res.send("hello")
// })

// app.get('/about',(req,res)=>{
//     return res.send("hello about")
// })

// app.get('/contact',(req,res)=>{
//     return res.send("hello conatct")
// })

// const PORT=process.env.PORT

// app.listen(PORT,()=>{
//     console.log(`server listen ${PORT}`)
// })



import express from 'express';
import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// file access like html,css and js 
// app.use(express.static('public'))

const responce=await fetch('https://jsonplaceholder.typicode.com/todos/1')
const jon=await responce.json()
console.log(jon)


// 2nd way to access file like html,css and js url changes
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const static_Path=path.join(__dirname,"public")

app.use("/public",express.static(static_Path))
// Resolve the current directory

app.get('/', (req, res) => {
    // Construct the path to the 'index.html' file in the 'public' directory
    const homePath = path.join(__dirname, 'public', 'index.html');

    // Send the HTML file as the response
    res.sendFile(homePath);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





