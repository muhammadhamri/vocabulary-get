let userScore = 0;

// Function to update the score
function updateScore(points) {
  userScore += points;
  // console.log("Current Score:", userScore);
  // You can display the score or perform other actions here

  // Update the score element on the screen
  const scoreElement = document.querySelector(".user-score");
  scoreElement.textContent = userScore;

  // const score1 = document.querySelector(".score-container");
  // const gameContainer = document.querySelector(".game-container");

  // const end = document.querySelector(".end");
  // const end1 = document.querySelector(".end1");

  if (userScore >= 1850) {
    setTimeout(function () {
      window.location.href = "end.html";
      // end.style.display = "block";
    }, 5500);

    setTimeout(function () {
      gameContainer.style.display = "none";
      // end.style.display = "block";
      // score1.style.transform = "scale('1.5')";
    }, 5000);
  }
}

//game 1

//
///////////////////////////////////////////////////////////////
const h21Element = document.querySelector(".h21");
const popup = document.querySelector(".popup");
const popup1 = document.querySelector(".popup1");
const imageKotak1 = document.querySelector(".imagekotak1");
const choices = document.querySelectorAll(".choice");
const game1 = document.querySelector(".game1");
const game2 = document.querySelector(".game2");
const end1 = document.querySelector(".end1");
const gameContainer = document.querySelector(".game-container");
const soundEfectBenar = document.querySelector(".soundefect-benar");
const soundEfectSalah = document.querySelector(".soundefect-salah");
const aplause = document.querySelector(".aplause");
const kecewa = document.querySelector(".kecewa");
const activeElements = document.querySelectorAll(".active");
const active1 = document.querySelector(".game1");
const active2 = document.querySelector(".game2");
const backsound = document.querySelector(".backsound");
const imageKotakSatu = document.querySelector(".imagekotak-1");
const imageKotakDua = document.querySelector(".imagekotak-2");
const imageKotakTiga = document.querySelector(".imagekotak-3");
const imageKotakEmpat = document.querySelector(".imagekotak-4");
const imageKotakLima = document.querySelector(".imagekotak-5");
const imageKotakEnam = document.querySelector(".imagekotak-6");
const imageKotakTujuh = document.querySelector(".imagekotak-7");
const imageKotakDelapan = document.querySelector(".imagekotak-8");
const imageKotaksembilan = document.querySelector(".imagekotak-9");
const imageKotakSepuluh = document.querySelector(".imagekotak-10");
const imageKotakSebelas = document.querySelector(".imagekotak-11");
const imageKotakDuabelas = document.querySelector(".imagekotak-12");
const imageKotakTigabelas = document.querySelector(".imagekotak-13");
const imageKotakEmpatbelas = document.querySelector(".imagekotak-14");
const imageKotakLimabelas = document.querySelector(".imagekotak-15");
const imageKotakEnambelas = document.querySelector(".imagekotak-16");
const imageKotakTujuhbelas = document.querySelector(".imagekotak-17");
const imageKotakDelapanbelas = document.querySelector(".imagekotak-18");
const imageKotakSembilanbelas = document.querySelector(".imagekotak-19");
const imageKotakDuapuluh = document.querySelector(".imagekotak-20");

choices.forEach(function (choice) {
  choice.addEventListener("click", function () {
    soundEfectBenar.pause();
    soundEfectSalah.pause();
    backsound.pause();

    if (h21Element.textContent === choice.textContent) {
      // imageKotak1.style.transformOrigin = "top left";
      // imageKotak1.style.transform = "rotate(180deg)";
      imageKotakSatu.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";
      updateScore(100);
      soundEfectBenar.play();
      backsound.play();
      backsound.valume = 0.1;

      setTimeout(function () {
        // imageKotak1.style.transformOrigin = "top left";
        // imageKotak1.style.transform = "rotate(0deg)";
        imageKotakSatu.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        game1.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game2.style.transform = "translate(-50%)";
        game1.style.display = "none";
      }, 6000);
    } else {
      // imageKotak1.style.transformOrigin = "top left";
      // imageKotak1.style.transform = "rotate(180deg)";
      imageKotakSatu.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak1.style.transformOrigin = "top left";
        // imageKotak1.style.transform = "rotate(0deg)";
        imageKotakSatu.style.transform = "translate(0)";
        popup1.style.display = "none";
        soundEfectSalah.pause();
        kecewa.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game1.style.transform = "translate(1000px)";
        // activeElements.forEach(function (el) {
        //   el.style.transform = "scale(0) rotate(720deg)";
        // });

        // active1.style.transform = "scale(0) rotate(720deg)";
      }, 5000);

      setTimeout(function () {
        game2.style.transform = "translate(-50%)";
        game1.style.display = "none";
        // active2.style.transform = "scale(1) rotate(720deg)";
      }, 6000);
    }
  });
});

////////////////////   GAME 2 ///////////////////////
const h22Element = document.querySelector(".h22");
const imageKotak2 = document.querySelector(".imagekotak2");
const choices2 = document.querySelectorAll(".choice2");
const game3 = document.querySelector(".game3");

choices2.forEach(function (choice2) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice2.addEventListener("click", function () {
    if (h22Element.textContent === choice2.textContent) {
      // imageKotak2.style.transformOrigin = "top left";
      // imageKotak2.style.transform = "rotate(180deg)";
      imageKotakDua.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak2.style.transformOrigin = "top left";
        // imageKotak2.style.transform = "rotate(0deg)";
        imageKotakDua.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game2.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game3.style.transform = "translate(-50%)";
        game2.style.display = "none";
      }, 6000);
    } else {
      // imageKotak2.style.transformOrigin = "top left";
      // imageKotak2.style.transform = "rotate(180deg)";
      imageKotakDua.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak2.style.transformOrigin = "top left";
        // imageKotak2.style.transform = "rotate(0deg)";
        imageKotakDua.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game2.style.transform = "translate(1000px)";

        // activeElements.forEach(function (el) {
        //   el.style.transform = "scale(0) rotate(720deg)";
        // });

        // active2.style.transform = "scale(0) rotate(720deg)";
      }, 5000);

      setTimeout(function () {
        game3.style.transform = "translate(-50%)";
        game2.style.display = "none";
      }, 6000);
    }
  });
});

//////////////////////// GAME 3/////////////////////
const h23Element = document.querySelector(".h23");
const imageKotak3 = document.querySelector(".imagekotak3");
const choices3 = document.querySelectorAll(".choice3");
const game4 = document.querySelector(".game4");

choices3.forEach(function (choice3) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice3.addEventListener("click", function () {
    if (h23Element.textContent === choice3.textContent) {
      // imageKotak3.style.transformOrigin = "top left";
      // imageKotak3.style.transform = "rotate(180deg)";
      imageKotakTiga.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak3.style.transformOrigin = "top left";
        // imageKotak3.style.transform = "rotate(0deg)";
        imageKotakTiga.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game3.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game4.style.transform = "translate(-50%)";
        game3.style.display = "none";
      }, 6000);
    } else {
      // imageKotak3.style.transformOrigin = "top left";
      // imageKotak3.style.transform = "rotate(180deg)";
      imageKotakTiga.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak3.style.transformOrigin = "top left";
        // imageKotak3.style.transform = "rotate(0deg)";
        imageKotakTiga.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game3.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game4.style.transform = "translate(-50%)";
        game3.style.display = "none";
      }, 6000);
    }
  });
});

////////////////////////GAME 4////////////////////
const h24Element = document.querySelector(".h24");
const imageKotak4 = document.querySelector(".imagekotak4");
const choices4 = document.querySelectorAll(".choice4");
const game5 = document.querySelector(".game5");

choices4.forEach(function (choice4) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice4.addEventListener("click", function () {
    if (h24Element.textContent === choice4.textContent) {
      // imageKotak4.style.transformOrigin = "top left";
      // imageKotak4.style.transform = "rotate(180deg)";
      imageKotakEmpat.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak4.style.transformOrigin = "top left";
        // imageKotak4.style.transform = "rotate(0deg)";
        imageKotakEmpat.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game4.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game5.style.transform = "translate(-50%)";
        game4.style.display = "none";
      }, 6000);
    } else {
      // imageKotak4.style.transformOrigin = "top left";
      // imageKotak4.style.transform = "rotate(180deg)";
      imageKotakEmpat.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak4.style.transformOrigin = "top left";
        // imageKotak4.style.transform = "rotate(0deg)";
        imageKotakEmpat.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game4.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game5.style.transform = "translate(-50%)";
        game4.style.display = "none";
      }, 6000);
    }
  });
});

///////////////////////////GAME 5 ///////////////////
const h25Element = document.querySelector(".h25");
const imageKotak5 = document.querySelector(".imagekotak5");
const choices5 = document.querySelectorAll(".choice5");
const game6 = document.querySelector(".game6");

choices5.forEach(function (choice5) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice5.addEventListener("click", function () {
    if (h25Element.textContent === choice5.textContent) {
      // imageKotak5.style.transformOrigin = "top left";
      // imageKotak5.style.transform = "rotate(180deg)";
      imageKotakLima.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak5.style.transformOrigin = "top left";
        // imageKotak5.style.transform = "rotate(0deg)";
        imageKotakLima.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game5.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game6.style.transform = "translate(-50%)";
        game5.style.display = "none";
      }, 6000);
    } else {
      // imageKotak5.style.transformOrigin = "top left";
      // imageKotak5.style.transform = "rotate(180deg)";
      imageKotakLima.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak5.style.transformOrigin = "top left";
        // imageKotak5.style.transform = "rotate(0deg)";
        imageKotakLima.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game5.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game6.style.transform = "translate(-50%)";
        game5.style.display = "none";
      }, 6000);
    }
  });
});

//////////////////////////////////////GAME 6//////////////
const h26Element = document.querySelector(".h26");
const imageKotak6 = document.querySelector(".imagekotak6");
const choices6 = document.querySelectorAll(".choice6");
const game7 = document.querySelector(".game7");

choices6.forEach(function (choice6) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice6.addEventListener("click", function () {
    if (h26Element.textContent === choice6.textContent) {
      // imageKotak6.style.transformOrigin = "top left";
      // imageKotak6.style.transform = "rotate(180deg)";
      imageKotakEnam.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak6.style.transformOrigin = "top left";
        // imageKotak6.style.transform = "rotate(0deg)";
        imageKotakEnam.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game6.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game7.style.transform = "translate(-50%)";
        game6.style.display = "none";
      }, 6000);
    } else {
      // imageKotak6.style.transformOrigin = "top left";
      // imageKotak6.style.transform = "rotate(180deg)";
      imageKotakEnam.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak6.style.transformOrigin = "top left";
        // imageKotak6.style.transform = "rotate(0deg)";
        imageKotakEnam.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game6.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game7.style.transform = "translate(-50%)";
        game6.style.display = "none";
      }, 6000);
    }
  });
});

////////////////////////////////////GAME 7 ////////////////////
const h27Element = document.querySelector(".h27");
const imageKotak7 = document.querySelector(".imagekotak7");
const choices7 = document.querySelectorAll(".choice7");
const game8 = document.querySelector(".game8");

choices7.forEach(function (choice7) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice7.addEventListener("click", function () {
    if (h27Element.textContent === choice7.textContent) {
      // imageKotak7.style.transformOrigin = "top left";
      // imageKotak7.style.transform = "rotate(180deg)";
      imageKotakTujuh.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak7.style.transformOrigin = "top left";
        // imageKotak7.style.transform = "rotate(0deg)";
        imageKotakTujuh.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game7.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game8.style.transform = "translate(-50%)";
        game7.style.display = "none";
      }, 6000);
    } else {
      // imageKotak7.style.transformOrigin = "top left";
      // imageKotak7.style.transform = "rotate(180deg)";
      imageKotakTujuh.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak7.style.transformOrigin = "top left";
        // imageKotak7.style.transform = "rotate(0deg)";
        imageKotakTujuh.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game7.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game8.style.transform = "translate(-50%)";
        game7.style.display = "none";
      }, 6000);
    }
  });
});

////////////////////////////GAME 8 /////////////////////
const h28Element = document.querySelector(".h28");
const imageKotak8 = document.querySelector(".imagekotak8");
const choices8 = document.querySelectorAll(".choice8");
const game9 = document.querySelector(".game9");

choices8.forEach(function (choice8) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice8.addEventListener("click", function () {
    if (h28Element.textContent === choice8.textContent) {
      // imageKotak8.style.transformOrigin = "top left";
      // imageKotak8.style.transform = "rotate(180deg)";
      imageKotakDelapan.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak8.style.transformOrigin = "top left";
        // imageKotak8.style.transform = "rotate(0deg)";
        imageKotakDelapan.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game8.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game9.style.transform = "translate(-50%)";
        game8.style.display = "none";
      }, 6000);
    } else {
      // imageKotak8.style.transformOrigin = "top left";
      // imageKotak8.style.transform = "rotate(180deg)";
      imageKotakDelapan.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak8.style.transformOrigin = "top left";
        // imageKotak8.style.transform = "rotate(0deg)";
        imageKotakDelapan.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game8.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game9.style.transform = "translate(-50%)";
        game8.style.display = "none";
      }, 6000);
    }
  });
});

///////////////////////////////GAME  9 ///////////////////////
const h29Element = document.querySelector(".h29");
const imageKotak9 = document.querySelector(".imagekotak9");
const choices9 = document.querySelectorAll(".choice9");
const game10 = document.querySelector(".game10");

choices9.forEach(function (choice9) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice9.addEventListener("click", function () {
    if (h29Element.textContent === choice9.textContent) {
      // imageKotak9.style.transformOrigin = "top left";
      // imageKotak9.style.transform = "rotate(180deg)";
      imageKotaksembilan.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak9.style.transformOrigin = "top left";
        // imageKotak9.style.transform = "rotate(0deg)";
        imageKotaksembilan.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game9.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game10.style.transform = "translate(-50%)";
        game9.style.display = "none";
      }, 6000);
    } else {
      // imageKotak9.style.transformOrigin = "top left";
      // imageKotak9.style.transform = "rotate(180deg)";
      imageKotaksembilan.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak9.style.transformOrigin = "top left";
        // imageKotak9.style.transform = "rotate(0deg)";
        imageKotaksembilan.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game9.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game10.style.transform = "translate(-50%)";
        game9.style.display = "none";
      }, 6000);
    }
  });
});

//////////////////////////GAME 10 //////////////////
const h210Element = document.querySelector(".h210");
const imageKotak10 = document.querySelector(".imagekotak10");
const choices10 = document.querySelectorAll(".choice10");
const game11 = document.querySelector(".game11");

choices10.forEach(function (choice10) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice10.addEventListener("click", function () {
    if (h210Element.textContent === choice10.textContent) {
      // imageKotak10.style.transformOrigin = "top left";
      // imageKotak10.style.transform = "rotate(180deg)";
      imageKotakSepuluh.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak10.style.transformOrigin = "top left";
        // imageKotak10.style.transform = "rotate(0deg)";
        imageKotakSepuluh.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game10.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game11.style.transform = "translate(-50%)";
        game10.style.display = "none";
      }, 6000);
    } else {
      // imageKotak10.style.transformOrigin = "top left";
      // imageKotak10.style.transform = "rotate(180deg)";
      imageKotakSepuluh.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak10.style.transformOrigin = "top left";
        // imageKotak10.style.transform = "rotate(0deg)";
        imageKotakSepuluh.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game10.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game11.style.transform = "translate(-50%)";
        game10.style.display = "none";
      }, 6000);
    }
  });
});

////////////////////////////GAME 11 ///////////////////
const h211Element = document.querySelector(".h211");
const imageKotak11 = document.querySelector(".imagekotak11");
const choices11 = document.querySelectorAll(".choice11");
const game12 = document.querySelector(".game12");

choices11.forEach(function (choice11) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice11.addEventListener("click", function () {
    if (h211Element.textContent === choice11.textContent) {
      // imageKotak11.style.transformOrigin = "top left";
      // imageKotak11.style.transform = "rotate(180deg)";
      imageKotakSebelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak11.style.transformOrigin = "top left";
        // imageKotak11.style.transform = "rotate(0deg)";
        imageKotakSebelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game11.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game12.style.transform = "translate(-50%)";
        game11.style.display = "none";
      }, 6000);
    } else {
      // imageKotak11.style.transformOrigin = "top left";
      // imageKotak11.style.transform = "rotate(180deg)";
      imageKotakSebelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak11.style.transformOrigin = "top left";
        // imageKotak11.style.transform = "rotate(0deg)";
        imageKotakSebelas.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game11.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game12.style.transform = "translate(-50%)";
        game11.style.display = "none";
      }, 6000);
    }
  });
});

//////////////////////////  GAME 12 ////////////////////
const h212Element = document.querySelector(".h212");
const imageKotak12 = document.querySelector(".imagekotak12");
const choices12 = document.querySelectorAll(".choice12");
const game13 = document.querySelector(".game13");

choices12.forEach(function (choice12) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice12.addEventListener("click", function () {
    if (h212Element.textContent === choice12.textContent) {
      // imageKotak12.style.transformOrigin = "top left";
      // imageKotak12.style.transform = "rotate(180deg)";
      imageKotakDuabelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak12.style.transformOrigin = "top left";
        // imageKotak12.style.transform = "rotate(0deg)";
        imageKotakDuabelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game12.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game13.style.transform = "translate(-50%)";
        game12.style.display = "none";
      }, 6000);
    } else {
      // imageKotak12.style.transformOrigin = "top left";
      // imageKotak12.style.transform = "rotate(180deg)";
      imageKotakDuabelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak12.style.transformOrigin = "top left";
        // imageKotak12.style.transform = "rotate(0deg)";
        imageKotakDuabelas.style.transform = "translate(400px)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game12.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game13.style.transform = "translate(-50%)";
        game12.style.display = "none";
      }, 6000);
    }
  });
});

/////////////////////////GAME 13 //////////////////////////
const h213Element = document.querySelector(".h213");
const imageKotak13 = document.querySelector(".imagekotak13");
const choices13 = document.querySelectorAll(".choice13");
const game14 = document.querySelector(".game14");

choices13.forEach(function (choice13) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice13.addEventListener("click", function () {
    if (h213Element.textContent === choice13.textContent) {
      // imageKotak13.style.transformOrigin = "top left";
      // imageKotak13.style.transform = "rotate(180deg)";
      imageKotakTigabelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak13.style.transformOrigin = "top left";
        // imageKotak13.style.transform = "rotate(0deg)";
        imageKotakTigabelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game13.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game14.style.transform = "translate(-50%)";
        game13.style.display = "none";
      }, 6000);
    } else {
      // imageKotak13.style.transformOrigin = "top left";
      // imageKotak13.style.transform = "rotate(180deg)";
      imageKotakTigabelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak13.style.transformOrigin = "top left";
        // imageKotak13.style.transform = "rotate(0deg)";
        imageKotakTigabelas.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game13.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game14.style.transform = "translate(-50%)";
        game13.style.display = "none";
      }, 6000);
    }
  });
});

//////////////////////////////GAME 14 ///////////////////////
const h214Element = document.querySelector(".h214");
const imageKotak14 = document.querySelector(".imagekotak14");
const choices14 = document.querySelectorAll(".choice14");
const game15 = document.querySelector(".game15");

choices14.forEach(function (choice14) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice14.addEventListener("click", function () {
    if (h214Element.textContent === choice14.textContent) {
      // imageKotak14.style.transformOrigin = "top left";
      // imageKotak14.style.transform = "rotate(180deg)";
      imageKotakEmpatbelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak14.style.transformOrigin = "top left";
        // imageKotak14.style.transform = "rotate(0deg)";
        imageKotakEmpatbelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game14.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game15.style.transform = "translate(-50%)";
        game14.style.display = "none";
      }, 6000);
    } else {
      // imageKotak14.style.transformOrigin = "top left";
      // imageKotak14.style.transform = "rotate(180deg)";
      imageKotakEmpatbelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak14.style.transformOrigin = "top left";
        // imageKotak14.style.transform = "rotate(0deg)";
        imageKotakEmpatbelas.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game14.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game15.style.transform = "translate(-50%)";
        game14.style.display = "none";
      }, 6000);
    }
  });
});

/////////////////////////GAME 15 ////////////////////////
const h215Element = document.querySelector(".h215");
const imageKotak15 = document.querySelector(".imagekotak15");
const choices15 = document.querySelectorAll(".choice15");
const game16 = document.querySelector(".game16");

choices15.forEach(function (choice15) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice15.addEventListener("click", function () {
    if (h215Element.textContent === choice15.textContent) {
      // imageKotak15.style.transformOrigin = "top left";
      // imageKotak15.style.transform = "rotate(180deg)";
      imageKotakLimabelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak15.style.transformOrigin = "top left";
        // imageKotak15.style.transform = "rotate(0deg)";
        imageKotakLimabelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game15.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game16.style.transform = "translate(-50%)";
        game15.style.display = "none";
      }, 6000);
    } else {
      // imageKotak15.style.transformOrigin = "top left";
      // imageKotak15.style.transform = "rotate(180deg)";
      imageKotakLimabelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak15.style.transformOrigin = "top left";
        // imageKotak15.style.transform = "rotate(0deg)";
        imageKotakLimabelas.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game15.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game16.style.transform = "translate(-50%)";
        game15.style.display = "none";
      }, 6000);
    }
  });
});
/////////////////////////// game 16    //////////////////////
const h216Element = document.querySelector(".h216");
const imageKotak16 = document.querySelector(".imagekotak16");
const choices16 = document.querySelectorAll(".choice16");
const game17 = document.querySelector(".game17");

choices16.forEach(function (choice16) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice16.addEventListener("click", function () {
    if (h216Element.textContent === choice16.textContent) {
      // imageKotak16.style.transformOrigin = "top left";
      // imageKotak16.style.transform = "rotate(180deg)";
      imageKotakEnambelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak16.style.transformOrigin = "top left";
        // imageKotak16.style.transform = "rotate(0deg)";
        imageKotakEnambelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game16.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game17.style.transform = "translate(-50%)";
        game16.style.display = "none";
      }, 6000);
    } else {
      // imageKotak16.style.transformOrigin = "top left";
      // imageKotak16.style.transform = "rotate(180deg)";
      imageKotakEnambelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak16.style.transformOrigin = "top left";
        // imageKotak16.style.transform = "rotate(0deg)";
        imageKotakEnambelas.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game16.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game17.style.transform = "translate(-50%)";
        game16.style.display = "none";
      }, 6000);
    }
  });
});

//////////////////////////////GAME  17   ////////////////////////
const h217Element = document.querySelector(".h217");
const imageKotak17 = document.querySelector(".imagekotak17");
const choices17 = document.querySelectorAll(".choice17");
const game18 = document.querySelector(".game18");

choices17.forEach(function (choice17) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice17.addEventListener("click", function () {
    if (h217Element.textContent === choice17.textContent) {
      // imageKotak17.style.transformOrigin = "top left";
      // imageKotak17.style.transform = "rotate(180deg)";
      imageKotakTujuhbelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak17.style.transformOrigin = "top left";
        // imageKotak17.style.transform = "rotate(0deg)";
        imageKotakTujuhbelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game17.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game18.style.transform = "translate(-50%)";
        game17.style.display = "none";
      }, 6000);
    } else {
      // imageKotak17.style.transformOrigin = "top left";
      // imageKotak17.style.transform = "rotate(180deg)";
      imageKotakTujuhbelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak17.style.transformOrigin = "top left";
        // imageKotak17.style.transform = "rotate(0deg)";
        imageKotakTujuhbelas.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game17.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game18.style.transform = "translate(-50%)";
        game17.style.display = "none";
      }, 6000);
    }
  });
});

//////////////////////////////  GAME  18 ///////////////////

const h218Element = document.querySelector(".h218");
const imageKotak18 = document.querySelector(".imagekotak18");
const choices18 = document.querySelectorAll(".choice18");
const game19 = document.querySelector(".game19");

choices18.forEach(function (choice18) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice18.addEventListener("click", function () {
    if (h218Element.textContent === choice18.textContent) {
      // imageKotak18.style.transformOrigin = "top left";
      // imageKotak18.style.transform = "rotate(180deg)";
      imageKotakDelapanbelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak18.style.transformOrigin = "top left";
        // imageKotak18.style.transform = "rotate(0deg)";
        imageKotakDelapanbelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game18.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game19.style.transform = "translate(-50%)";
        game18.style.display = "none";
      }, 6000);
    } else {
      // imageKotak18.style.transformOrigin = "top left";
      // imageKotak18.style.transform = "rotate(180deg)";
      imageKotakDelapanbelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak18.style.transformOrigin = "top left";
        // imageKotak18.style.transform = "rotate(0deg)";
        imageKotakDelapanbelas.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game18.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game19.style.transform = "translate(-50%)";
        game18.style.display = "none";
      }, 6000);
    }
  });
});

///////////////////////////  GAME  19 ////////////////////////

const h219Element = document.querySelector(".h219");
const imageKotak19 = document.querySelector(".imagekotak19");
const choices19 = document.querySelectorAll(".choice19");
const game20 = document.querySelector(".game20");

choices19.forEach(function (choice19) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice19.addEventListener("click", function () {
    if (h219Element.textContent === choice19.textContent) {
      // imageKotak19.style.transformOrigin = "top left";
      // imageKotak19.style.transform = "rotate(180deg)";
      imageKotakSembilanbelas.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak19.style.transformOrigin = "top left";
        // imageKotak19.style.transform = "rotate(0deg)";
        imageKotakSembilanbelas.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game19.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game20.style.transform = "translate(-50%)";
        game19.style.display = "none";
      }, 6000);
    } else {
      // imageKotak19.style.transformOrigin = "top left";
      // imageKotak19.style.transform = "rotate(180deg)";
      imageKotakSembilanbelas.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak19.style.transformOrigin = "top left";
        // imageKotak19.style.transform = "rotate(0deg)";
        imageKotakSembilanbelas.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game19.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        game20.style.transform = "translate(-50%)";
        game19.style.display = "none";
      }, 6000);
    }
  });
});

///////////////////////////////  GAME 20  ///////////////////////
const h220Element = document.querySelector(".h220");
const imageKotak20 = document.querySelector(".imagekotak20");
const choices20 = document.querySelectorAll(".choice20");

choices20.forEach(function (choice20) {
  soundEfectBenar.pause();
  soundEfectSalah.pause();
  choice20.addEventListener("click", function () {
    if (h220Element.textContent === choice20.textContent) {
      // imageKotak20.style.transformOrigin = "top left";
      // imageKotak20.style.transform = "rotate(180deg)";
      imageKotakDuapuluh.style.transform = "translate(400px)";
      popup.style.display = "block";
      aplause.style.display = "block";

      updateScore(100);
      soundEfectBenar.play();

      setTimeout(function () {
        // imageKotak20.style.transformOrigin = "top left";
        // imageKotak20.style.transform = "rotate(0deg)";
        imageKotakDuapuluh.style.transform = "translate(0)";
        popup.style.display = "none";
        aplause.style.display = "none";
      }, 3000);

      setTimeout(function () {
        game20.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        end1.style.display = "block";
        gameContainer.style.display = "none";
        game20.style.display = "none";
      }, 6000);
    } else {
      // imageKotak20.style.transformOrigin = "top left";
      // imageKotak20.style.transform = "rotate(180deg)";
      imageKotakDuapuluh.style.transform = "translate(400px)";
      popup1.style.display = "block";
      kecewa.style.display = "block";

      updateScore(-50);
      soundEfectSalah.play();

      setTimeout(function () {
        // imageKotak20.style.transformOrigin = "top left";
        // imageKotak20.style.transform = "rotate(0deg)";
        imageKotakDuapuluh.style.transform = "translate(0)";
        popup1.style.display = "none";
        kecewa.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        game20.style.transform = "translate(1000px)";
      }, 5000);

      setTimeout(function () {
        end1.style.display = "block";
        gameContainer.style.display = "none";
        game20.style.display = "none";
      }, 6000);
    }
  });
});

////// BATAS  ////////////////////////////

// let userScore = 0;

// // Function to update the score
// function updateScore(points) {
//   userScore += points;
//   const scoreElement = document.querySelector(".user-score");
//   scoreElement.textContent = userScore;

//   if (userScore >= 1850) {
//     setTimeout(function () {
//       window.location.href = "end.html";
//     }, 6000);

//     setTimeout(function () {
//       document.querySelector(".game-container").style.display = "none";
//     }, 5000);
//   }
// }

// // Function to handle game completion and transition to the next game
// function handleGameCompletion(currentGame, nextGame) {
//   const currentGameElement = document.querySelector(`.game${currentGame}`);
//   const nextGameElement = document.querySelector(`.game${currentGame + 1}`);

//   setTimeout(function () {
//     currentGame.style.transform = "translate(1000px)";
//   }, 5000);

//   setTimeout(function () {
//     nextGame.style.transform = "translate(-50%)";
//   }, 6000);
// }

// // Function to handle choice selection in a game
// function handleChoiceSelection(correctChoice, correctSound, incorrectSound, popupElement, correctEffectElement, correctPoints, incorrectPoints, currentGame, nextGame) {
//   return function () {
//     correctSound.pause();
//     incorrectSound.pause();
//     backsound.pause();

//     if (h21Element.textContent === correctChoice) {
//       imageKotakSatu.style.transform = "translate(400px)";
//       popupElement.style.display = "block";
//       correctEffectElement.style.display = "block";
//       updateScore(correctPoints);
//       correctSound.play();
//       backsound.play();
//       backsound.volume = 0.1;

//       setTimeout(function () {
//         imageKotakSatu.style.transform = "translate(0)";
//         popupElement.style.display = "none";
//         correctEffectElement.style.display = "none";
//         correctSound.pause();
//       }, 3000);

//       handleGameCompletion(currentGame, nextGame);
//     } else {
//       imageKotakSatu.style.transform = "translate(400px)";
//       popup1.style.display = "block";
//       kecewa.style.display = "block";

//       updateScore(incorrectPoints);
//       incorrectSound.play();

//       setTimeout(function () {
//         imageKotakSatu.style.transform = "translate(0)";
//         popup1.style.display = "none";
//         kecewa.style.display = "none";
//         incorrectSound.pause();
//       }, 3000);

//       handleGameCompletion(currentGame, nextGame);
//     }
//   };
// }

// // Game 1
// const game1 = document.querySelector(".game1");
// const game2 = document.querySelector(".game2");

// choices.forEach(function (choice) {
//   choice.addEventListener("click", handleChoiceSelection(choice.textContent, soundEfectBenar, soundEfectSalah, popup, aplause, 100, -50, game1, game2));
// });

// // Game 2
// const game3 = document.querySelector(".game3");

// choices2.forEach(function (choice2) {
//   choice2.addEventListener("click", handleChoiceSelection(choice2.textContent, soundEfectBenar, soundEfectSalah, popup, aplause, 100, -50, game2, game3));
// });
