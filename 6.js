import axios from "axios"
console.time()
axios.get("https://26fe-49-205-242-51.ngrok.io/add/10/20")
.then((res)=>{
    console.log(res.data);
    console.timeEnd();
  })
  .catch((err)=>{
    console.log(err);
  })
