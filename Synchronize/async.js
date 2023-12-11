async function getData(){
   try {
    console.log("Network request start");//T1
    await fetch("https://www.thunderclient.com/welcome");
    console.log("Network request stop");//T3

   } catch (error) {
    console.log("an error occured")
   }

    
}

getData();//T2
