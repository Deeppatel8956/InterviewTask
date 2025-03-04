import { readFile } from 'fs/promises'
import {createServer} from 'http'
import crypto from 'crypto'
import path from 'path'
import { writeFile } from 'fs/promises'

const port=3000

const DATA_FILE=path.join('data','links.json')

const loadlinks=async()=>{
    try {
        const data=await readFile(DATA_FILE,'utf-8')
        return JSON.parse(data)
    } catch (error) {
        if (error.code=='ENOENT') {
            await writeFile(DATA_FILE,JSON.stringify({}))
            return {}
        }
        throw error
    }
}

const saveLinks=async(links)=>{
    await writeFile(DATA_FILE,JSON.stringify(links))

}


const S_server=createServer(async(req,res)=>{
    if (req.method=='GET') {
        if (req.url=='/') {
            try {
                const data=await readFile(path.join('public','index.html'))
                res.writeHead(200,{'Content-Type':'text/html'});
              return  res.end(data)
            } catch (error) {
                res.writeHead(404,{'Content-Type': 'text/html'})
               return res.end("404 not found")
            }
        }else if (req.url=='/style.css') {
                try {
                    const data=await readFile(path.join('public','style.css'))
                    res.writeHead(200,{'Content-Type':'text/css'});
                   return res.end(data)
                } catch (error) {
                    res.writeHead(404,{'Content-Type': 'text/css'})
                    return res.end("404 not found")
                }
            }else if (req.url=='/links') {
                const links=await loadlinks()
                res.writeHead(404,{ 'Content-Type': 'application/json',})
               return res.end(JSON.stringify(links))
            }
    }

    if (req.method=="POST"&&req.url=='/shortlen') {
        const links=await loadlinks()
        let body=''
        console.log(body)
        res.on('data',(chunk)=>(
             body +=  chunk))

        res.on('end',async()=>{
            const {url , shortCode}=JSON.parse(body)
            if (!url) {
                res.writeHead(404,{ 'Content-Type': 'text/plain',})
              return  res.end('404 page not found')
            }
            const finalshortcode=shortCode||crypto.randomBytes(4).toString('hex')
            if (links[finalshortcode]) {
                res.writeHead(404,{ 'Content-Type': 'text/plain',})
               return res.end('404 page not found')
            }
            links[finalshortcode]=url
            await saveLinks(links)

            res.writeHead(404,{ 'Content-Type': 'application/json',})
            res.end(JSON.stringify({success:true,shortcode:finalshortcode}))
        })
    }


})

S_server.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})