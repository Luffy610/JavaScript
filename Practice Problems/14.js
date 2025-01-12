/* Q14. Create a H2 heading element with text- "Hello JavaScript". Append "from Dhruv" to 
this text using JS
*/

let body_tag = document.querySelector("h2");

body_tag.innerText = `${body_tag.innerText} from Dhruv`

console.log(body_tag.innerHTML)