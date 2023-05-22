import axios from "axios"
import readLineSync from "readline-sync"
const num1 = readLineSync.questionInt("enter the num");
const num2 = readLineSync.questionInt("enter the num");

function hitApi(num1, num2) {
    return axios.get(`https://26fe-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
}

hitApi(num1, num2)
    .then((res) => {
        const sum1 = res.data.data
        console.log("the sum is ", sum1);
        const num3 = readLineSync.questionInt("enter the num");
        return hitApi(sum1, num3);
    })
    .then((res) => {
        const sum2 = res.data.data;
        console.log("the sum is ", sum2);
        const num4 = readLineSync.questionInt("enter the num");
        return hitApi(sum2, num4);

    })
    .then((res => {
        const finalSum = res.data.data;
        console.log(finalSum);
    }))
    .catch(err => {
        console.log(err);
    })

