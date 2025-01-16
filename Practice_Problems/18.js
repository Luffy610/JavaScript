/* Q18. Create a toggle button that changes the screen to dark-mode when clicked & light mode
when clicked again
*/
let button_node = document.querySelector('button');
let body_node = document.querySelector('body');
button_node.addEventListener('click', ()=>{
    if(body_node.classList[0] === 'dark_background'){
        body_node.classList.remove('dark_background');
        body_node.classList.add('light_background');
        button_node.classList.remove('dark_button');
        button_node.classList.add('light_button');
    }
    else{
        body_node.classList.remove('light_background');
        body_node.classList.add('dark_background');
        button_node.classList.remove('light_button');
        button_node.classList.add('dark_button');
    }
})