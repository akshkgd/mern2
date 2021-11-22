// const fetchData = callback =>{
//     setTimeout(()=>{
//         callback('callback done!');
//     },2000);
// }
// //async
// setTimeout(()=>{
//     console.log('Hello World');
//     fetchData(data =>{
//         console.log(data);
//     });
// },2000);

// promise function
const fetchData = callback =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise done!');
        },2000);
    });
    return promise;
}
setTimeout(()=>{
    console.log('Hello World');
    fetchData().then(data =>{
        console.log(data);
    });
},2000);


//demo tasks
console.log('hello1');
console.log('hello2');
