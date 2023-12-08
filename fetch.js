//API calling
fetch("https://api.publicapis.org/entries")
.then((res)=>res.json())
.then((data)=>console.log(data))
.then((err)=>console.log(err));