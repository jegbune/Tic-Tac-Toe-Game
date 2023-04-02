const cells = document.querySelectorAll(".cells");
// const status = document.querySelector("#status");
// const restartBtn = document.querySelector("#restart");

// let currentplayer = "X";
// let running = false;

startGame();

function startGame() {
    cells.forEach(cells => cells.addEventListener("click", player));
    running= true;
}

function player() {
    const index = this.getAttribute("num");
    alert(index);
}