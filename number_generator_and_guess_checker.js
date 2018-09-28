let baseNumber = 1;
let limitNumber = 100;
let randomNumber = "Undefined";

function setMinimum() {
  baseNum = parseInt(document.getElementById('user-lowest-number').value);
  if (baseNum === "") {
    const baseNumber = 1;
  } else {
    baseNumber = baseNum;
    baseNum.min = baseNumber;
  }
};

function setMaximum() {
  limitNum = parseInt(document.getElementById('user-highest-number').value);
  if (limitNum === "") {
    const limitNumber = 100;
  } else {
    limitNumber = limitNum;
    limitNum.max = limitNumber;
  }
};

const clearButton = document.getElementById('clear-button');
const resetButton = document.getElementById('reset-button-id');

function getRandom(bottom, top) {
  return Math.floor(Math.random() * ( 1 + top - bottom ) ) + bottom;
};

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
  setMinimum();
  setMaximum();
  if (isNaN(baseNumber)) {
    baseNumber = 1;
  }
  if (isNaN(limitNumber)) {
    limitNumber = 100;
  }
  if (randomNumber === "Undefined") {
    randomNumber = getRandom(baseNumber, limitNumber);
  };
  console.log(randomNumber)
  guess = document.getElementById('check-guess');
  event.preventDefault();
  activateResetButton(resetButton);
  if (guess.style.visibility === "hidden") {
    guess.style.visibility = "visible";
  }
  guessNumber = document.getElementById('user-input').value;
  document.getElementById('guess-display').innerHTML = guessNumber;
  if (parseInt(guessNumber) < baseNumber) {
    document.getElementById('number-comparison').innerHTML = `That is lower than the minimum number (${baseNumber}), try again`;
  } else if (parseInt(guessNumber) > limitNumber) {
    document.getElementById('number-comparison').innerHTML = `That is higher than the maximum number (${limitNumber}), try again`;
  } else if (guessNumber > randomNumber) {
    document.getElementById('number-comparison').innerHTML = "That is too high";
  } else if (guessNumber < randomNumber) {
    document.getElementById('number-comparison').innerHTML = "That is too low";
  } else {
    document.getElementById('number-comparison').innerHTML = "BOOM!";
    document.getElementById('win-message').innerHTML = "Since you won,\nwe decreased the minimum range\nand increased the maximum range by ten,\nrespectably, for the next round.\nHappy guessing!";
    document.getElementById('user-lowest-number').value=`${baseNumber - 10}`;
    document.getElementById('user-highest-number').value=`${limitNumber + 10}`;
  };
};
