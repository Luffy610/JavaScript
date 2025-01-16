// Q10. Create a arrow function to perform the same previous task


let input_string = prompt("Enter your string: ")
let countVowels = (input_str) => {
    let count = 0
    for(let i of input_str){
        if ((i==="a") || (i==="e") || (i==="i") || (i==="o") || (i==="u")){
            count ++;
        }
    }
    return count;
}

result = countVowels(input_string);
console.log(result);