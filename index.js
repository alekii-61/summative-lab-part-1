// array to store calculation history
let calculationHistory=[];

// addition function and adding to the array
function addNumbers(a, b){
    const addition=a+b;
    const entry={
    operand1:a,
    operand2: b,
    operator: "+",
    result: addition};

    calculationHistory.push(entry);
    return addition;
}


//subtraction function and adding it to an array
function subtractNumber(a, b){
    const subtraction =a-b;
    const entry1={
    operand1:a,
    operand2: b,
    operator: "-",
    result: subtraction};
    calculationHistory.push(entry1);
    return subtraction;
};
//multiplication function and adding it to the calculationHistory array
function multilyNumber(a, b){
    const multiply =a*b;
    const entry2={
    operand1:a,
    operand2: b,
    operator: "*",
    result: multiply};
    calculationHistory.push(entry2);
    return multiply;
}
//division function and adding it to the calculateHistory array
function divideNumber(a, b){
    if(b === 0){
        return " cannot divide by zero"
    }
    const divide =a/b;
    const entry3={
        operand1:a,
    operand2: b,
    operator: "/",
    result: divide
    };
    calculationHistory.push(entry3);
    return divide;
}
console.log(addNumbers(50, 5));
console.log(subtractNumber(50, 5));
console.log(multilyNumber(50, 5));
console.log(divideNumber(50, 5));
console.log(divideNumber(50,0))
console.log(calculationHistory)