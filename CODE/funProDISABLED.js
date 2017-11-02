// jS master for "The Googled Game" - Needs: (main.html, style.css, jquery-2.1.4.js)
"use strict";


//---------STATE: HOME

//RUNS "HOME" FUNCTION WHENEVER THE WINDOW IS LOADED
$(document).ready(home());

//HOME FUNCTION
function home() {
  // ADD FLEXBOX CLASS TO .CONTAINER
  $(".container").addClass("flexbox-intro");

  // DELETING GAMEOVER
  $(".container").removeClass("flexbox-gameover");
  $(".gameover-background").remove();
  $(".total-score").remove();
  $(".gameover-buttons").remove();

  // LOGO
  var logo = $('<img class="logo">');
  logo.attr("src", "../IMG/googled.png");
  logo.appendTo('.flexbox-intro');

  // GAME DESCRIPTION
  var description = $('<img class="description">');
  description.attr("src", "../IMG/description.jpg");
  description.appendTo('.flexbox-intro');

  // START BUTTON
  var startButton = $('<button class="start-button">');
  startButton.text("Ok! go for it");
  startButton.appendTo('.flexbox-intro');

  //RUNS "GAME" FUNCTION WHENEVER WE CLICK ON START-BUTTON
  //$(".start-button").click(game);
  $(".start-button").on("click", game);
  //document.getElementByClass(".start-button").addEventListener("click", game;
}


//---------STATE: GAME
function game() {

  // DELETING GAMEOVER
  $(".container").removeClass("flexbox-gameover");
  $(".gameover-background").remove();
  $(".total-score").remove();
  $(".gameover-buttons").remove();

  //DELETING HOME
  $(".logo").remove();
  $(".description").remove();
  $(".start-button").remove();

  // ADD FLEXBOX-GAME CLASS TO .CONTAINER AND DELETING FLEXBOX-INTRO
  $(".container").addClass("flexbox-game");
  $(".flexbox-game").toggleClass("flexbox-intro");

  //SHOW GAME FEATURES
  // OVERLAY + PICS RIGHT & LEFT

  $(".container").append("<div class=overlay>");
  $(".container").append("<p class=score>Score : 000</p>");

  $(".flexbox-game").append("<div class=attributes>");

  $(".flexbox-game").append("<div class=buttonsHigherLower>");

  $(".flexbox-game").append("<div class=left-pic>");
  var leftPicImg = $('<img class="left-pic-img">');
  leftPicImg.attr("src", "../IMG/donald-trump.jpg");
  leftPicImg.appendTo('.left-pic');

  $(".flexbox-game").append("<div class=right-pic>");
  var rightPicImg = $('<img class="right-pic-img">');
  rightPicImg.attr("src", "../IMG/emoji-poo.jpg");
  rightPicImg.appendTo('.right-pic');

  $(".attributes").append("<div class=left-pic-attributes>");
  $(".attributes").append("<div class=right-pic-attributes>");

  // COUNTDOWN
  $(".flexbox-game").append("<div class=middle-frame>");
  $(".middle-frame").append("<div class=countdown>");
  $(".middle-frame").append("<div class=margin-middle>");

  //IMG ATTRIBUTES LEFT
  $(".left-pic-attributes").append("<p class=leftTopic>'\"leftTopic\"'</p>");
  $(".left-pic-attributes").append("<p class=leftHas>has</p>");
  $(".left-pic-attributes").append("<p class=leftAmount>000000000</p>");
  $(".left-pic-attributes").append("<p class=leftAverage>average monthly searches</p>");

  //IMG ATTRIBUTES RIGHT
  $(".right-pic-attributes").append("<p class=rightTopic>\"rightTopic\"</p>");
  $(".right-pic-attributes").append("<p class=rightHas>has</p>");
  $(".right-pic-attributes").append("<p class=rightAmount>000000000</p>");
  $(".right-pic-attributes").append("<p class=rightAverage>average monthly searches</p>");
  $(".right-pic-attributes").append("<button class=higherButton");
  $(".right-pic-attributes").append("<button class=lowerButton");

  // BUTTONS
  var higherButton = $("<button class=higherButton>");
  higherButton.text("Higher");
  higherButton.appendTo('.buttonsHigherLower');

  var lowerButton = $('<button class=lowerButton>');
  lowerButton.text("Lower");
  lowerButton.appendTo('.buttonsHigherLower');

  //RUNS "GAMEOVER" FUNCTION WHENEVER WE CLICK ON .LOWERBUTTON OR .HIGHERBUTTON
  lowerButton.on("click", gameOver);
  higherButton.on("click", gameOver);

}

//---------STATE: GAMEOVER

function gameOver() {

  //DELETING
  $(".overlay").remove();
  $(".score").remove();
  $(".attributes").remove();
  $(".buttonsHigherLower").remove();
  $(".left-pic").remove();
  $(".right-pic").remove();
  $(".middle-frame").remove();


  // ADD FLEXBOX-GAMEOVER CLASS TO .CONTAINER AND DELETING FLEXBOX-GAME
  $(".container").addClass("flexbox-gameover");
  $(".flexbox-gameover").toggleClass("flexbox-game");

  //SHOW GAMEOVER FEATURES
  //BACKGROUND
  $(".container").append("<div class=gameover-background>");
  $(".gameover-background").append("<div class=gameover-overlay>");

  var gameoverBackgroundPic = $('<img class="gameoverBackgroundPic">');
  gameoverBackgroundPic.attr("src", "../IMG/loser.gif");
  gameoverBackgroundPic.appendTo('.gameover-background');



  //TOTALSCORE
  $(".flexbox-gameover").append("<div class=total-score>");
  $(".total-score").append("<p class=numberScore>Score : 000</p>");

  //GAMEOVER BUTTONS
  $(".flexbox-gameover").append("<div class=gameover-buttons>");


  //PLAY AGAIN
  var playAgainButton = $("<button class=play-again-button>");
  playAgainButton.text("Play again");
  playAgainButton.appendTo('.gameover-buttons');

  //RULES
  var rulesButton = $("<button class=rules-button>");
  rulesButton.text("Back to begining");
  rulesButton.appendTo('.gameover-buttons');

  /*
    //SHARE
    var shareTheLoveButton = $("<button class=share-the-love-button>");
    shareTheLoveButton.text("Share the love");
    shareTheLoveButton.appendTo('.gameover-buttons');
    shareTheLoveButton.on("click", home);
  */

  //BUTTONS RE-DIRECTING
  playAgainButton.on("click", game);
  rulesButton.on("click", home);


}
