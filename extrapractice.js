const arr = [2,3,6,9,12]


function retEvens(arr) {
    const evens = arr.filter(num => num % 2 !== 0)
    return evens;
}

console.log(retEvens(arr));