let random = Math.floor(Math.random() * 100 + 1)
console.log(`random = ${random}`)
let guess = Number(prompt("Enter your guess :"))
while(guess != random){
    console.log("Wrong guess please guess again");
    guess = prompt("Enter your guess :")
}

console.log("Correct Guess!!")