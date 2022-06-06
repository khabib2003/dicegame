var p1Name = prompt("The name of Player1?");
var p2Name = prompt("The name of Player2?");

document.querySelectorAll("p")[0].innerText = p1Name;
document.querySelectorAll("p")[1].innerText = p2Name;

document.querySelector("button").addEventListener("click", function () {
  var randomNum1 = Math.floor(Math.random() * 6) + 1;
  var randomNum2 = Math.floor(Math.random() * 6) + 1;
  var images = document.querySelectorAll("img");
  images[0].setAttribute("src", `images/dice${randomNum1}.png`);
  images[1].setAttribute("src", `images/dice${randomNum2}.png`);

  if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = `${p1Name} wins! 🚩`;
  } else if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = `${p2Name} wins! 🏴󠁧󠁢󠁥󠁮󠁧󠁿`;
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
});
