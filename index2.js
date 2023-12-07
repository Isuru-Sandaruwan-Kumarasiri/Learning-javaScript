// JASON (this is used to store data)
let obj={name:"janith",school:"abs"};
console.log(JSON.stringify(obj));



// convert JSON to code
try {
    let obj2='{"name":"janith","school":"abs"}';
console.log(JSON.parse(obj2));
} catch (error) {
    console.log("an error occoured");
}
