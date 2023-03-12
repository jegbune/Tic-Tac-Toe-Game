let button = document.querySelector('.clicks');
let ans = document.querySelector('.result');

let arg = ['x', 'o'];

for (let i in arg){
        button.addEventListener('click', function(){
        let value = arg[i];
        ans.innerHTML= value;
    })
    }
 