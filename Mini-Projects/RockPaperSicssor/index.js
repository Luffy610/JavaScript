rock_button = document.querySelector(".Rock");
paper_button = document.querySelector(".Paper");
scissor_button = document.querySelector(".Scissor");
player_score = document.querySelector(".player-score");
computer_score = document.querySelector(".computer-score");
game_display = document.querySelector("#game-display");
footer = document.querySelector("#footer");


let computerMove = () => {
    let rndInt = Math.floor(Math.random() * 3) + 1;
    if (rndInt === 1){
        return 'rock';
    }
    else if (rndInt === 2){
        return 'paper';
    }
    else {
        return 'scissor';
    }

}

let checkWinner = (player_move) => {
    let computer_move = computerMove()
    if (player_move ==='rock' && computer_move === 'scissor'){
        showWinner(player_move, computer_move, 'player')
    }
    else if (player_move === 'rock' && computer_move === 'rock'){
        showWinner(player_move, computer_move,'draw');
    }
    else if (player_move === 'rock' && computer_move === 'paper'){
        showWinner(player_move, computer_move,'computer');
    }
    else if (player_move === 'paper' && computer_move === 'scissor'){
        showWinner(player_move, computer_move, 'computer');
    }
    else if (player_move === 'paper' && computer_move === 'rock'){
        showWinner(player_move, computer_move,'player');
    }
    else if (player_move === 'paper' && computer_move === 'paper'){
        showWinner(player_move, computer_move,'draw');
    }
    else if (player_move === 'scissor' && computer_move === 'scissor'){
        showWinner(player_move, computer_move, 'draw');
    }
    else if (player_move === 'scissor' && computer_move === 'rock'){
        showWinner(player_move, computer_move, 'computer');
    }
    else if (player_move === 'scissor' && computer_move === 'paper'){
        showWinner(player_move, computer_move, 'player');
    }
}

let showWinner = (player_move, computer_move, winner) => {
    if (winner === 'player'){
        player_score.innerText = Number(player_score.innerText) + 1;
        game_display.innerText = `You chose ${player_move} and computer chose ${computer_move}, You Won!!`;
        footer.style.backgroundColor = "green"; 
    }
    else if (winner === 'computer'){
        computer_score.innerText = Number(computer_score.innerText) + 1;
        game_display.innerText = `You chose ${player_move} and computer chose ${computer_move}, You Lost!!`;
        footer.style.backgroundColor = "red";
    }
    else if (winner === 'draw'){
        game_display.innerText = `You chose ${player_move} and computer chose ${computer_move}, It's a Draw!!`
        footer.style.backgroundColor = "#385F71";
    }
}

rock_button.addEventListener('click', () =>{
    checkWinner('rock');
})
paper_button.addEventListener('click', () => {
    checkWinner('paper');
})
scissor_button.addEventListener('click', () =>{
    checkWinner('scissor');
})