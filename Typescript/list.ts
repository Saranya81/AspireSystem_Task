// Array of students
const studentList: { name: string, age: number, grade: string }[] = [
    { name: "Charu", age: 18, grade: "A" },
    { name: "Arul", age: 19, grade: "B" },
    { name: "Saran", age: 17, grade: "C" },
    { name: "Preethi", age: 20, grade: "B" },
    { name: "Ram", age: 18, grade: "A" }
];

// Push function
function addStudent(name: string, age: number, grade: string): void {
    studentList.push({ name, age, grade });
}

// Pop function
function removeLastStudent(): void {
    studentList.pop();
}

// Print function
function printStudentDetails(): void {
    studentList.forEach(student => {
        console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// Slice function
const slicedStudents = studentList.slice(1, 3); 
console.log("Sliced students:", slicedStudents);

// Reverse function
studentList.reverse(); 
console.log("Reversed students:", studentList);

// IndexOf function
const index = studentList.findIndex(student => student.name === "charu" && student.age === 18 && student.grade === "A"); 
console.log("Index of Charu:", index);

addStudent("Frank", 19, "B");

removeLastStudent();

console.log("Student details:");
printStudentDetails();

// Filter students who are 18 years old
const eighteenYearOldStudents = studentList.filter(student => student.age === 18);
console.log(eighteenYearOldStudents);


