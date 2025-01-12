boxes = document.querySelectorAll(".box");
winning_container = document.querySelector(".winner-container");
winner_title = document.querySelector(".winner-title");
new_game = document.querySelector(".new-game-btn");
reset_button = document.querySelector(".reset-btn")

let turnO = true;
let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,7],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
let count = 0;

boxes.forEach(box => {
    box.addEventListener("click", ()=> {
        if (turnO){
            box.innerText = "O";
            turnO = false;
            count += 1;
            box.disabled = true;
            checkWinner();
        }
        else{
            box.innerText = "X";
            turnO = true;
            count += 1;
            box.disabled = true;
            checkWinner();
        }

    })
});

let checkWinner = () => {
    console.log(count)
    winningPattern.forEach(pattern => {
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if((pos1Val === pos2Val) && (pos2Val === pos3Val)){
                showWinner(pos1Val);
            }
        }
    })
    if (count === 9){
        showDraw();
    }
};

let showDraw = () => {
    winner_title.innerText = 'Game is Drawed';
    winning_container.classList.remove("hide");
    disablebutton();
}

let showWinner =  (winner) => {
    winner_title.innerText = `Winner is ${winner}`;
    winning_container.classList.remove("hide");
    disablebutton();
}

let resetGame = () => {
    winning_container.classList.add("hide");
    clearbutton();
    enablebutton();
    turnO = true;
    count = 0;
}

new_game.addEventListener('click',resetGame)
reset_button.addEventListener('click', resetGame)

let clearbutton = () => {
    boxes.forEach(box => {
        box.innerText = "";
    })
}

let enablebutton = () => {
    boxes.forEach(box => {
        box.disabled = false;
    })
}

let disablebutton = () => {
    boxes.forEach(box => {
        box.disabled = true;
    })
}

