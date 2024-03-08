//! choice start
//? selecting elements 
const zero = document.getElementById('choice-btn-2');
const cross = document.getElementById('choice-btn-1');
const play = document.querySelector("#play-btn");
//! functions 


cross.addEventListener('click', ()=> {
  play.classList.remove('hidden');
  zero.disabled = true;
  cross.disabled = true;
});
zero.addEventListener('click', ()=> {
    play.classList.remove('hidden');
    zero.disabled = true;
    cross.disabled = true;
});

let myVariable;
function giveValue(value) {
        myVariable = value;
        localStorage.setItem('myVariable',myVariable);
}





//! choice ends