const block = document.getElementsByClassName("box")
let player_X = true;
let player_O = false;
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
const newBox = Array.from(block);

newBox.forEach(newBox => newBox.addEventListener("click", function start(){
        alert(x)
        if (newBox.textContent === "" || newBox.textContent === "O"){
            newBox.textContent = "X";
        } else {
            newBox.textContent = "O"
        }

    }
    
    // alert(element)
))