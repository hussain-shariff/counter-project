// variables
const number = document.querySelector('#number');
const buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let style = e.currentTarget.classList;
        if (style.contains('decrease')){
            count--
        }else if (style.contains('increase')){
            count++
        }else{
            count = 0
        }
        if (count < 0){
            number.style.color = 'red'
        }if (count > 0){
            number.style.color = 'green'
        }if (count === 0){
            number.style.color = 'white'
        }
        number.textContent = count
    })
});

