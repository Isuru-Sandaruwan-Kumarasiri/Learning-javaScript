// const { reject } = require("async");
// const { resolve } = require("path");

// const printHello=(name)=>{
//     console.log("Hello"+name);
// }
// printHello("isuru");


// const add =(num1,num2)=>num1+num2;
// console.log(add(5,3));//no need to return keyword


//call back
const callBack=(resolve,reject)=>{//argument variable are not specify in this
    resolve("Resolved");
};
const getData=new Promise(callBack);
getData.then((value)=>console.log(value));
