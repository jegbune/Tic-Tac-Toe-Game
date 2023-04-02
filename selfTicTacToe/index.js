const cells = document.querySelectorAll("#cells");
const status = document.querySelector("#status");
const restartBtn = document.querySelector("#restart");

let currentplayer = "X";
running = false;

function startGame () {
    cells.forEach(cell => cell.addEventListener("click", player) );
    running= true;
}

// function player() {
//     let num = this.getAttribute("num");
//     alert(num)
// }