import axios from "axios"

// axios.get("https://jsonplaceholder.typicode.com/users")
//   .then((res)=>{
    
//     const userData = res.data.map(ele=> ele.username )
        
//     console.log(userData);
    
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
  
async function hitApi(){
try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const userData = res.data.map(ele=> ele.username )
        
   console.log(userData);
}
catch (error){
 console.log(error);
}
}
hitApi()