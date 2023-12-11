const { rejects } = require("assert");
const { resolve } = require("path");

function divider(num1,num2){
    return new Promise((resolve,rejects)=>{
        if (num2==0){
            rejects("Can not devided by zero");

        }else{
            resolve(num1/num2);
        }
    });
}
divider(10,0)
  .then((val)=>console.log(val))
   .catch((err)=>console.log(err));