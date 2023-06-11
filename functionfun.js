// declare variables
const shoes = 10
const laces = 20

// adding numbers function 

function addNumber(shoes,laces){
    const pairOfShoesTotal = shoes + laces;

    return pairOfShoesTotal;
}

const sumNumber = addNumber(10,20);

console.log(sumNumber);

// Create a function that sums three variables
// Declare variables 
const score1 = 27
const score2 = 45
const score3 = 50

// Function 
function addScores (score1,score2,score3) {
    const totalScore = score1 + score2 + score3;
    return totalScore;
}

// Function invocation 
const total = addScores(27,45,50);

console.log(total);

// Create a function that divides 
// Declare variables 
const workers = 6

// Function 
function divideWorkers (workers) {
    const moneyEarned = 800 / 6;
    return moneyEarned;
}

// Function invocation 
const amountEarnedPerWorker = divideWorkers(workers);

console.log(amountEarnedPerWorker);

// Create a function that multiplies three trees 
// Declare vatriables 
const tree1 = 1
const tree2 = 2.5
const tree3 = 4
// Function 
function multiplyTrees (tree1,tree2,tree3) {
    const treesMultiplied = tree1 * tree2 * tree3;
    return treesMultiplied;
}
// Function invocation 
const totalTreesMultiplied = multiplyTrees(tree1,tree2,tree3);
console.log(totalTreesMultiplied);

//Create a function that outputs, "Hello, is it ___ you're looking for?"
// Declare function 
function sayHello(userName){
    const greeting = "Hello, is it " + userName + " you're looking for?"
    return greeting; 
}
// Function invocation 
const result = sayHello("Henry");
console.log(result);
// Create a function that outputs "Hi, welcome to our site ___ we're glad you're here"
// Declare function 
function welcome(userName2){
    const greeting2 = "Hi, welcome to our site " + userName2 + ", we're glad you're here."
    return greeting2;
}
// Function invocation 
const answer = welcome("Amy");
console.log(answer);

// Pie Factory Function 
// Create a function that makes pies 
// Repeat the string as much as the quantity of the order 

// Function declaration 
function makeApie(quantityOfPies){
    const customerOrder = '🥧'.repeat(quantityOfPies);
    return customerOrder;
}

// Function invocation 
const pieResult = makeApie(10);
console.log(pieResult);

// Upper case function
// Create a function that converts a string to upper case 
// go to upper case => "GO TO UPPER CASE"

// Function declaration 
function makeAllCaps(inputMessage) {
    const outputMessage = inputMessage.toUpperCase();
    return outputMessage;
}
// Function invocation 
const inputMessage = makeAllCaps("go to upper case!!");
console.log(inputMessage);
// This was practice 6/10

