import axios from "axios"
import fs from "fs"
axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((res)=>{
    
    let filteredData = res.data.filter((ele)=> ele.completed === true )
    
    
    fs.writeFile("completed.json", JSON.stringify(filteredData),(err)=>{
                     if(err) console.log(err)
                     console.log("completed task added");
        //          })
  })

 let filteredData2 = res.data.filter((ele)=> ele.completed === false )
 fs.writeFile("pending.json", JSON.stringify(filteredData2),(err)=>{
    if(err) console.log(err)
     console.log("pending task added");
          })
        })
        
 



  .catch((err)=>{
    console.log(err);
  })