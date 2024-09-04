//array of object
const students = [
    { name: 'Mohad', age: 18, grade: 'A' },
    { name: 'Blessing', age: 21, grade: 'C' },
    { name: 'Awa', age: 20, grade: 'B' },
    { name: 'Fatty', age: 22, grade: 'B' },
    { name: 'Blud', age: 19, grade: 'C' },
    { name: "Scott", age: 23, grade: 'C' },
    { name: "Jack", age: 20, grade: 'B' },
    { name: "Joy", age: 24, grade: 'D' }
]
// arrow function for filterByGrade
filterByGrade = (students,grade)=>{
return students.filter(student => student.grade === grade);
}

// calling filterByGrade with grade 'C' and logging their names  to console.log
const matchingGrade = filterByGrade(students,"C");
console.log("STUDENT WITH MATCHING GRADES: " , matchingGrade); 
// arrow function for averageAge
averageAge = ()=> {
    const totalAge = students.reduce((total,student) => total + student.age, 0);
    return totalAge / students.length;
}
console.log("THE AVERAGE AGE OF THE STUDENTS: ", averageAge(students)) // Output: 20.875