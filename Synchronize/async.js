async function getData(){
    console.log("Network request start");//T1
    await fetch("https://www.thunderclient.com/welcome");
    console.log("Network request stop");//T3


    
}

getData();//T2
