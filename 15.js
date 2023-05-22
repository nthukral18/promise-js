import axios from "axios"
import readLineSync from "readline-sync"

 function hitApi(num1,num2){
    return axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
 }
 async function main(){
try {
    const num1 = readLineSync.questionInt("enter the num");
    const num2 = readLineSync.questionInt("enter the num");
    const res = await hitApi(num1,num2)
     const sum = res.data.data;
     console.log("the first sum is",sum)
     const num3 = readLineSync.questionInt("enter the num");
     const res2 = await hitApi(sum,num3)
     const sum2 = res2.data.data;
     console.log("the second sum is", sum2);
     const num4 = readLineSync.questionInt("enter the num");
     const res3 = await hitApi(sum2,num4)
     const sum3 = res3.data.data;
     console.log("the final sum is ", sum3 );


 }
 catch(err){
     console.log(err);
 }
}
 main();