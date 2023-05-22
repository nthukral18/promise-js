import axios from "axios"
import readLineSync from "readline-sync"
const num1 = readLineSync.questionInt("enter the num");
const num2 = readLineSync.questionInt("enter the num");
// async function addition(num1,num2){
// try {
//     const res = await axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
//     console.log(res.data);

// }
// catch(err){
//     console.log(err);
// }
// }
// addition(num1,num2);

axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
    .then((res) => {
        const sum = res.data.data
        console.log("the sum of first 2 num is ", sum);
        const num3 = readLineSync.questionInt("enter the num");


        axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${sum}/${num3}`)
            .then((res) => {

                const sum2 = res.data.data
                console.log("the sum of first 3 num is ", sum2);
                const num4 = readLineSync.questionInt("enter the num");


                axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${sum2}/${num4}`)
                    .then((res) => {
                        const finalSum = res.data.data
                        console.log(finalSum);
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            })
            .catch((err) => {
                console.log(err);
            })
            .catch((err) => {
                console.log(err);
            })

    })

