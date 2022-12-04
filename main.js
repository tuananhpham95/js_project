const displayNumber = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
console.log(buttons)
let count = 0;
//const buttonAdd = document.querySelector ('.btn .add');
Array.from(buttons).forEach(function(btn){
    btn.addEventListener('click', function(event){
        if (event.target.classList.contains('lower') ){
            console.log(count);
            count --;
        }else if (event.target.classList.contains('add')){
            console.log(count);
            count ++;
        }
        displayNumber.textContent = count;
    })
})
