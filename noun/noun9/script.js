///////////////PENGATURAN SCORE///////////////////////////////
let userScore = 0;

// Function to update the score
function updateScore(points) {
  userScore += points;

  // You can display the score or perform other actions here

  // Update the score element on the screen
  const scoreElement = document.querySelector(".user-score");
  const end = document.querySelector(".end");
  const end1 = document.querySelector(".end1");
  const scoreContainer = document.querySelector(".score-container");
  const container = document.querySelector(".container");
  const judul = document.querySelector(".judul");
  scoreElement.textContent = userScore;

  if (userScore >= 1850) {
    setTimeout(function () {
      window.location.href = "end.html";
      // scoreContainer.style.display = "none";
      // container.style.display = "none";
      // judul.style.display = "none";
      // end.style.display = "block";
    }, 4000);

    setTimeout(function () {
      // gameContainer.style.display = "none";
      scoreContainer, (style.display = "none");
    }, 5000);
  }
}

///////////////////GAME 1  //////////////////////////////////////
const flipCard1 = document.querySelector(".flipcard1");
const choices1 = document.querySelectorAll(".choice1");
const betul = document.querySelector(".betul");
const salah = document.querySelector(".salah");
const jawab1 = document.querySelector(".jawab1");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const respon1 = document.querySelector(".respon1");
const respon2 = document.querySelector(".respon2");
const soundEfectBenar = document.querySelector(".soundefect-benar");
const soundEfectSalah = document.querySelector(".soundefect-salah");
const bintang = document.querySelector(".bintang");
const semangka = document.querySelector(".semangka");
const tombolMateri = document.querySelector(".tombol-materi");
const dua = document.querySelector(".dua");
const backsound = document.querySelector(".backsound");
const popup = document.querySelector(".popup");
const popup1 = document.querySelector(".popup1");

choices1.forEach(function (choice1) {
  choice1.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab1.textContent === choice1.textContent) {
      flipCard1.style.transform = "rotateY(180deg)";
      backsound.play();

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      bintang.style.display = "block";
      popup.style.display = "block";

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card1.style.transform = "translate(1000px)";

        bintang.style.display = "none";
        popup.style.display = "none";

        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card2.style.transform = "translate(-50%)";
        card1.style.display = "none";
      }, 4000);
    } else {
      flipCard1.style.transform = "rotateY(180deg)";
      backsound.play();

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";
      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card1.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card2.style.transform = "translate(-50%)";
        card1.style.display = "none";
      }, 4000);
    }
  });
});

///////////////////GAME 2  ////////////////////////////////
const jawab2 = document.querySelector(".jawab2");
const card3 = document.querySelector(".card3");
const choices2 = document.querySelectorAll(".choice2");
const flipCard2 = document.querySelector(".flipcard2");
choices2.forEach(function (choice2) {
  choice2.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar

    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab2.textContent === choice2.textContent) {
      flipCard2.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";

      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card2.style.transform = "translate(1000px)";

        bintang.style.display = "none";
        popup.style.display = "none";

        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card3.style.transform = "translate(-50%)";
        card2.style.display = "none";
      }, 4000);
    } else {
      flipCard2.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";
      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card2.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card3.style.transform = "translate(-50%)";
        card2.style.display = "none";
      }, 4000);
    }
  });
});

///////////////////////GAME 3//////////////////////////

const jawab3 = document.querySelector(".jawab3");
const card4 = document.querySelector(".card4");
const choices3 = document.querySelectorAll(".choice3");
const flipCard3 = document.querySelector(".flipcard3");
choices3.forEach(function (choice3) {
  choice3.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab3.textContent === choice3.textContent) {
      flipCard3.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";

      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card3.style.transform = "translate(1000px)";

        bintang.style.display = "none";
        popup.style.display = "none";

        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card4.style.transform = "translate(-50%)";
        card3.style.display = "none";
      }, 4000);
    } else {
      flipCard3.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";
      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card3.style.transform = "translate(1000px)";

        semangka.style.display = "none";

        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card4.style.transform = "translate(-50%)";
        card3.style.display = "none";
      }, 4000);
    }
  });
});

/////////////////////////GAME 4 ///////////////////////////////////////////

const jawab4 = document.querySelector(".jawab4");
const card5 = document.querySelector(".card5");
const choices4 = document.querySelectorAll(".choice4");
const flipCard4 = document.querySelector(".flipcard4");
choices4.forEach(function (choice4) {
  choice4.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab4.textContent === choice4.textContent) {
      flipCard4.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card4.style.transform = "translate(1000px)";

        bintang.style.display = "none";
        popup.style.display = "none";

        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card5.style.transform = "translate(-50%)";
        card4.style.display = "none";
      }, 4000);
    } else {
      flipCard4.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card4.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card5.style.transform = "translate(-50%)";
        card4.style.display = "none";
      }, 4000);
    }
  });
});

///////////////// GAME 5  //////////////////////////////////

const jawab5 = document.querySelector(".jawab5");
const card6 = document.querySelector(".card6");
const choices5 = document.querySelectorAll(".choice5");
const flipCard5 = document.querySelector(".flipcard5");
choices5.forEach(function (choice5) {
  choice5.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab5.textContent === choice5.textContent) {
      flipCard5.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card5.style.transform = "translate(1000px)";

        bintang.style.display = "none";
        popup.style.display = "none";

        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card6.style.transform = "translate(-50%)";
        card5.style.display = "none";
      }, 4000);
    } else {
      flipCard5.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card5.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card6.style.transform = "translate(-50%)";
        card5.style.display = "none";
      }, 4000);
    }
  });
});

////////////////GAME 6 ///////////////////////////////

const jawab6 = document.querySelector(".jawab6");
const card7 = document.querySelector(".card7");
const choices6 = document.querySelectorAll(".choice6");
const flipCard6 = document.querySelector(".flipcard6");
choices6.forEach(function (choice6) {
  choice6.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab6.textContent === choice6.textContent) {
      flipCard6.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card6.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card7.style.transform = "translate(-50%)";
        card6.style.display = "none";
      }, 4000);
    } else {
      flipCard6.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card6.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card7.style.transform = "translate(-50%)";
        card6.style.display = "none";
      }, 4000);
    }
  });
});

/////////////////////GAME 7 ///////////////////////////////

const jawab7 = document.querySelector(".jawab7");
const card8 = document.querySelector(".card8");
const choices7 = document.querySelectorAll(".choice7");
const flipCard7 = document.querySelector(".flipcard7");
choices7.forEach(function (choice7) {
  choice7.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab7.textContent === choice7.textContent) {
      flipCard7.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card7.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card8.style.transform = "translate(-50%)";
        card7.style.display = "none";
      }, 4000);
    } else {
      flipCard7.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card7.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card8.style.transform = "translate(-50%)";
        card7.style.display = "none";
      }, 4000);
    }
  });
});

/////////////////GAME 8 /////////////////////////////////////////////

const jawab8 = document.querySelector(".jawab8");
const card9 = document.querySelector(".card9");
const choices8 = document.querySelectorAll(".choice8");
const flipCard8 = document.querySelector(".flipcard8");
choices8.forEach(function (choice8) {
  choice8.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab8.textContent === choice8.textContent) {
      flipCard8.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card8.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card9.style.transform = "translate(-50%)";
        card8.style.display = "none";
      }, 4000);
    } else {
      flipCard8.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card8.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card9.style.transform = "translate(-50%)";
        card8.style.display = "none";
      }, 4000);
    }
  });
});

////////////////////////GAME 9 /////////////////////////

const jawab9 = document.querySelector(".jawab9");
const card10 = document.querySelector(".card10");
const choices9 = document.querySelectorAll(".choice9");
const flipCard9 = document.querySelector(".flipcard9");
choices9.forEach(function (choice9) {
  choice9.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab9.textContent === choice9.textContent) {
      flipCard9.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card9.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card10.style.transform = "translate(-50%)";
        card9.style.display = "none";
      }, 4000);
    } else {
      flipCard9.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card9.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card10.style.transform = "translate(-50%)";
        card9.style.display = "none";
      }, 4000);
    }
  });
});

////////////////////////GAME 10 ///////////////////////////////////////////

const jawab10 = document.querySelector(".jawab10");
const card11 = document.querySelector(".card11");
const choices10 = document.querySelectorAll(".choice10");
const flipCard10 = document.querySelector(".flipcard10");
choices10.forEach(function (choice10) {
  choice10.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab10.textContent === choice10.textContent) {
      flipCard10.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card10.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card11.style.transform = "translate(-50%)";
        card10.style.display = "none";
      }, 4000);
    } else {
      flipCard10.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card10.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card11.style.transform = "translate(-50%)";
        card10.style.display = "none";
      }, 4000);
    }
  });
});

//////////////////GAME 11 ///////////////////////////

const jawab11 = document.querySelector(".jawab11");
const card12 = document.querySelector(".card12");
const choices11 = document.querySelectorAll(".choice11");
const flipCard11 = document.querySelector(".flipcard11");
choices11.forEach(function (choice11) {
  choice11.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab11.textContent === choice11.textContent) {
      flipCard11.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card11.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card12.style.transform = "translate(-50%)";
        card11.style.display = "none";
      }, 4000);
    } else {
      flipCard11.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card11.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card12.style.transform = "translate(-50%)";
        card11.style.display = "none";
      }, 4000);
    }
  });
});

/////////////////////////GAME 12 //////////////////////////

const jawab12 = document.querySelector(".jawab12");
const card13 = document.querySelector(".card13");
const choices12 = document.querySelectorAll(".choice12");
const flipCard12 = document.querySelector(".flipcard12");
choices12.forEach(function (choice12) {
  choice12.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab12.textContent === choice12.textContent) {
      flipCard12.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card12.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card13.style.transform = "translate(-50%)";
        card12.style.display = "none";
      }, 4000);
    } else {
      flipCard12.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card12.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 4000);

      setTimeout(function () {
        card13.style.transform = "translate(-50%)";
        card12.style.display = "none";
      }, 4000);
    }
  });
});

////////////////////////// GAME 13 /////////////////////////////

const jawab13 = document.querySelector(".jawab13");
const card14 = document.querySelector(".card14");
const choices13 = document.querySelectorAll(".choice13");
const flipCard13 = document.querySelector(".flipcard13");
choices13.forEach(function (choice13) {
  choice13.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab13.textContent === choice13.textContent) {
      flipCard13.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card13.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card14.style.transform = "translate(-50%)";
        card13.style.display = "none";
      }, 4000);
    } else {
      flipCard13.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card13.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card14.style.transform = "translate(-50%)";
        card13.style.display = "none";
      }, 4000);
    }
  });
});

/////////////////////////////// GAME 14 ///////////////////////////

const jawab14 = document.querySelector(".jawab14");
const card15 = document.querySelector(".card15");
const choices14 = document.querySelectorAll(".choice14");
const flipCard14 = document.querySelector(".flipcard14");
choices14.forEach(function (choice14) {
  choice14.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab14.textContent === choice14.textContent) {
      flipCard14.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card14.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card15.style.transform = "translate(-50%)";
        card14.style.display = "none";
      }, 4000);
    } else {
      flipCard14.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card14.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card15.style.transform = "translate(-50%)";
        card14.style.display = "none";
      }, 4000);
    }
  });
});

////////////////////// GAME 15 ////////////////////////////

const jawab15 = document.querySelector(".jawab15");
const card16 = document.querySelector(".card16");
const choices15 = document.querySelectorAll(".choice15");
const flipCard15 = document.querySelector(".flipcard15");
choices15.forEach(function (choice15) {
  choice15.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab15.textContent === choice15.textContent) {
      flipCard15.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card15.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card16.style.transform = "translate(-50%)";
        card15.style.display = "none";
      }, 4000);
    } else {
      flipCard15.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card15.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card16.style.transform = "translate(-50%)";
        card15.style.display = "none";
      }, 4000);
    }
  });
});

///////////////////// GAME 16 /////////////////////////////////

const jawab16 = document.querySelector(".jawab16");
const card17 = document.querySelector(".card17");
const choices16 = document.querySelectorAll(".choice16");
const flipCard16 = document.querySelector(".flipcard16");
choices16.forEach(function (choice16) {
  choice16.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab16.textContent === choice16.textContent) {
      flipCard16.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card16.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card17.style.transform = "translate(-50%)";
        card16.style.display = "none";
      }, 4000);
    } else {
      flipCard16.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card16.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card17.style.transform = "translate(-50%)";
        card16.style.display = "none";
      }, 4000);
    }
  });
});

//////////////////// GAME 17 ///////////////////////////////////////////////

const jawab17 = document.querySelector(".jawab17");
const card18 = document.querySelector(".card18");
const choices17 = document.querySelectorAll(".choice17");
const flipCard17 = document.querySelector(".flipcard17");
choices17.forEach(function (choice17) {
  choice17.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab17.textContent === choice17.textContent) {
      flipCard17.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card17.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card18.style.transform = "translate(-50%)";
        card17.style.display = "none";
      }, 4000);
    } else {
      flipCard17.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card17.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card18.style.transform = "translate(-50%)";
        card17.style.display = "none";
      }, 4000);
    }
  });
});

/////////////////////// GAME 18 ////////////////////

const jawab18 = document.querySelector(".jawab18");
const card19 = document.querySelector(".card19");
const choices18 = document.querySelectorAll(".choice18");
const flipCard18 = document.querySelector(".flipcard18");
choices18.forEach(function (choice18) {
  choice18.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab18.textContent === choice18.textContent) {
      flipCard18.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card18.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card19.style.transform = "translate(-50%)";
        card18.style.display = "none";
      }, 4000);
    } else {
      flipCard18.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card18.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card19.style.transform = "translate(-50%)";
        card18.style.display = "none";
      }, 4000);
    }
  });
});

///////////////////////////// GAME 19 /////////////////

const jawab19 = document.querySelector(".jawab19");
const flipCard19 = document.querySelector(".flipcard19");
const card20 = document.querySelector(".card20");
const choices19 = document.querySelectorAll(".choice19");
const judul = document.querySelector(".judul");
choices19.forEach(function (choice19) {
  choice19.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab19.textContent === choice19.textContent) {
      flipCard19.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card19.style.transform = "translate(1000px)";
        popup.style.display = "none";
        bintang.style.display = "none";
        soundEfectBenar.pause();
      }, 3000);

      setTimeout(function () {
        card20.style.transform = "translate(-50%)";
        card19.style.display = "none";
      }, 4000);
    } else {
      flipCard19.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card19.style.transform = "translate(1000px)";

        semangka.style.display = "none";
        soundEfectSalah.pause();
      }, 3000);

      setTimeout(function () {
        card20.style.transform = "translate(-50%)";
        card19.style.display = "none";
      }, 4000);
    }
  });
});

///////////////////////////GAME 20 ////////////////////////////

const jawab20 = document.querySelector(".jawab20");
const end1 = document.querySelector(".end1");
const choices20 = document.querySelectorAll(".choice20");
const flipCard20 = document.querySelector(".flipcard20");
const scoreContainer = document.querySelector(".score-container");

choices20.forEach(function (choice20) {
  choice20.addEventListener("click", function () {
    // Memberhentikan sound effect sebelumnya jika sedang diputar
    soundEfectBenar.pause();
    soundEfectSalah.pause();

    if (jawab20.textContent === choice20.textContent) {
      flipCard20.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      popup.style.display = "block";

      // tombolMateri.style.display = "none";

      // Menampilkan pesan "betul" dan memainkan sound effect benar
      updateScore(100);

      soundEfectBenar.play();

      // Menghentikan sound effect benar setelah 4 detik
      setTimeout(function () {
        card20.style.transform = "translate(1000px)";
        popup.style.display = "none";
        soundEfectBenar.pause();
        end1.style.display = "block";
        judul.style.display = "none";
        scoreContainer.style.display = "none";
        bintang.style.display = "none";
        tombolMateri.style.display = "none";
        card20.style.display = "none";
      }, 4000);
    } else {
      flipCard20.style.transform = "rotateY(180deg)";

      // Menampilkan pesan "salah" dan memainkan sound effect salah

      semangka.style.display = "block";

      soundEfectSalah.play();
      updateScore(-50);

      // Menghentikan sound effect salah setelah 4 detik
      setTimeout(function () {
        card20.style.transform = "translate(1000px)";

        end1.style.display = "block";
        judul.style.display = "none";
        scoreContainer.style.display = "none";
        semangka.style.display = "none";
        tombolMateri.style.display = "none";
        soundEfectSalah.pause();
        card20.style.display = "none";
      }, 4000);
    }
  });
});

// Function to handle game logic
// function playGame(data) {
//   const { flipCard, choices, correctAnswer, card, nextCard, soundEfectBenar, soundEfectSalah } = data;

//   choices.forEach(function (choice) {
//     choice.addEventListener("click", function () {
//       // Memberhentikan sound effect sebelumnya jika sedang diputar
//       soundEfectBenar.pause();
//       soundEfectSalah.pause();

//       if (correctAnswer.textContent === choice.textContent) {
//         flipCard.style.transform = "rotateY(180deg)";

//         // Menampilkan pesan "betul" dan memainkan sound effect benar
//         updateScore(100);
//

//         soundEfectBenar.play();

//         // Menghentikan sound effect benar setelah 4 detik
//         setTimeout(function () {
//           card.style.display = "none";
//           respon.style.display = "none";
//           soundEfectBenar.pause();
//           nextCard.style.display = "block";
//         }, 4000);
//       } else {
//         flipCard.style.transform = "rotateY(180deg)";

//         // Menampilkan pesan "salah" dan memainkan sound effect salah
//
//         soundEfectSalah.play();
//         updateScore(-50);

//         // Menghentikan sound effect salah setelah 4 detik
//         setTimeout(function () {
//           card.style.display = "none";
//           respon.style.display = "none";
//           nextCard.style.display = "block";
//           soundEfectSalah.pause();
//         }, 4000);
//       }
//     });
//   });
// }

// // Define game data
// const game1Data = {
//   flipCard: document.querySelector(".flipcard1"),
//   choices: document.querySelectorAll(".choice1"),
//   correctAnswer: document.querySelector(".jawab1"),
//   card: document.querySelector(".card1"),
//   nextCard: document.querySelector(".card2"),
//   soundEfectBenar: document.querySelector(".benar-soundefect"),
//   soundEfectSalah: document.querySelector(".salah-soundefect"),
// };

// const game2Data = {
//   flipCard: document.querySelector(".flipcard2"),
//   choices: document.querySelectorAll(".choice2"),
//   correctAnswer: document.querySelector(".jawab2"),
//   card: document.querySelector(".card2"),
//   nextCard: document.querySelector(".card3"),
//   soundEfectBenar: document.querySelector(".benar-soundefect"),
//   soundEfectSalah: document.querySelector(".salah-soundefect"),
// };

// const game3Data = {
//   flipCard: document.querySelector(".flipcard3"),
//   choices: document.querySelectorAll(".choice3"),
//   correctAnswer: document.querySelector(".jawab3"),
//   card: document.querySelector(".card3"),
//   nextCard: document.querySelector(".card4"),
//   soundEfectBenar: document.querySelector(".benar-soundefect"),
//   soundEfectSalah: document.querySelector(".salah-soundefect"),
// };

// const game4Data = {
//   flipCard: document.querySelector(".flipcard4"),
//   choices: document.querySelectorAll(".choice4"),
//   correctAnswer: document.querySelector(".jawab4"),
//   card: document.querySelector(".card4"),
//   nextCard: document.querySelector(".card5"),
//   soundEfectBenar: document.querySelector(".benar-soundefect"),
//   soundEfectSalah: document.querySelector(".salah-soundefect"),
// };

// // Play each game
// playGame(game1Data);
// playGame(game2Data);
// playGame(game3Data);
// playGame(game4Data);
