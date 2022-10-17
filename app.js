
let myAge = 32;

console.log(myAge);

let numberOfRabbits = 2;

numberOfRabbits = (numberOfRabbits *3);

console.log(numberOfRabbits);

let bodmasExample = 3;

let num1 = 5;

let num2 = 6;

bodmasExample = (bodmasExample + num1 /num2);

console.log(bodmasExample);

let randomNumberGenerator = (Math.random() * 6);

console.log(randomNumberGenerator)

let myCountry = ("country");

console.log(myCountry);

let length = myCountry.length;

console.log(length);


//function changeToUpperCase(food){
//    return food.toUpperCase();
//}

function changeToLowerCase(food){
    return food.toLowerCase();
}

let favouriteFood = changeToLowerCase("favouritefood");

console.log(favouriteFood);


let fName = "Joe";
let age = "32";

let message = "Hello my name is " + fName + " and I am " + age + " years old.";
message += " " + "What is your name?";
console.log(message);



let firstName = "Joe";
let lastName = "Brittain";

let tLText = 
`Welcome ${firstName}, ${lastName}
How can I help you?`

console.log(tLText);