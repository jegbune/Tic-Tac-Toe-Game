let button = document.querySelector('.clicks');
let result = document.querySelector('.result');
let arg = ['x', 'o'];

for(let i in arg){
    let value = arg[i]
    button.addEventListener('click', function(){

        // while(value ==='o'){
            result.innerHTML = value;
        // }

    })
}