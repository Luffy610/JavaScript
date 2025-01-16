/* Q16. Create a new button element. Give it a text "click me", background color of white.

Insert the button as the first element inside the body tag.

*/

let button_node = document.createElement('button');
button_node.innerText = "Click Me!";

console.log(button_node);

let body_tag = document.querySelector('body');

body_tag.prepend(button_node)