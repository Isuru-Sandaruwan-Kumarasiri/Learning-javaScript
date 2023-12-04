// String
let str="Hellow world";
console.log(str)

// Lenght
let mod_str=str.length;
console.log(mod_str)

// indexwise
let mod_str2=str.charAt(0);
console.log(mod_str2);

// character code
let mod_str3=str.charCodeAt(0);
console.log(mod_str3);

//Number rational points
let num=1000;
console.log(num.toFixed(2))

//trycatch
function divider(num1,num2){
    return num1/num2;
}
try {
    let out =dividerr(10,0.01);
    console.log(out);
} catch (error) {
    console.log("an error occured");
}


