const input = document.querySelector('#input');
const output = document.querySelector('#output');


input.addEventListener('keydown',calculate )
function calculate(){
   let inputVal = input.value.length
   output.innerHTML = inputVal
   output.style.visibility = 'visible'
}