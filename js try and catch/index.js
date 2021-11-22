
try{
    qlert('this is a test');	
    }
    catch(err){
        console.log('something went wrong!')
    // 	console.log(err.message);
    }
    
    qlert('this is a test');	
    
    //object reference 
    
    
    
    
    //arrow functions
    
    
// object reference


let user = {
	name: 'ashish',
	email: 'ashish@gmail.com',
	address: 'New Delhi', 
	website: 'codekaro.in',
	welcome : function(){
		return ("welcome " + this.email);
	}
}

console.log(user.welcome())


// try{
// 	console.log(user.welcome())
// }
// catch(err){
// 	console.log(err.message)
// }


// arrow function

let name = 'ashish';
function demoFunction(name){
	return 'this is a function ' + name;
}

function demo1(num){
	return 5+num;
}
console.log(demoFunction(name));


// arrow function

arrowFunction = (name) => {
	return 'this is an arrow function ' + name;
}

demo = (num) =>5+num;

let num = 10
console.log(demo(num))
console.log(demo1(num))


    