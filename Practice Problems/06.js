/* Q6. For a given array with marks of students -> [85,97,44,37,76,60]
Find the avg marks of the entire class.
*/
let marks = [10,10,10,10,10,10]
let sum = 0
for(let i = 0; i<marks.length; i++){
    sum += marks[i];
}
console.log(sum/marks.length)