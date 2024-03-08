//* selections

const msg = document.querySelector("#msg");
const newGame = document.querySelector("#new-game");
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
const boxes = document.querySelectorAll(".box");

//* selections

//! data

let turn = localStorage.getItem("myVariable");

//! data

//?random value generator
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function createRandomPicker() {
  if (numbersArray.length === 0) {
    //* when all elements have been selected
    console.log("Hello");
    const finalWinner = checkBoxWinner();
    if (!finalWinner) {
      showBoxDraw();
    }
    return;
  }

  const randomIndex = Math.floor(Math.random() * numbersArray.length);
  const randomNumber = numbersArray.splice(randomIndex, 1)[0];
  return randomNumber;
}
//?random value generator

//* selecting a random section

//! small box game
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

start.addEventListener("click", () => {
  console.log("hello");
  start.classList.add("hidden");
  newGame.classList.remove("hidden");
  giveId();
});

boxes.forEach((box) => {
  box.disabled = true;
});

function giveId() {
  let num = createRandomPicker();
  let divID = "selection-box-" + num;
  let div = document.getElementById(divID);
  div.classList.remove("bg-maroonX");
  div.classList.add("bg-paleYellow");
  console.log(divID);

  let count = 0;
  const id = divID;
  const section = document.getElementById(id);
  const boxes = section.querySelectorAll(".box");

  boxes.forEach((box) => {
    for (let box of boxes) {
      box.disabled = false;
    }

    box.addEventListener("click", () => {
      if (turn == "true") {
        box.innerText = "O";
        turn = "false";
      } else {
        box.innerText = "X";
        turn = "true";
      }
      box.disabled = true;
      count++;
      console.log(count);

      const isWinner = checkWinner(section);

      if (count == 9 ) {
        if (isWinner !== true) {
          showDraw(section);
          giveId();
          console.log("draw");
        }
      }
      function checkWinner(section) {
        const division = section;
        const buttons = division.querySelectorAll("button");
        for (let pattern of winPatterns) {
          let pos1Val = buttons[pattern[0]].innerText;
          let pos2Val = buttons[pattern[1]].innerText;
          let pos3Val = buttons[pattern[2]].innerText;

          if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
              showWinner(pos1Val, division);
              giveId();
              console.log("winner");
              return true;
            }
          }
        }
      }
    });
  });

  const showWinner = (winner, division) => {
    let winVal = winner;
    division.innerText = winVal;
    checkBoxWinner();
  };

  const showDraw = (division) => {
    division.innerText = "Draw";
    checkBoxWinner();
  };
}

reset.addEventListener("click", () => {
  location.reload();
});

function checkBoxWinner() {
  for (let pattern of winPatterns) {
    const selects = document.querySelectorAll(".select");
    let Val1 = selects[pattern[0]].innerText;
    let Val2 = selects[pattern[1]].innerText;
    let Val3 = selects[pattern[2]].innerText;

    if (Val1 != "" && Val2 != "" && Val3 != "") {
      if (Val1 === Val2 && Val2 === Val3) {
        showBoxWinner(Val1);
        return true;
      }
    }
  }
}

function showBoxWinner(winner) {
  const win2 = winner;
  msg.innerText = "congratulation " + win2 + " is the winner";
  msg.classList.remove("hidden");
}

function showBoxDraw() {
  msg.innerText = "its a Draw";
  msg.classList.remove("hidden");
}

//! small box ending always draw and also is winner true so giveId() get called two times
