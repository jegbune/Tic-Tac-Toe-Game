const block = document.querySelectorAll(".box")
const restartBtn = document.getElementById("restart")
const statusText = document.getElementById("statusText")

const winCondition = [
    ['0,1,2'],
    ['3,4,5'],
    ['6,7,8'],
    ['0,3,6'],
    ['1,4,7'],
    ['2,5,8'],
    ['0,4,8'],
    ['2,4,6'],
]
let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer ="X";
let running = false;

// const box = Array.from(block);
startGame();

function startGame(){
    block.forEach(block => block.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s Turn`;
    running = true;
    
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    changePlayer();
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s Turn`
}

function checkWinner() {
    
}
function restartGame() {
     
}