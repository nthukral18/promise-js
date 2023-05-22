function abc(num1 , num2){
    return new Promise((res,rej)=>{
        if(num1>num2){
            res (`${num1} is greater`);
        }
        else if(num1 < num2){
            res(`${num2} is greater`);
        }
        else {
            rej ("both are equal");
        }
    })
}
abc(20,45)
 .then((msg)=>{
    console.log(msg);
 })
 .catch((err)=>{
    console.log(err);
 })