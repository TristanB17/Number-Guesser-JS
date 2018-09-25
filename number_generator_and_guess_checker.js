let baseNumber = 1;
let limitNumber = 100;
var randomNumber = Math.floor(Math.random() * (baseNumber - limitNumber + 1)) + baseNumber;

function resetPage() {
  location.reload()
};

function apparate() {
  x = document.getElementById('check-guess');
  console.log('infants')
  debugger;
  if (x.style.visibility === "hidden") {
    console.log('babies')
    x.style.visibility = "visible";
  }
};
