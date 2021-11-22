// let name = 'ashish';
// let age = 24;
// let isAlive = false;
// let hobby = ['swimming', 'dancing', 'acting', 'coding']
// let email;
// // console.log(typeof(name));
// // console.log(typeof age);
// // console.log(typeof isAlive);
// // console.log(typeof hobby);
// // console.log(typeof email);

// // loops and conditionals
// if(age>17 || isAlive === true){
//     console.log('not minor')
// }
// else{
//     console.log('minor')
// }
// hobby.splice(1,1, 'teaching', 'music')
// // hobby.push('xyz');

// console.log(hobby)


let date = new Date;
// console.log(date.getMonth())
// console.log(date.getDate() + " " + date.getMonth()  + " " + date.getFullYear())
// const dateFormat = {year: 'numeric', month:'long', day: 'numeric', weekday: 'long',}
// console.log(date.toLocaleDateString('ar-EG',dateFormat));
// let hour = date.getHours()
// if(hour>= 5 && hour <=12){
//    c
// }
// else if (hour>12 && hour <16){
//     console.log('good afternoon')
// }
// else if (hour>16 && hour <22){
//     console.log('good evening')
// }
// else{
//     console.log('good night')
// }
const users =[
    {name: 'ashish', email:'ashish@gmail.com'},
    {name: 'tanzeela', email:'tanzeela@gmail.com'},
    {name: 'satya', email:'satya@gmail.com'},
    {name: 'prabhakar'},
    {name: 'akshay', email:'akshay@gmail.com'},
    {name: 'sharyu', email:'sharyu@gmail.com'},
    {name: 'deepali', email:'deepali@gmail.com'},
]

for(let i=0;i<users.length; i++){
    console.log(users[i].email || 'email is not available!')
}
