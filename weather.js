import readline from 'readline/promises'

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const apikey=''
const Baseurl=''

const get_Weather= async (city)=>{
    const url=`${apikey} ${Baseurl}`

    try {
       const responce=await fetch(url)
        if (!responce.ok) {
            throw error("please try agin")     
        }
        const weatherdata=await responce.json()
        console.log(`${weatherdata.city}`)
    } catch (error) {
        console.log("please fetch api again")
    }
}

const city=rl.question("Enter the city : ")
await get_Weather(city)
rl.close()


