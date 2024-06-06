///////////////////////// BATAS  ///////////////

let userScore = 0;
let currentGame = 1;

function updateScore(points) {
  userScore += points;
  const scoreElement = document.querySelector(".user-score");
  scoreElement.textContent = userScore;

  const scoreContainer = document.querySelector(".score-container");
  const gameContainer = document.querySelector(".game-container");
  const end = document.querySelector(".end");
  const end1 = document.querySelector(".end1");

  if (userScore >= 900) {
    setTimeout(function () {
      end.style.display = "block";
    }, 4000);

    setTimeout(function () {
      gameContainer.style.display = "none";
      end.style.display = "block";
      scoreContainer.style.transform = "scale('1.5')";
    }, 4000);
  }
}

function handleButtonClick() {
  const hElement = document.querySelector(`.h2${currentGame}`);
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak = document.querySelector(`.imagekotak${currentGame}`);
  const textKotak = document.querySelector(`.textkotak${currentGame}`);
  const currentGameElement = document.querySelector(`.game${currentGame}`);
  const nextGameElement = document.querySelector(`.game${currentGame + 1}`);
  const button = document.querySelector(`.button${currentGame}`);
  const soundEfectBenar = document.querySelector(".soundefect-benar");
  const soundEfectSalah = document.querySelector(".soundefect-salah");
  const aplause = document.querySelector(".aplause");
  const kecewa = document.querySelector(".kecewa");
  const end1 = document.querySelector(".end1");
  const input = document.querySelector(`.input${currentGame}`);
  const gameContainer = document.querySelector(".game-container");
  const backsound = document.querySelector(".backsound");

  const value = document.querySelector(`.input${currentGame}`).value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return;
  }

  if (value.toLowerCase() !== hElement.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    backsound.play();
    // imageKotak.style.transformOrigin = "top left";
    // imageKotak.style.transform = "rotate(180deg)";
    imageKotak.style.transform = "translateY(-100%)";
    // textKotak.style.transform = "translateY(-50px)";
    input.style.border = "red 5px solid";

    kecewa.style.display = "block";
    soundEfectSalah.play();

    updateScore(-50);

    setTimeout(function () {
      imageKotak.style.transform = "translateY(0)";

      input.style.border = "none";
      kecewa.style.display = "none";
    }, 2500);
  } else {
    popup.style.display = "flex";
    popup1.style.display = "none";
    backsound.play();
    imageKotak.style.transform = "translateY(-100%)";
    // textKotak.style.transform = "translateY(-50px)";
    aplause.style.display = "block";
    popup1.style.display = "none";
    soundEfectBenar.play();

    updateScore(100);
    setTimeout(function () {
      imageKotak.style.transform = "translateY(0)";
      // textKotak.style.transform = "translateY(0)";
      aplause.style.display = "none";
    }, 3000);

    setTimeout(function () {
      popup.style.display = "none";
      // imageKotak.style.transform = "rotate(0deg)";

      if (nextGameElement) {
        currentGameElement.style.transform = "translate(1000px)";

        currentGame += 1;
      } else {
        // Handle end of the game
        end1.style.display = "block";
        gameContainer.style.display = "none";
      }
    }, 4500);

    setTimeout(function () {
      nextGameElement.style.transform = "translate(-50%)";
      currentGameElement.style.display = "none";
    }, 5000);
  }
}

// Add event listener for Enter key press with setTimeout
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action (form submission)
      setTimeout(function () {
        handleButtonClick();
      }, 500); // Adjust the delay as needed
    }
  });
});
