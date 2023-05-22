function abc(age){
    console.log("wtf you dont know your age?")
    return new Promise((res,rej)=>{
        if(age >= 18){
            res (`you are fuckin adult`);
        }
        
        else {
            rej ("u still a kid");
        }
    })
}
console.log("welcome ")
abc(17)
 .then((msg)=>{
    console.log(msg);
 })
 .catch((err)=>{
    console.log(err);
 })
 console.log("get lost");
