// let listOfNumbers = [1, 3, 20, 4, 5, 6, 98];
// let listOfNames = ["Alice", "Bob", "Charlie"];
// console.log(listOfNames[0]);

// let person = {
//   firstName: "Ali",
//   lastName: "Kafi",
//   age: 25,
// };

// console.log(person.firstName);
//1. add
//2. remove
//3. update
//4. add from front
//5. remove from front

//index
//list of things
// Creating a new map to store months and earned money
let earningsOf2020 = new Map();

//adding entries one by one
earningsOf2020.set("January", 1200);
earningsOf2020.set("February", 1500);
earningsOf2020.set("March", 1800);
earningsOf2020.set("April", 1300);
earningsOf2020.set("May", 2000);
earningsOf2020.set("June", 1700);
earningsOf2020.set("July", 1600);
earningsOf2020.set("August", 2100);
earningsOf2020.set("September", 1900);
earningsOf2020.set("October", 1800);
earningsOf2020.set("November", 3200);
earningsOf2020.set("December", 2400);

if (earningsOf2020.has("January")) {
  console.log("Earnings in January:", earningsOf2020.get("January"));
} else {
  console.log("No earnings in January");
}
