async function addTodo(){
    let res=await fetch('http://locallhost/8000',{
        method:"POST",
        body:JSON.stringify({
          "title":"front-end",
          "dec":"dec1"       
        }),
        headers:{
            "content-Type":"application.json"
        }
    }
    )
    let json=await res.json()
    console.log(json)
}

addTodo()

// async function getTodo(){
//     let res=await fetch('http://locallhost/8000',{
//         method:"GET",
//         body:JSON.stringify({
//           "title":"front-end",
//           "dec":"dec1"       
//         }),
//         headers:{
//             "content-Type":"application.json"
//         }
//     }
//     )
//     let json=await res.json()
//     console.log(json)
// }
// getTodo()