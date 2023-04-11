const number = document.getElementById('number');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
let num = 0

increment.addEventListener('click', function() {
    num++
    number.textContent = num;
})

decrement.addEventListener('click', function() {
    num--
    number.textContent = num;
})