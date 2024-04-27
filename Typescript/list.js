// Array of students
var studentList = [
    { name: "Charu", age: 18, grade: "A" },
    { name: "Arul", age: 19, grade: "B" },
    { name: "Saran", age: 17, grade: "C" },
    { name: "Preethi", age: 20, grade: "B" },
    { name: "Ram", age: 18, grade: "A" }
];
// Push function
function addStudent(name, age, grade) {
    studentList.push({ name: name, age: age, grade: grade });
}
// Pop function
function removeLastStudent() {
    studentList.pop();
}
// Print function
function printStudentDetails() {
    studentList.forEach(function (student) {
        console.log("Name: ".concat(student.name, ", Age: ").concat(student.age, ", Grade: ").concat(student.grade));
    });
}
// Slice function
var slicedStudents = studentList.slice(1, 3);
console.log("Sliced students:", slicedStudents);
// Reverse function
studentList.reverse();
console.log("Reversed students:", studentList);
// IndexOf function
var index = studentList.findIndex(function (student) { return student.name === "Charu" && student.age === 18 && student.grade === "A"; });
console.log("Index of charu:", index);
addStudent("Frank", 19, "B");
removeLastStudent();
console.log("Student details:");
printStudentDetails();
// Filter students who are 18 years old
var eighteenYearOldStudents = studentList.filter(function (student) { return student.age === 18; });
console.log(eighteenYearOldStudents);
