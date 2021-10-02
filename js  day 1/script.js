// datatypes
// numbers -> float 
// strings
// boolean 
// objects 
// underfined

let age =24.56;
let name = 'Ashish Shukla';
let isAlive = false;
let hobby = ['book reading', 'swimming', 'dancing', 23, false];
let users = {
    name:'ahsish kumar shukla',
    age: 24,
    email:'ashish@codekaro.in',
    hobby: ['book reading', 'swimming', 'dancing']
}


//typeof() -> checks datatype

// console.log(typeof(hobby));
// console.log(users.hobby);

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
console.log(hobby.length);

let num = Math.floor(Math.random()*1000); 
console.log(num);

function sqr(num){
    let sqr = num*num;
    // console.log(sqr);
    return sqr;
}
let number = 99;
let sqrResult = sqr(number)+2;
console.log(sqrResult)
