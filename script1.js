let button = document.querySelector('.clicks');
let ans = document.querySelector('.result');

let arg = ['x', 'o'];

button.addEventListener('click', function(){
    for (let i in arg){
        let value = arg[i];
        ans.innerHTML= value;
    }
})
