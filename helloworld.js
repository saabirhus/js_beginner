// console.log("Hello world, welcome to JavaScript by Saabir")

// calculate the take salary if the salary is 200 and there is a flat tax of 10
// var salary = 200;
// var tax = 10;
// var takeHome = salary - tax;
// console.log(salary)
// console.log(takeHome)
// my name is saabir

// var name;
// name = "Thomas";
// console.log(name, name, name);
// var dob = 100;
// var total = salary * 20;
// console.log(total);

// var theAddressOfTheLadyNextDoor = "77 Acton Lane";

// var name = "Saabir";
// console.log(typeof name);

// var numberOfChildren = 6;
// console.log(typeof numberOfChildren);

// var isMarried = true;
// console.log(typeof isMarried);

// var price = 25;
// var cost = 12;
// var quantitySold = 879;
// var tax = 6;

// var profit = (price - cost - tax) * quantitySold;
// console.log(profit)

// var age = 15;
// if (age <= 4) {
//   console.log("Go to Nursery");
// } else if (age > 4 && age <= 11) {
//   console.log("Go to Primary School");
// } else if (age > 11 && age <= 16) {
//   console.log("Go to Secondary School");
// } else if (age > 16 && age <= 18) {
//   console.log("Go to Sixth Form");
// } else {
//   console.log("Go to University or Work");
// }

// let num = 5;
// increment operation
// num++;
//decrement operation
//num--
//console.log(num);

//is 5 equal to 5 output:true"
//console.log(5==5)
//"is 1 equal to 2 output:false"
// console.log(1 == 2);
//"is 1 greater than or equal to 1

// console.log(1 === "2");

// 1                    2
// value 1              value 2
// data type integer    data type string

//Logical Operators

// == means equal to
// === means equal value AND equal type
// != means not equal to
// !== means not equal value OR not equal type
// > means greater than
// < means less than
// >= means greater than or equal to
// <= means less than or equal to

// var age = 30; global scope

// {
//   var age = 15;   local scope
//   console.log(age);
// }

// let customerAge = 18;

// if (customerAge >= 18 && customerAge < 65) {
//   console.log("You're an adult, you can go in and pay");
// } else if (customerAge < 18) {
//   console.log("You're a child go home");
// } else if (customerAge > 65) {
//   console.log("You're a senior, go in and don't pay");
// }

// let selectFruit = "Mango";

// switch (selectFruit) {
//   case "Mango":
//     console.log("Mango is nice, enjoy it");
//     break;
//   case "Banana":
//     console.log("Somalia has bananas");
//     break;
//   case "Orange":
//     console.log("Oranges are available in Cuba");
//     break;
//   default:
//     console.log("Eat what you want");
//     break;
// }

//operation

// let num1 = 20;
// let num2 = 30;
// let sum = num1 + num2;

// console.log(sum);

// let students = ["Ahmed", "Mohammed", "Ali", "Maryam", "Hidaya"];
// console.log(students.indexOf("Maryam"));
// console.log(students.)
// // students.push("Farah"); push adds an element to the end of the array
// // students.pop(); pop removes the element at the end of the array
// // students.reverse(); reverse changes the order of the array to its inverse
// // let whichGotRemoved = students.shift() shift removes an element from an array and returns it
// console.log(students);

// students.forEach(function (theName) {
//   console.log(theName);
// });

// let newArray = students.map(function (theName) {
//   return theName + " is from Somalia";
// }); //creating an array that "maps" the names of the student which creates a new array from calling a function for every array element

// console.log(newArray);

// function checkWordLength(word) {
//   return word.length > 6;
// }

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "pretend",
// ];
// const result = words.filter(checkWordLength);
// console.log(result);

// const payments = [20, 30, 50, 10];
// const addTogether = function (accumulator, currentValue) {
//   return accumulator + currentValue;
// };

// console.log(payments.reduce(addTogether));

// let firstName = "Saabir";
// let lastName = "Hussein";
// let fullName = firstName.concat(" ").concat(lastName);
// console.log(fullName);

//for loop

// for (let i = 0; i < 100; i++) {
//   console.log(i + " hello");
// }
// console.log("");
// for (let i = 20; i > 0; i--) {
//   console.log("Hello");
// }

//while loop

// let i = 0;
// while (i < 20) {
//   console.log("Hello");
//   i++;
// }

//do..while loop

// let i = 50;
// do {
//   console.log("Hello");
//   i++;
// } while (i < 20);

//for..in loop

const car = {
  fName: "John",
  lName: "Doe",
  age: 25,
};

for (let key in person) {
  console.log(person[key]);
}

//for..off loop



