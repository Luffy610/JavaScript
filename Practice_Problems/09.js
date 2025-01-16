/* Q9. Create a function using the "function" keyword that takes a String as an argument
and return the number of vowels in the string.
*/

let input_string = prompt("Enter the string :");
input_string = input_string.toLowerCase()

function countVowels(input_str){
    let count = 0;
    for(let i of input_str){
        if ((i == "a") || (i == "e") || (i == "o") || (i == "i") || (i == "u")){
            count ++;
        }
    }
    return count;
}

result = countVowels(input_string);
console.log(result)