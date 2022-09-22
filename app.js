console.log("hey man");
let string = "";

// let answer = document.getElementById("answer")
let btn = document.querySelectorAll("button");
let screenValue = "";

Array.from(btn).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".answer").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector(".answer").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector(".answer").value = string;
    }
  });
});

// for (item of btn) {
//     item.addEventListener("click", (e) => {
//         buttonText = e.target.innerText;
//         if (buttonText == "X") {
//             buttonText = "*";
//             screenValue += buttonText;
//             screen.value = screenValue;
//         } else if (buttonText == "C") {
//             screenValue = "";
//             screen.value = screenValue;
//         } else if (buttonText == "=") {
//             checkForBracketMulti(); // automatically evaluates if no brackets
//         } else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//     }

//     )

// }
