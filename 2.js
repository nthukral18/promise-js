import readLineSync, { question } from "readline-sync"
import axios from "axios"
import {Spinner} from "cli-spinner";
import chalk from "chalk";

function main(){
    const username = readLineSync.question(chalk.yellow("Enter your username : "));
     console.log(username);
     
var spinner = new Spinner('processing.. %s');
spinner.setSpinnerString('|/-\\');
spinner.start();
    setTimeout(()=>{
    axios.get(`https://api.github.com/users/${username}`)
    .then((res)=>{
        spinner.stop("clean")
      console.log(chalk.greenBright(res.data.followers));
    })
    .catch((err)=>{
        spinner.stop("clean")
      console.log(err);
    })
},5000)
}

main()