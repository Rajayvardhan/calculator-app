let string = "";
let buttons = document.querySelectorAll(".btn");
let span = document.querySelectorAll('.span').values
Array.from(buttons).forEach((button) => {
  if (button) {

  }
  button.addEventListener("click", (e) => {



    if (e.target.innerHTML == "=") {
      alert('please enter your name remaind your calculate history')

      string = eval(string);
      answer = document.querySelector('.answer').innerHTML = string;
      document.querySelector(".screen").value = string;
    }
    else if (e.target.innerHTML == "c") {
      string = '';
      document.querySelector(".screen").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector(".screen").value = string;
    }

  });

});
let manish = document.querySelector('#input')
const result = document.querySelector('#name');
let submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
  result.innerText = manish.value;

});

