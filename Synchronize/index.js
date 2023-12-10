//monwahri appliction or images or file ekasare load wenwanm eka introduce karnwa asynchronized
//awastha 2kdi load wenwanm ekat kiyanw syncronized

function getData(){
    fetch("https://www.thunderclient.com/welcome").then((res)=>
    console.log("T2 finished")
    );
    
}
console.log("Network request start");//T1
getData();//T2
console.log("Network request stop");//T3


const axios=require("axios");

function getData(){
    axios("https://www.thunderclient.com/welcome").then((res)=>
    console.log("T2 finished")
    );
    
}
console.log("Network request start");//T1
getData();//T2
console.log("Network request stop");//T3
