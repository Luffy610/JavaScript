/* Q17. Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element
*/

let p_tag = document.querySelector("p");
p_tag.classList.add("p_class")
console.log(p_tag.classList)