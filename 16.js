import axios from "axios"
const sum = [];
function hitApi(num1,num2){
    return axios.get(`https://696c-49-205-242-51.ngrok.io/add/${num1}/${num2}`)
}

async function main(){
    try{
        for(var i = 0 , j = 5; i<= 5 , j <= 10; i++,j++){
            console.log(i,j)
            const res = await hitApi(i,j)
            console.log(res.data.data);
            sum.push(res.data.data);
        }
        console.log(sum);

    }
    catch(error){
        console.log(error);
    }
}
main()