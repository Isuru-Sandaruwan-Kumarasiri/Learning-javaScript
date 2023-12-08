function getDate(){
    return new Date().toDateString();
}
//module.exports=getDate();//

function getRandomNum(){
    return Math.random();
}
module.exports={getDate,getRandomNum}