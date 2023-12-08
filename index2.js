// JASON (this is used to store data)
let obj={name:"janith",school:"abs"};
console.log(JSON.stringify(obj));



// API convert  to jscode
try {
    let obj2='{"name":"janith","school":"abs"}';
console.log(JSON.parse(obj2));
} catch (error) {
    console.log("an error occoured");
}
//api mean ,sever aken data transfer karnne request akakin,data transfer wenne text base data walin.me requwest ekakt tma api kiyanne