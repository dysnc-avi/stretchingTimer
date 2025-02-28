let word = document.querySelector(".word");
let isGreen = false;
let form = document.querySelector("#set");
let h1 = document.querySelector(".mainHeading");
let body = document.body;

function startTimer(seconds, interval) {
  let count = 0;
  form.style.visibility = "hidden";
  h1.style.visibility = "hidden";
  function changeToGreen() {
    if (count >= interval) return;
    if (count == interval - 1) {
      word.innerHTML = "LAST";
      body.style.backgroundColor = "#8f94db";
    } else {
      word.innerHTML = "GO";
      body.style.backgroundColor = "green";
    }
    setTimeout(changeToRed, seconds * 1000);
  }

  function changeToRed() {
    body.style.backgroundColor = "red";
    word.innerHTML = "REST";
    count++;
    if (count < interval) {
      setTimeout(changeToGreen, 10000);
    }
  }

  changeToGreen();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let seconds = e.target.sOptions.value;
  let interval = e.target.eOptions.value;

  startTimer(seconds, interval);
});
