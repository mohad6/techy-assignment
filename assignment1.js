//arrow function declaration
calculate = (number1,number2,operation) =>{
    //Check if numbers are not null or undefined
    if(number1 === null|| number2 === null || number1 === undefined || number2 === undefined){
return "Invalid Calculation: number cannot be null or undefined"
    }
    //Check if operation is valid
    if(["add", "subtract", "multiply","divide"].indexOf(operation) === -1){
        return 'Invalid operation: "add", "subtract", "multiply","divide" must be your operation';
    }
// operations
if(operation === "add"){
    //Add operation
    return number1 + number2;
} else if(operation === "subtract"){
    //Subtract operation
    return number1 - number2;
} else if(operation === "multiply"){
    //Multiply operation
    return number1 * number2;
} else if(operation === "modulus"){
        return number1 % number2
}else if (operation === 'divide') {
    if (number2 === 0 || number1 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}   
};
// Test case
console.log(calculate(5, 3, 'add'));       // Output: 8
console.log(calculate(10, 2, 'divide'));   // Output: 5
console.log(calculate(7, 5, 'subtract'));  // Output: 2
console.log(calculate(10, 7, 'subtract')); // Output -1
console.log(calculate(4, 6, 'multiply'));  // Output: 24
console.log(calculate(4, 0, 'divide'));    // Output: Error: Division by zero
console.log(calculate(0, 4, 'divide'));
console.log(calculate(4, 4, 'divide'));    //Output: 1
console.log(calculate(10, 3, 'modulus'));   // Output: Invalid operation: must be 'add', 'subtract', 'multiply', or 'divide'



