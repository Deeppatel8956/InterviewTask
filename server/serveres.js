const http=require('http')
const fs=require('fs')


const myServer=http.createServer((req,res)=>{
    const log=`${req.url}`
    fs.writeFile('./text.txt',log,()=>{
        switch (req.url) {
            case '/':
                res.end('hello')
                break;
            case '/about':res.end('hello adout')       
            default:
                break;
        }
    })
})

myServer.listen(8000,()=>console.log('done'))


// <!-- server --!>
// Node.js is an open-source and cross-platform runtime environment for executing JavaScript code outside a browser. You need to remember that NodeJS is not a framework, and it’s not a programming language. Node.js is mostly used in server-side programming. In this article, we will discuss how to make a web server using node.js.

// Creating Web Servers Using NodeJS: There are mainly two ways as follows.

// Table of Content

// Using Built-in HTTP module
// Using Express Module
// Using Built-in HTTP module
// HTTP and HTTPS, these two inbuilt modules are used to create a simple server. The HTTPS module provides the feature of the encryption of communication with the help of the secure layer feature of this module. Whereas the HTTP module doesn’t provide the encryption of the data.

// Approach
// Building a simple Node.js web server with the http module by using http.createServer(), which listens for requests, sends responses, and is ideal for understanding core server functionality.

// Project structure: It will look like this.