document.getElementById('check-guess').style.visibility = "hidden";
// I find the css id 'check-guess' element, go into its style properties, and change its visibility to 'hidden' when the page is loaded
let baseNumber;
let limitNumber;
let randomNumber = "Undefined";
const clearButton = document.getElementById('clear-button');
const resetButton = document.getElementById('reset-button-id');
// Here I am just setting the variables prior to the game beginning

function setMinimum() {
  baseNum = parseInt(document.getElementById('user-lowest-number').value);
  // Here I am selecting the lowest value box and assigning it to a variable
  if (baseNum === "") {
    baseNumber = 1;
    // I couldn't get this to work correctly, but I tried assigning a variable here in case the range was blank
  } else {
    baseNumber = baseNum;
    // else baseNumber is assigned to the number in this value
  }
};

function setMaximum() {
  limitNum = parseInt(document.getElementById('user-highest-number').value);
  // Here I am selecting the highest value box and assigning it to a variable
  if (limitNum === "") {
    limitNumber = 100;
  } else {
    limitNumber = limitNum;
  }
};
// This follows basically the same principle as the above setMinimum() function

function getRandom(bottom, top) {
  return Math.floor(Math.random() * ( 1 + top - bottom ) ) + bottom;
};
// I was surprised to find javascript did not have a method to generate a random number within a given range, so I found this complicated method and rounded it to a whole number


function resetPage() {
  location.reload();
};
//  This method just enables the page to be reloaded, 'window' can also be included, but I found it excessive

function activateClearButton(button) {
  button.removeAttribute('disabled');
  // Here the attribute of the button being disabled is removed
  button.classList.remove('clear-button-disabled');
  // I am taking away the class of removed button, only it's colors change
  button.classList.add('main-buttons');
  // A color change again to a activated button
};

function deactivateClearButton() {
  document.getElementById('user-input').value = "";
  clearButton.disabled = true;
  clearButton.classList.remove('main-buttons');
  clearButton.classList.add('clear-button-disabled');
  // This button essentially does the opposite of the above button - to disable the clear button if nothing is in the input field
};


function activateResetButton(button) {
  button.removeAttribute('disabled');
  button.classList.remove('reset-button-disabled');
  button.classList.add('reset-button');
  // This does what the activateClearButton function does for the reset button
};

const userGuessInput = document.getElementById('user-input');
userGuessInput.oninput = function() {
                                    activateClearButton(clearButton);
                                    };
// here I am evoking the activateClearButton method if user input is detected within this field

function apparate() {
  setMinimum();
  setMaximum();
  if (isNaN(baseNumber)) {
    baseNumber = 1;
  }
  if (isNaN(limitNumber)) {
    limitNumber = 100;
  }
  // here I am calling the set minimum and set maximum methods, and equating them to 1 and 100 if they're not specified
  if (randomNumber === "Undefined") {
    randomNumber = getRandom(baseNumber, limitNumber);
  };
  // Here I am setting a random number only after the user clicks guess to ensure it won't be changed until the page is reset
  guess = document.getElementById('check-guess');
  // setting the guess field to a variable
  event.preventDefault();
  activateResetButton(resetButton);
  // activating the reset button
  if (guess.style.visibility === "hidden") {
    guess.style.visibility = "visible";
  }
  // changing the guess display to visible
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
    document.getElementById('number-comparison').innerHTML = "BOOM! Since you won,\nwe decreased the minimum range\nand increased the maximum range by ten,\nrespectably, for the next round.\nHappy guessing!";
    document.getElementById('user-lowest-number').value=`${baseNumber - 10}`;
    document.getElementById('user-highest-number').value=`${limitNumber + 10}`;
    // All of these outcomes are output depending on the user input, in this last one, ten is subtracted or added depending on a user victory
  };
};
