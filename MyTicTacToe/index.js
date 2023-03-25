const block = document.getElementsByClassName("box")
const restartBtn = document.getElementById("restart")



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
const box = Array.from(block);

function startGame(){
    box.forEach(box => box.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click",  )
}

function cellClicked() {

}

function restartGame() {
     
}