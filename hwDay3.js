// Gas Cost Calculator 
// Two parameters starting and ending odometer
// return the cost of gas at 0.15 per mile 
// return the cost of gas for the trip using 3.64 per gallon at 28mpg

function odometerReading (start, end) {
    const result = (end - start) * 0.15;
    return result;
}
const costperMile = odometerReading(120000,136000);
console.log(costperMile);

function bonusTrip(cost,miles) {
    const costmpg = cost * miles;
    return costmpg;
}

const totalCost = bonusTrip(3.64,28);
console.log(totalCost);

// Multiply three numbers 
// Three parameters: num1, num2, num3
// return the product of these three numbers 
// write the functions to multiply 4 numbers, 5 numbers, 6 numbers


const num1 = 2;
const num2 = 3;
const num3 = 4;

const result = num1 * num2 * num3;
console.log("multiply",result);

// Cone Calculator 
// two parameters: radius and height
// return the volume of a cone 

function coneParameters(radius,height) {
    const volume = (Math.PI * radius * radius * height) / 3;
    return volume; 
}
const coneVolume = coneParameters(16,5);
console.log(coneVolume);

// Summation Sentence 
// Two parameters: num1 and num2
// Print "The sum of [num1] and [num2] is [result]"

function sumSentence(num1,num2) {
    const addSentence = num1 + num2
    const printSentence = "The sum of " + num1 + " and " + num2 + " is " + addSentence;
        return printSentence
}
    const allPrint = sumSentence(2,3)
    console.log(allPrint)

// Remainder Calculator 
// Two parameters: numerator and divisor 
// Return the remainder from dividing numerator by divisor 

console.log("modulus", numerator % divisor);

// Banana Picker
// One parameter: quantity 
// Return a string of quantity of 🍌

function quantityBanana(quantity) {
    const numberBanana = '🍌'.repeat(quantity);
    return numberBanana;
}
console.log(numberBanana);

// Name Concatenator 
// Two parameters: first name and last name 
// Return the full name 

function fullName(firstName,lastName) {
    const wholeName(firstName + lastName);
    return wholeName;
}
console.log(wholeName);

// String Length
// One parameter: string to be measured 

function getLength(string) {

    const totalLength = string.length;
    return totalLength; 
}

const string = "hello";
const stringLength = "The total character of " + string + " is " + getLength(string);

console.log(stringLength); 