// Q11. For a given array of numbers, print square of each values using forEach loop.

let numbers = [1,2,3,4,5,6,7,8,9,10]
let squares = []
for (let val of numbers){
    squares.push(val**2);
}

console.log(squares)