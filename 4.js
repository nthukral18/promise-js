import axios from "axios"
const githubUsers = ["TPAteeq","darkRose173","nthukral18","sailaja15","Abdul535","aniruddhamaiti83","Novicecoder17"]

githubUsers.forEach(ele =>{
    axios.get(`https://api.github.com/users/${ele}`)
        .then(res=>{
            let obj = {}
             obj.followers = res.data.followers
             obj.following = res.data.following
             obj.name = res.data.name
            console.log(obj);
            
        })
    
        .catch((err) =>{
            console.log(err);
        })
    })
