/* Q13. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate the sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/

let n = prompt("Enter the number of elements to be in array:");
let numbers = []
for (let i = 1; i <= n; i++){
    numbers.push(i);
}

result = numbers.reduce((prev, current) =>{
    return prev + current
})

console.log(result)