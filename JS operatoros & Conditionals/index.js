// operaters, loops conditionals
// + -> addition
// - => sub 
// * => multiplication
// / => division
// % => reminder
// = => Assignment Operator

// comparison operators
// < => less than
// > => greater than
// >=
// <=
// == 
// ===
let num = 5;


console.log(num % num);

// conditionals

let age = 78;
if(age >= 60){
	console.log('Senior citizen');
	console.log('test');
}
else if(age >=18)
	console.log('Not Minor' );

else
	console.log('Minor');

// Concept of strictly equals
    let age = 18;
    console.log(typeof(age))
    // toss the coin problem
    if(age === 18){
        console.log('Age is strictly 18');
    }
    else if (age == '18')
        console.log('Age is 18');
    else
        console.log('Age is not 18');

// toss coin problem solution

let toss = Math.floor(Math.random()*2);
if(toss == 1)
	console.log('heads');
else
	console.log('tails');

// logical operators
let name = 'ashish';
let age = 34;

if(name == 'ashish' || age == 24)
	console.log('Ashish Shukla');
else
	console.log('Some one else');


// switch 
let semester = parseInt(prompt('enter Semester')) 

switch(semester)
{
	case 1:
	console.log('Semester 1');
	break;
	case 2:
		
	console.log('Semester 2');
	break;
	case 3:
		
	console.log('Semester 3');
	break;
		
	case 4:
	console.log('Semester 4');
	break;
		
	default:
		console.log('Error');
		
}

// for loop
for (let i=1 ; i<=30; i++){
	if(i%2 == 1){
		console.log(i)
	}
}

// number guessing game


// random number guessing game
// 1. random number
// 2. Point System
// 3. chance
let score = 0;
let num = Math.floor(Math.random()*2);
console.log(num);

for (let i=0; i<=2; i++){
	let guess = parseInt(prompt('Guess The Number'));	
	if(num == guess){
	console.log('Awesome, You have guessed the right number');
	if(i == 1){
		score = 100
		
		
	}
	else if(i == 2){
		score = 50
		
		
	}
		
	else if(i == 3){
		score = 25
		
		
	}
	
}

}
console.log("Score: " + score)

