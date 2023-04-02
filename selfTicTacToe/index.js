const cells = document.querySelectorAll(".cells");
const statusText = document.querySelector("#status");
// const restartBtn = document.querySelector("#restart");


let currentPlayer = "X";
let running = false;

startGame();

function startGame() {
    cells.forEach(cells => cells.addEventListener("click", player));
    running= true;

}

function player() {
    const index = this.getAttribute("num");
    // alert(index);

    currentCell(this)
}

function currentCell(cell) {
    cell.textContent = currentPlayer;
    changePlayer();

}

function changePlayer() {
    currentPlayer =(currentPlayer =="X") ? "O" : "X";
}

function checkWinner() {
    if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent) {
        statusText.textContent = `${currentPlayer} wins!`
    }
}
