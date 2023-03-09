let button = document.querySelector('.clicks');
let ans = document.querySelector('.result');

let arg = ['x', 'o'];

for (let i in arg){
    let value = arg[i];
    // alert(value);
    button.addEventListener('click', function(){
       ans.innerHTML= value;
    })
}