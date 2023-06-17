fun = () => {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btncancel");
  let equal = document.querySelector(".btnequal");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
  equal.addEventListener("click", () => {
    if (screen.value === "") {
      screen.value = "please enter the value";
    } else {
      let who = eval(screen.value);
      screen.value = who;
    }
  });
  clear.addEventListener("click", function () {
    screen.value = "";
  });
};
fun();
