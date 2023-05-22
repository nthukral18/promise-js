import axios from "axios"
const githubUsers = ["TPAteeq","darkRose173","nthukral18","sailaja15","Abdul535","aniruddhamaiti83","Novicecoder17"]
var userData = [];
function hitGithub(username){
   return axios.get(`https://api.github.com/users/${username}`,{
        auth :{
            username : "nthukral18",
            password : "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"
        }
    })
}

const users = githubUsers.map((ele)=> hitGithub(ele))
Promise.all(users)
.then(res=>{
    
    res.forEach(ele=>{
        let obj = {}
             obj.followers = ele.data.followers
             obj.following = ele.data.following
             obj.name = ele.data.name
            userData.push(obj);
    })
    console.log(userData);
})
.catch ((err)=>{
    console.log(err);
})