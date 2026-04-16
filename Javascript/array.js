// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }; 
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);


// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);


// let mixedArray = [1, "Hello", true, null, { name: "Alice" }, [1, 2, 3]];
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);     
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);
// console.log(mixedArray[5]);

// let newarray = [10, 20, 30, 40, 50];
// let squardarray = newarray.map(num => num * num);
// console.log(squardarray); 

// function greet(){
//     console.log("Hello, World!");
// }
// greet();

// normal function
function multiply(a, b){
    return a * b;
}
console.log(multiply(5,10));
// arrow function
let add =(a,b) => a+b;
console.log(add(2,4));

let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));

//function expression
let divide = function(a,b) {
    return a / b;
}
console.log(divide(10,2));

// arrow function with no parameters
let sayHello = () => console.log("Hello!");
sayHello();

//arrow function with one parameter
let square = x => x * x;
console.log(square(5));

//arrow function  
const add= (a,b) => a+b;
console.log(add(3,7));

//arrow function with no parameters
const greetUser = (name) => `Hello, ${name}!`;
console.log(greetUser("Alice"));
greetUser("Bob");
 