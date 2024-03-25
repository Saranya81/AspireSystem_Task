//Array Manipulation
const names=["Saran","Preetha","Lokesh","Ram","Kavi"];
console.log(names);
console.log(names.pop());
console.log(names.push("Brindha"));
console.log(names);
let arrlen=names.length;
console.log(arrlen);

// Map functions
console.log("-----------Map Function---------------");
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// convert a string to uppercase
function capitalize(str) {
  return str.toUpperCase();
}
const capitalizedFruits = fruits.map(capitalize);
console.log("Original Fruits: ", fruits);
console.log("Capitalized Fruits: ", capitalizedFruits);
console.log("--------------sortfunction---------------");
console.log(capitalizedFruits.sort());
console.log("--------------Reversefunction---------------");
console.log(capitalizedFruits.reverse());
console.log("----------Filter function--------------------")

const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to check if a number is greater than 5
function checkGreaterThanFive(number) {
  return number > 5;
}
const result = originalNumbers.filter(checkGreaterThanFive);
console.log("Numbers Greater Than 5: ",result);

console.log("-----------find function------------");
const students = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charu" },
    { id: 4, name: "David" },
    { id: 5, name: "hema" }
];

function findStudentByName(student) {
    return student.name === "Charu";
}
const charu = students.find(findStudentByName);

console.log("First Student Named Charu: ", charu);
console.log("\n");

console.log("-----------findIndex function------------");
function isDavid(student) {
    return student.name === "David";
}
const davidIndex = students.findIndex(isDavid);
console.log("Index of First Student Named David: ", davidIndex);
console.log("\n");

console.log("-----------setTimeout function------------");
function greet() {
    console.log('Hello, world!');
}
setTimeout(greet, 2000); 



