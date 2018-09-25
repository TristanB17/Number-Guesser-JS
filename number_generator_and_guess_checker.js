let baseNumber = 1;
let limitNumber = 100;
var randomNumber = Math.floor(Math.random() * (baseNumber - limitNumber + 1)) + baseNumber;
document.getElementById('check-guess').style.visibility = "hidden"

function resetPage() {
  location.reload()
};

function apparate() {
  x = document.getElementById('check-guess');
  event.preventDefault();
  console.log('infants')
  console.log(x.style.visibility)
  if (x.style.visibility === "hidden") {
    console.log('babies')
    x.style.visibility = "visible";
  }
};
