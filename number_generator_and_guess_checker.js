let baseNumber = 1;
let limitNumber = 100;
var randomNumber = getRandom(baseNumber, limitNumber);
const clearButton = document.getElementById('clear-button');
const resetButton = document.getElementById('reset-button-id');


function getRandom(bottom, top) {
  return Math.floor(Math.random() * ( 1 + top - bottom ) ) + bottom;
};

console.log(randomNumber);

document.getElementById('check-guess').style.visibility = "hidden";

function resetPage() {
  location.reload();
};

function activateClearButton(button) {
  button.removeAttribute('disabled');
  button.classList.remove('clear-button-disabled');
  button.classList.add('main-buttons');
};

function deactivateClearButton() {
  document.getElementById('user-input').value = "";
  clearButton.disabled = true;
  clearButton.classList.remove('main-buttons');
  clearButton.classList.add('clear-button-disabled');
}

function activateResetButton(button) {
  button.removeAttribute('disabled');
  button.classList.remove('reset-button-disabled');
  button.classList.add('reset-button');
};

const userGuessInput = document.getElementById('user-input');
userGuessInput.oninput = function() {
                                    activateClearButton(clearButton);
                                    };

function apparate() {
  guess = document.getElementById('check-guess');
  event.preventDefault();
  activateResetButton(resetButton);
  if (guess.style.visibility === "hidden") {
    guess.style.visibility = "visible";
  }
  guessNumber = document.getElementById('user-input').value;
  document.getElementById('guess-display').innerHTML = guessNumber;
  if (parseInt(guessNumber) === NaN) {
    document.getElementById('number-comparison').innerHTML = "AYO FUCK NOT A NUMBER";
  } else if (guessNumber > randomNumber) {
    document.getElementById('number-comparison').innerHTML = "That is too high";
  } else if (guessNumber < randomNumber) {
    document.getElementById('number-comparison').innerHTML = "That is too low";
  } else {
    document.getElementById('number-comparison').innerHTML = "BOOM!";
  };
};
