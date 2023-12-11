document.getElementById("btn").addEventListener("click",()=>{
    const text =document.getElementById("h1");
    if (text.style.color=="red"){
        text.style.color="black";
    }else{
        text.style.color="red";
    }
});