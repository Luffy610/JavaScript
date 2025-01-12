/* Q5. Prompt a user to enter their full name.
Generate a username for them based on the input.
Start username with @, followed by their full name and ending with their fullname length.

eg: username = "dhruv", username returned should be "@dhruv5"
*/

let username = prompt("Enter your username")

console.log(`@${username}${username.length}`)