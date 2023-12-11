

const callback=(resolve,reject)=>{
    reject("rejected.....!!!");
}
const getData=new Promise(callback);

getData
  .then((value)=>console.log(value))
    .catch((err)=>console.log(err))