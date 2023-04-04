const cells = document.querySelectorAll(".cells");
const statusText = document.querySelector("#status");
const restartBtn = document.querySelector("#restart");

const WinningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const options = ["","","","","","","","","",]
let currentPlayer = "X";
let running = false;

startGame();

function startGame() {
    cells.forEach(cells => cells.addEventListener("click", player));
    statusText.textContent = `${currentPlayer}'s turn`
    running= true;

}

function player() {
    const index = this.getAttribute("num");
    // alert(index);

    currentCell(this, index)
    checkWinner();
    // changePlayer();
}

function currentCell(cell, index) {
    cell.textContent = currentPlayer;
    options[index] = currentPlayer;   
}

function changePlayer() {
    currentPlayer =(currentPlayer =="X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`
    
}

function checkWinner() {
   let roundwon = false;

    for(let i = 0; i < WinningConditions.length; i++){
        const condition = WinningConditions[i];
        const condition0 = options[condition[0]];
        const condition1 = options[condition[1]];
        const condition2 = options[condition[2]];
        
        if(condition0 == "" || condition1 == "" || condition2 == "") {
            continue;
        }       
        if(condition0 == condition1 && condition1 == condition2){
            roundwon = true
            break;
        }
    }
        if(roundwon){
            statusText.textContent =`${currentPlayer} wins!`;
            running = false;

        }
        else if (!options.includes("")){
            statusText.textContent = `Draw`;
            running =false;
        }
        else{
            changePlayer()
        }

        // alert(condition1)
    }
//     if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent) {
//         statusText.textContent = `${currentPlayer} wins!`
//     }

