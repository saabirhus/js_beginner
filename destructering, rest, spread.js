// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: "John Doe",
//   age: 30,
// };

// let { firstName, lastName, fullName } = person;
// console.log("his first name is " + firstName);
// console.log("his last name is " + lastName);
// console.log("his full name is " + fullName);

// const somaliGirlNames = [
//   "Amina",
//   "Hodan",
//   "Fartuun",
//   "Safiya",
//   "Halima",
//   "Maryam",
//   "Sahra",
//   "Leyla",
//   "Nasra",
//   "Khadra",
// ];

// let [first, second, third] = somaliGirlNames;
// console.log(first, second, third);

function multiplyAll(num1, num2, num3) {
  return num1 * num2 * num3;
}

let listOfNumbers = [1, 2, 3]; //spread (unboxing it)
console.log(multiplyAll(...listOfNumbers));
