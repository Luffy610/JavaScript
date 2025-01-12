/* Q8. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM"
, "Netflix".

a. Remove the first company from the array.

b. Remove Uber and Add Ola in it's place.

c. Add Amazon at the end.

*/

console.log("Helloo")
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

console.log(companies.shift())
console.log(companies)

console.log(companies.splice(1,1,"Ola"))
console.log(companies)

console.log(companies.push("Amazon"))
console.log(companies)