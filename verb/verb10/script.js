// // PENGATURAN SCORE//////////////////////////////////////

let userScore = 0;

// Function to update the score
function updateScore(points) {
  userScore += points;
  // console.log("Current Score:", userScore);
  // You can display the score or perform other actions here

  // Update the score element on the screen
  const scoreElement = document.querySelector(".user-score");
  scoreElement.textContent = userScore;

  const score1 = document.querySelector(".score-container");
  const gameContainer = document.querySelector(".game-container");
  const end = document.querySelector(".end");
  const end1 = document.querySelector(".end1");

  if (userScore >= 1875) {
    setTimeout(function () {
      window.location.href = "end.html";
    }, 3000);

    setTimeout(function () {
      gameContainer.style.display = "none";
      end.style.display = "block";
      score1.style.transform = "scale('1.5')";
    }, 4500);
  }
}
///////  GAME 1  ////////////////////////////////////////

// function handleButtonClickGame() {
//   const button = document.querySelector(`.button${currentGame}`);
//   const flipCard = document.querySelector(`.flipcard${currentGame}`);
//   const jawab = document.querySelector(`.jawab${currentGame}`);
//   const card1 = document.querySelector(`.card${currentGame}`);
//   const card2 = document.querySelector(`.card${currentGame + 1}`);
//   const value = document.querySelector(`.input${currentGame}`).value.trim();

//   const popup = document.querySelector(".popup");
//   const popup1 = document.querySelector(".popup1");
//   const soundEfectBenar = document.querySelector(".benar-soundefect");
//   const soundEfectSalah = document.querySelector(".salah-soundefect");
//   const bintang = document.querySelector(".bintang");
//   const semangka = document.querySelector(".semangka");

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab.innerText.toLowerCase()) {
//     flipCard.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";

//     soundEfectSalah.play();
//     updateScore(-50);

//     setTimeout(function () {
//       flipCard.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     card1.style.transform = "translate (1000px)";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       // flipCard1.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       if (card2) {
//         card1.style.transform = "translate(1000px)";
//         // card1.style.display = "none";
//       } else {
//         // Handle end of the game
//         end1.style.display = "block";
//         gameContainer.style.display = "none";
//       }
//     }, 3500);

//     setTimeout(function () {
//       card2.style.transform = "translate(-50%)";
//       // card2.style.display = "block";
//     }, 4000);
//   }
// }

// const popup = document.querySelector(".popup");
// const popup1 = document.querySelector(".popup1");
// const soundEfectBenar = document.querySelector(".benar-soundefect");
// const soundEfectSalah = document.querySelector(".salah-soundefect");
// const bintang = document.querySelector(".bintang");
// const semangka = document.querySelector(".semangka");

// function handleButtonClickGame1() {
//   const button1 = document.querySelector(".button1");
//   const flipCard1 = document.querySelector(".flipcard1");
//   const jawab1 = document.querySelector(".jawab1");
//   const card1 = document.querySelector(".card1");
//   const card2 = document.querySelector(".card2");
//   const value = document.querySelector(".input1").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab1.innerText.toLowerCase()) {
//     flipCard1.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);

//     setTimeout(function () {
//       flipCard1.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab1.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard1.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     card1.style.transform = "translate (1000px)";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       // flipCard1.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card1.style.transform = "translate(1000px)";
//       // card1.style.display = "none";
//     }, 3500);

//     setTimeout(function () {
//       card2.style.transform = "translate(-50%)";
//       // card2.style.display = "block";
//     }, 4000);
//   }
// }

// ////////////////////  GAME 2   ////////////////////////////////////////

// function handleButtonClickGame2() {
//   const button2 = document.querySelector(".button2");
//   const flipCard2 = document.querySelector(".flipcard2");
//   const jawab2 = document.querySelector(".jawab2");
//   const card3 = document.querySelector(".card3");
//   const card2 = document.querySelector(".card2");
//   const value = document.querySelector(".input2").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab2.innerText.toLowerCase()) {
//     flipCard2.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard2.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab2.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard2.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard2.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card2.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card3.style.display = "block";
//     }, 3500);
//   }
// }
// /////////////////////////////  GAME 3 /////////////////////////////////////

// function handleButtonClickGame3() {
//   const button3 = document.querySelector(".button3");
//   const flipCard3 = document.querySelector(".flipcard3");
//   const jawab3 = document.querySelector(".jawab3");
//   const card3 = document.querySelector(".card3");
//   const card4 = document.querySelector(".card4");
//   const value = document.querySelector(".input3").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab3.innerText.toLowerCase()) {
//     flipCard3.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard3.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab3.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard3.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard3.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card3.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card4.style.display = "block";
//     }, 3500);
//   }
// }

// //////////////////////////GAME 4 /////////////////////////

// function handleButtonClickGame4() {
//   const button4 = document.querySelector(".button4");
//   const flipCard14 = document.querySelector(".flipcard4");
//   const jawab4 = document.querySelector(".jawab4");
//   const card5 = document.querySelector(".card5");
//   const card4 = document.querySelector(".card4");
//   const value = document.querySelector(".input4").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab4.innerText.toLowerCase()) {
//     flipCard14.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard14.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab4.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard14.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard14.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card4.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card5.style.display = "block";
//     }, 3500);
//   }
// }
// /////////////////////////////// GAME 5 /////////////////////////////////////////////////

// function handleButtonClickGame5() {
//   const buttom5 = document.querySelector(".buttom5");
//   const flipcard5 = document.querySelector(".flipcard5");
//   const jawab5 = document.querySelector(".jawab5");
//   const card5 = document.querySelector(".card5");
//   const card6 = document.querySelector(".card6");
//   const value = document.querySelector(".input5").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab5.innerText.toLowerCase()) {
//     flipcard5.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard5.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab5.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard5.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard5.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card5.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card6.style.display = "block";
//     }, 3500);
//   }
// }

// /////////////////// GAME 6 //////////////////////////////////

// function handleButtonClickGame6() {
//   const buttom6 = document.querySelector(".buttom6");
//   const flipcard6 = document.querySelector(".flipcard6");
//   const jawab6 = document.querySelector(".jawab6");
//   const card7 = document.querySelector(".card7");
//   const card6 = document.querySelector(".card6");
//   const value = document.querySelector(".input6").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab6.innerText.toLowerCase()) {
//     flipcard6.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard6.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab6.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard6.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard6.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card6.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card7.style.display = "block";
//     }, 3500);
//   }
// }

// ///////////////GAME 7 ///////////////////////////////////////////////////////////

// function handleButtonClickGame7() {
//   const buttom7 = document.querySelector(".buttom7");
//   const flipcard7 = document.querySelector(".flipcard7");
//   const jawab7 = document.querySelector(".jawab7");
//   const card7 = document.querySelector(".card7");
//   const card8 = document.querySelector(".card8");
//   const value = document.querySelector(".input7").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab7.innerText.toLowerCase()) {
//     flipcard7.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard7.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab7.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard7.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard7.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card7.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card8.style.display = "block";
//     }, 3500);
//   }
// }

// ////////////////////////////  GAME 8 ///////////////////////////////////////////////////

// function handleButtonClickGame8() {
//   const buttom8 = document.querySelector(".buttom8");
//   const flipCard8 = document.querySelector(".flipcard8");
//   const jawab8 = document.querySelector(".jawab8");
//   const card9 = document.querySelector(".card9");
//   const card8 = document.querySelector(".card8");
//   const value = document.querySelector(".input8").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab8.innerText.toLowerCase()) {
//     flipCard8.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard8.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab8.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard8.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard8.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card8.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card9.style.display = "block";
//     }, 3500);
//   }
// }

// //////////////////////////  GAME 9 //////////////////////////////////////////

// function handleButtonClickGame9() {
//   const buttom9 = document.querySelector(".buttom9");
//   const flipCard9 = document.querySelector(".flipcard9");
//   const jawab9 = document.querySelector(".jawab9");
//   const card9 = document.querySelector(".card9");
//   const card10 = document.querySelector(".card10");
//   const value = document.querySelector(".input9").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab9.innerText.toLowerCase()) {
//     flipCard9.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard9.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab9.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard9.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard9.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card9.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card10.style.display = "block";
//     }, 3500);
//   }
// }

// ////////////////////// GAME 10 ///////////////////////////////////////////////

// function handleButtonClickGame10() {
//   const buttom10 = document.querySelector(".buttom10");
//   const flipcard10 = document.querySelector(".flipcard10");
//   const jawab10 = document.querySelector(".jawab10");
//   const card11 = document.querySelector(".card11");
//   const card10 = document.querySelector(".card10");
//   const value = document.querySelector(".input10").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab10.innerText.toLowerCase()) {
//     flipcard10.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard10.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab10.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard10.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard10.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card10.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card11.style.display = "block";
//     }, 3500);
//   }
// }

// /////////////////// GAME 11 ///////////////////////////////////////////////////////

// function handleButtonClickGame11() {
//   const buttom11 = document.querySelector(".buttom11");
//   const flipCard11 = document.querySelector(".flipcard11");
//   const jawab11 = document.querySelector(".jawab11");
//   const card11 = document.querySelector(".card11");
//   const card12 = document.querySelector(".card12");
//   const value = document.querySelector(".input11").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab11.innerText.toLowerCase()) {
//     flipCard11.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard11.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab11.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard11.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard11.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card11.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card12.style.display = "block";
//     }, 3500);
//   }
// }

// /////////////// GAME 12 ////////////////////////////////////

// function handleButtonClickGame12() {
//   const buttom12 = document.querySelector(".buttom12");
//   const flipcard12 = document.querySelector(".flipcard12");
//   const jawab12 = document.querySelector(".jawab12");
//   const card13 = document.querySelector(".card13");
//   const card12 = document.querySelector(".card12");
//   const value = document.querySelector(".input12").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab12.innerText.toLowerCase()) {
//     flipcard12.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard12.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab12.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard12.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard12.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card12.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card13.style.display = "block";
//     }, 3500);
//   }
// }

// ///////////////// GAME 13 /////////////////////////////////////

// function handleButtonClickGame13() {
//   const buttom13 = document.querySelector(".buttom13");
//   const flipCard13 = document.querySelector(".flipcard13");
//   const jawab13 = document.querySelector(".jawab13");
//   const card13 = document.querySelector(".card13");
//   const card14 = document.querySelector(".card14");
//   const value = document.querySelector(".input13").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab13.innerText.toLowerCase()) {
//     flipCard13.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard13.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab13.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard13.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard13.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card13.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card14.style.display = "block";
//     }, 3500);
//   }
// }

// ///////////////////////// GAME 14 /////////////////////////////

// function handleButtonClickGame14() {
//   const buttom14 = document.querySelector(".buttom14");
//   const flipCard14 = document.querySelector(".flipcard14");
//   const jawab14 = document.querySelector(".jawab14");
//   const card15 = document.querySelector(".card15");
//   const card14 = document.querySelector(".card14");
//   const value = document.querySelector(".input14").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab14.innerText.toLowerCase()) {
//     flipCard14.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard14.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab14.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard14.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard14.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card14.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card15.style.display = "block";
//     }, 3500);
//   }
// }

// ////////////////// GAME 15 //////////////////////////

// function handleButtonClickGame15() {
//   const buttom15 = document.querySelector(".buttom15");
//   const flipCard15 = document.querySelector(".flipcard15");
//   const jawab15 = document.querySelector(".jawab15");
//   const card15 = document.querySelector(".card15");
//   const card16 = document.querySelector(".card16");
//   const value = document.querySelector(".input15").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab15.innerText.toLowerCase()) {
//     flipCard15.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard15.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab15.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard15.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard15.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card15.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card16.style.display = "block";
//     }, 3500);
//   }
// }

// ///////////////// GAME 16 ////////////////////////////

// function handleButtonClickGame16() {
//   const buttom16 = document.querySelector(".buttom16");
//   const flipCard16 = document.querySelector(".flipcard16");
//   const jawab16 = document.querySelector(".jawab16");
//   const card17 = document.querySelector(".card17");
//   const card16 = document.querySelector(".card16");
//   const value = document.querySelector(".input16").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab16.innerText.toLowerCase()) {
//     flipCard16.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipCard16.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab16.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipCard16.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipCard16.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card16.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card17.style.display = "block";
//     }, 3500);
//   }
// }

// //////////// GAME  17  //////////////////////////////////////

// function handleButtonClickGame17() {
//   const buttom17 = document.querySelector(".buttom17");
//   const flipcard17 = document.querySelector(".flipcard17");
//   const jawab17 = document.querySelector(".jawab17");
//   const card17 = document.querySelector(".card17");
//   const card18 = document.querySelector(".card18");
//   const value = document.querySelector(".input17").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab17.innerText.toLowerCase()) {
//     flipcard17.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard17.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab17.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard17.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard17.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card17.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card18.style.display = "block";
//     }, 3500);
//   }
// }

// ///////////// GAME 18 /////////////////////////////

// function handleButtonClickGame18() {
//   const buttom18 = document.querySelector(".buttom18");
//   const flipcard18 = document.querySelector(".flipcard18");
//   const jawab18 = document.querySelector(".jawab18");
//   const card19 = document.querySelector(".card19");
//   const card18 = document.querySelector(".card18");
//   const value = document.querySelector(".input18").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab18.innerText.toLowerCase()) {
//     flipcard18.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard18.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab18.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard18.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard18.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card18.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card19.style.display = "block";
//     }, 3500);
//   }
// }

// /////////////////////// GAME 19  /////////////////////////////////////

// function handleButtonClickGame19() {
//   const buttom19 = document.querySelector(".buttom19");
//   const flipcard19 = document.querySelector(".flipcard19");
//   const jawab19 = document.querySelector(".jawab19");
//   const card19 = document.querySelector(".card19");
//   const card20 = document.querySelector(".card20");
//   const value = document.querySelector(".input19").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab19.innerText.toLowerCase()) {
//     flipcard19.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard19.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab19.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard19.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard19.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card19.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       card20.style.display = "block";
//     }, 3500);
//   }
// }

// // //////////////////////// GAME 20 /////////////////////////////////////////////

// function handleButtonClickGame20() {
//   const buttom20 = document.querySelector(".buttom20");
//   const flipcard20 = document.querySelector(".flipcard20");
//   const jawab20 = document.querySelector(".jawab20");
//   const card19 = document.querySelector(".card19");
//   const card20 = document.querySelector(".card20");
//   const value = document.querySelector(".input20").value.trim();

//   if (!value) {
//     alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
//     return; // Stop further execution
//   }

//   if (value.toLowerCase() !== jawab20.innerText.toLowerCase()) {
//     flipcard20.style.transform = "rotateY(180deg)";
//     popup1.style.display = "block";
//     semangka.style.display = "block";
//     soundEfectSalah.play();
//     updateScore(-50);
//     setTimeout(function () {
//       flipcard20.style.transform = "rotateY(360deg)";
//       popup1.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       salah.style.display = "none";
//       semangka.style.display = "none";
//     }, 3000);
//   } else if (value.toLowerCase() === jawab20.innerText.toLowerCase()) {
//     popup.style.display = "block";
//     flipcard20.style.transform = "rotateY(180deg)";
//     bintang.style.display = "block";
//     soundEfectBenar.play();

//     updateScore(100);

//     setTimeout(function () {
//       popup.style.display = "none";
//       flipcard20.style.transform = "rotateY(360deg)";
//       bintang.style.display = "none";
//       card20.style.display = "none";
//     }, 3000);

//     setTimeout(function () {
//       // card20.style.display = "block";
//       end1.style.display = "block";
//     }, 3500);
//   }
// }

// Data permainan
const games = [
  {
    jawaban: "jawaban_game_1",
    buttonClass: ".button1",
    flipCardClass: ".flipcard1",
    jawabClass: ".jawab1",
    cardClass: ".card1",
    nextCardClass: ".card2",
    inputClass: ".input1",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },

  {
    jawaban: "jawaban_game_2",
    buttonClass: ".button2",
    flipCardClass: ".flipcard2",
    jawabClass: ".jawab2",
    cardClass: ".card2",
    nextCardClass: ".card3",
    inputClass: ".input2",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },

  {
    jawaban: "jawaban_game_3",
    buttonClass: ".button3",
    flipCardClass: ".flipcard3",
    jawabClass: ".jawab3",
    cardClass: ".card3",
    nextCardClass: ".card4",
    inputClass: ".input3",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_4",
    buttonClass: ".button4",
    flipCardClass: ".flipcard4",
    jawabClass: ".jawab4",
    cardClass: ".card4",
    nextCardClass: ".card5",
    inputClass: ".input4",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_5",
    buttonClass: ".button5",
    flipCardClass: ".flipcard5",
    jawabClass: ".jawab5",
    cardClass: ".card5",
    nextCardClass: ".card6",
    inputClass: ".input5",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_6",
    buttonClass: ".button6",
    flipCardClass: ".flipcard6",
    jawabClass: ".jawab6",
    cardClass: ".card6",
    nextCardClass: ".card7",
    inputClass: ".input6",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_7",
    buttonClass: ".button7",
    flipCardClass: ".flipcard7",
    jawabClass: ".jawab7",
    cardClass: ".card7",
    nextCardClass: ".card8",
    inputClass: ".input7",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_8",
    buttonClass: ".button8",
    flipCardClass: ".flipcard8",
    jawabClass: ".jawab8",
    cardClass: ".card8",
    nextCardClass: ".card9",
    inputClass: ".input8",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_9",
    buttonClass: ".button9",
    flipCardClass: ".flipcard9",
    jawabClass: ".jawab9",
    cardClass: ".card9",
    nextCardClass: ".card10",
    inputClass: ".input9",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_10",
    buttonClass: ".button10",
    flipCardClass: ".flipcard10",
    jawabClass: ".jawab10",
    cardClass: ".card10",
    nextCardClass: ".card11",
    inputClass: ".input10",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_11",
    buttonClass: ".button11",
    flipCardClass: ".flipcard11",
    jawabClass: ".jawab11",
    cardClass: ".card11",
    nextCardClass: ".card12",
    inputClass: ".input11",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_12",
    buttonClass: ".button12",
    flipCardClass: ".flipcard12",
    jawabClass: ".jawab12",
    cardClass: ".card12",
    nextCardClass: ".card13",
    inputClass: ".input12",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_13",
    buttonClass: ".button13",
    flipCardClass: ".flipcard13",
    jawabClass: ".jawab13",
    cardClass: ".card13",
    nextCardClass: ".card14",
    inputClass: ".input13",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_14",
    buttonClass: ".button14",
    flipCardClass: ".flipcard14",
    jawabClass: ".jawab14",
    cardClass: ".card14",
    nextCardClass: ".card15",
    inputClass: ".input14",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_15",
    buttonClass: ".button15",
    flipCardClass: ".flipcard15",
    jawabClass: ".jawab15",
    cardClass: ".card15",
    nextCardClass: ".card16",
    inputClass: ".input15",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_16",
    buttonClass: ".button16",
    flipCardClass: ".flipcard16",
    jawabClass: ".jawab16",
    cardClass: ".card16",
    nextCardClass: ".card17",
    inputClass: ".input16",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_17",
    buttonClass: ".button17",
    flipCardClass: ".flipcard17",
    jawabClass: ".jawab17",
    cardClass: ".card17",
    nextCardClass: ".card18",
    inputClass: ".input17",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_18",
    buttonClass: ".button18",
    flipCardClass: ".flipcard18",
    jawabClass: ".jawab18",
    cardClass: ".card18",
    nextCardClass: ".card19",
    inputClass: ".input18",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_19",
    buttonClass: ".button19",
    flipCardClass: ".flipcard19",
    jawabClass: ".jawab19",
    cardClass: ".card19",
    nextCardClass: ".card20",
    inputClass: ".input19",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
  },
  {
    jawaban: "jawaban_game_20",
    buttonClass: ".button20",
    flipCardClass: ".flipcard20",
    jawabClass: ".jawab20",
    cardClass: ".card20",
    nextCardClass: ".end1",
    inputClass: ".input20",
    soundEffectBenar: ".benar-soundefect",
    soundEffectSalah: ".salah-soundefect",
    popupClass: ".popup",
    popup1Class: ".popup1",
    bintangClass: ".bintang",
    semangkaClass: ".semangka",
    body: "body",
    endClass: ".end",
    end1Class: ".end1",
  },

  // Tambahkan data permainan lainnya di sini...
];

// Fungsi untuk menangani permainan
function handleGame(gameIndex) {
  const game = games[gameIndex];
  const button = document.querySelector(game.buttonClass);
  const flipCard = document.querySelector(game.flipCardClass);
  const jawab = document.querySelector(game.jawabClass);
  const card = document.querySelector(game.cardClass);
  const nextCard = document.querySelector(game.nextCardClass);
  const input = document.querySelector(game.inputClass);
  const soundEfectBenar = document.querySelector(game.soundEffectBenar);
  const soundEfectSalah = document.querySelector(game.soundEffectSalah);
  const popup1 = document.querySelector(game.popup1Class);
  const popup = document.querySelector(game.popupClass);
  const semangka = document.querySelector(game.semangkaClass);
  const bintang = document.querySelector(game.bintangClass);
  const body = document.querySelector(game.body);
  const end = document.querySelector(game.endClass);
  const end1 = document.querySelector(game.end1Class);
  const backsound = document.querySelector(".backsound");

  button.addEventListener("click", function () {
    const value = input.value.trim();

    if (!value) {
      alert("Silahkan Tulis jawabanmu terlebih dahulu!!");
      return;

      input.style.border = "red solid 1px";
    }

    if (value.toLowerCase() !== jawab.innerText.toLowerCase()) {
      input.style.border = "red solid 6px";
      flipCard.style.transform = "rotateY(180deg)";
      popup1.style.display = "block";
      semangka.style.display = "block";
      body.style.backgroundColor = "white";
      soundEfectSalah.play();
      backsound.play();

      updateScore(-50);

      setTimeout(function () {
        flipCard.style.transform = "rotateY(360deg)";

        semangka.style.display = "none";
      }, 3000);
    } else {
      backsound.play();
      input.style.border = "none";
      popup1.style.display = "none";
      popup.style.display = "block";
      flipCard.style.transform = "rotateY(180deg)";
      bintang.style.display = "block";
      soundEfectBenar.play();
      updateScore(100);

      setTimeout(function () {
        popup.style.display = "none";
        flipCard.style.transform = "rotateY(360deg)";
        bintang.style.display = "none";
        // card.style.transform = "translate(1000px)";
      }, 3000);

      setTimeout(function () {
        card.style.transform = "translate(1000px)";
      }, 4000);

      setTimeout(function () {
        nextCard.style.transform = "translate(-50%)";
      }, 4200);

      setTimeout(function () {
        card.style.display = "none";
      }, 4400);
    }
  });
}

// Memanggil fungsi handleGame untuk setiap permainan
for (let i = 0; i < games.length; i++) {
  handleGame(i);
}
