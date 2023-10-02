// Your code here
document.addEventListener("keydown", function (event) {
  console.log(event);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});

const dodger = document.getElementById("dodger");

//Function to move dodger Left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

//Event listener for left arrow key
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});






const dodger2 = document.getElementById("dodger");

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});

//Function to move dodger Right 
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  //Adujst of  how far right the dodger can move
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
//Eventlistener for right arrow  key
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});


