import axios from "axios"

for(var i = 0 , j = 5; i <=5 ,j <= 10; i++ , j++){
console.log(i,j);
axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${i}/${j}`)
.then((res)=>{
    console.log(res.data.data);
    
  })
  .catch((err)=>{
    console.log(err);
  })
}
