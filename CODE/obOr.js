// Data atached file for "The Googled Game" Needs: (main.html, style.css, jquery-2.1.4.js, obOr+.js)
"use strict";

//------------------------------------------------------------------------------
// CASES

function Game() {

  //---------DATA
  this.cases = [{
    name: "Prada",
    searches: 823000,
    img: "IMG/CASES/prada.jpg"
  }, {
    name: "Lesbian",
    searches: 1500000,
    img: "IMG/CASES/lesbian.jpg"
  }, {
    name: "Heroin",
    searches: 368000,
    img: "IMG/CASES/heroin.jpg"
  }, {
    name: "Ariana Grande",
    searches: 11000000,
    img: "IMG/CASES/ariana-grande.jpg"
  }, {
    name: "Berlin Wall",
    searches: 246000,
    img: "IMG/CASES/berlin-wall.jpg"
  }, {
    name: "Narcos",
    searches: 1830000,
    img: "IMG/CASES/narcos.jpg"
  }, {
    name: "Homer Simpson",
    searches: 246000,
    img: "IMG/CASES/homer-simpson.jpg"
  }, {
    name: "Magic Johnson",
    searches: 450000,
    img: "IMG/CASES/magic-johnson.jpg"
  }, {
    name: "Tuberculosis",
    searches: 673000,
    img: "IMG/CASES/tuberculosis.jpg"
  }, {
    name: "Saving Private Ryan",
    searches: 301000,
    img: "IMG/CASES/saving-private-ryan.jpg"
  }, {
    name: "Photoshop",
    searches: 7480000,
    img: "IMG/CASES/photoshop.jpg"
  }, {
    name: "Ecstacy",
    searches: 673000,
    img: "IMG/CASES/ecstacy.jpg"
  }, {
    name: "Insomnia",
    searches: 1000000,
    img: "IMG/CASES/insomnia.jpg"
  }, {
    name: "Forrest Gump",
    searches: 1000000,
    img: "IMG/CASES/forrest-gump.jpg"
  }, {
    name: "Casablanca",
    searches: 550000,
    img: "IMG/CASES/casablanca.jpg"
  }, {
    name: "Prince",
    searches: 748000,
    img: "IMG/CASES/prince.jpg"
  }, {
    name: "Mercury",
    searches: 550000,
    img: "IMG/CASES/mercury.jpg"
  }, {
    name: "Jaguar E-Type",
    searches: 60500,
    img: "IMG/CASES/jaguar-etype.jpg"
  }, {
    name: "Slacklining",
    searches: 49500,
    img: "IMG/CASES/slacklining.jpg"
  }, {
    name: "Pepsi",
    searches: 450000,
    img: "IMG/CASES/pepsi.jpg"
  }, {
    name: "Feminism",
    searches: 450000,
    img: "IMG/CASES/feminism.jpg"
  }, {
    name: "Capitalism",
    searches: 301000,
    img: "IMG/CASES/capitalism.jpg"
  }, {
    name: "Badminton",
    searches: 1000000,
    img: "IMG/CASES/badminton.jpg"
  }, {
    name: "Cricket",
    searches: 5000000,
    img: "IMG/CASES/cricket.jpg"
  }, {
    name: "Chanel",
    searches: 1500000,
    img: "IMG/CASES/chanel.jpg"
  }, {
    name: "Family Guy",
    searches: 1220000,
    img: "IMG/CASES/family-guy.jpg"
  }, {
    name: "Wembley Stadium",
    searches: 201000,
    img: "IMG/CASES/wembley-stadium.jpg"
  }, {
    name: "Vietnam",
    searches: 1220000,
    img: "IMG/CASES/vietnam.jpg"
  }, {
    name: "Whiplash",
    searches: 823000,
    img: "IMG/CASES/whiplash.jpg"
  }, {
    name: "Game of Thrones",
    searches: 11100000,
    img: "IMG/CASES/game-of-thrones.jpg"
  }, {
    name: "South Korea",
    searches: 368000,
    img: "IMG/CASES/south-korea.jpg"
  }, {
    name: "Suicide",
    searches: 673000,
    img: "IMG/CASES/suicide.jpg"
  }, {
    name: "Mc Donalds",
    searches: 11000000,
    img: "IMG/CASES/mc-donalds.jpg"
  }, {
    name: "David Copperfield",
    searches: 246000,
    img: "IMG/CASES/david-copperfield.jpg"
  }, {
    name: "Marathon",
    searches: 368000,
    img: "IMG/CASES/marathon.jpg"
  }, {
    name: "Torah",
    searches: 90500,
    img: "IMG/CASES/torah.jpg"
  }, {
    name: "Fake News",
    searches: 60500,
    img: "IMG/CASES/fake-news.jpg"
  }, {
    name: "Xi Jinping",
    searches: 110000,
    img: "IMG/CASES/xi-jinping.jpg"
  }, {
    name: "Volcano Surfing",
    searches: 1300,
    img: "IMG/CASES/volcano-surfing.jpg"
  }, {
    name: "Elvis Presley",
    searches: 1500000,
    img: "IMG/CASES/elvis-presley.jpg"
  }, {
    name: "Thomas Edison",
    searches: 368000,
    img: "IMG/CASES/thomas-edison.jpg"
  }, {
    name: "Valentines Day",
    searches: 2740000,
    img: "IMG/CASES/valentines-day.jpg"
  }, {
    name: "Taoism",
    searches: 90500,
    img: "IMG/CASES/taoism.jpg"
  }, {
    name: "Budweiser",
    searches: 301000,
    img: "IMG/CASES/budweiser.jpg"
  }, {
    name: "Auschwitz",
    searches: 673000,
    img: "IMG/CASES/auschwitz.jpg"
  }, {
    name: "Vodafone",
    searches: 13600000,
    img: "IMG/CASES/vodafone.jpg"
  }, {
    name: "My Space",
    searches: 1500000,
    img: "IMG/CASES/myspace.jpg"
  }, ];


  this.selectedCases = [];
  this.score = 0;
  this.time = 0;
  this._timeInterval = null;
}

//------------------------------------------------------------------------------

//---------STATE: HOME
Game.prototype.home = function() {
  var self = this;

  // ADD FLEXBOX CLASS TO .CONTAINER
  $(".container").addClass("flexbox-intro");

  // DELETING GAMEOVER
  $(".container").removeClass("flexbox-gameover");
  //$(".container").removeClass("flexbox-game");
  $(".gameover-background").remove();
  $(".total-score").remove();
  $(".gameover-buttons").remove();

  // LOGO
  var logo = $('<img class="logo">');
  logo.attr("src", "IMG/googled.png");
  logo.appendTo('.flexbox-intro');

  // GAME DESCRIPTION
  var description = $('<img class="description">');
  description.attr("src", "IMG/description.jpg");
  description.appendTo('.flexbox-intro');

  // START BUTTON
  var startButton = $('<button class="start-button">');
  startButton.text("Ok! go for it");
  startButton.appendTo('.flexbox-intro');

  //RUNS "GAME" FUNCTION WHENEVER WE CLICK ON START-BUTTON
  //$(".start-button").click(game);
  startButton.on("click", function() {
    self.challenge();
  });
  //document.getElementByClass(".start-button").addEventListener("click", game;
};


//----------------------------------------------------------------------------

//---------STATE: CHALLENGE
Game.prototype.challenge = function() {
  var self = this;

  self.caseRandomizer();
  // DELETING GAMEOVER
  $(".container").removeClass("flexbox-gameover");
  $(".gameover-background").remove();
  $(".total-score").remove();
  $(".gameover-buttons").remove();

  //DELETING HOME
  $(".container").removeClass("flexbox-intro");
  $(".logo").remove();
  $(".description").remove();
  $(".start-button").remove();

  //DELETING CHALLENGE
  $(".container").removeClass("flexbox-game");
  $(".overlay").remove();
  $(".score").remove();
  $(".attributes").remove();
  $(".buttonsHigherLower").remove();
  $(".left-pic").remove();
  $(".right-pic").remove();
  $(".middle-frame").remove();

  // ADD FLEXBOX-GAME CLASS TO .CONTAINER AND DELETING FLEXBOX-INTRO
  $(".container").addClass("flexbox-game");


  //SHOW GAME FEATURES
  // OVERLAY + PICS RIGHT & LEFT

  $(".container").append("<div class=overlay>");
  $(".container").append("<p class=score></p>");
  $(".score").text("Score: " + self.score);


  $(".flexbox-game").append("<div class=attributes>");

  $(".flexbox-game").append("<div class=buttonsHigherLower>");

  $(".flexbox-game").append("<div class=left-pic>");
  var leftPicImg = $('<img class="left-pic-img">');
  leftPicImg.attr("src", self.selectedCases[0].img);
  leftPicImg.appendTo('.left-pic');

  $(".flexbox-game").append("<div class=right-pic>");
  var rightPicImg = $('<img class="right-pic-img">');
  rightPicImg.attr("src", self.selectedCases[1].img);
  rightPicImg.appendTo('.right-pic');

  $(".attributes").append("<div class=left-pic-attributes>");
  $(".attributes").append("<div class=right-pic-attributes>");

  // COUNTDOWN
  $(".flexbox-game").append("<div class=middle-frame>");
  $(".middle-frame").append("<div class=countdown>");
  $(".middle-frame").append("<div class=time>");
  $(".middle-frame").append("<div class=margin-middle>");

  //IMG ATTRIBUTES LEFT
  $(".left-pic-attributes").append("<p class=leftTopic>'" + self.selectedCases[0].name + "'</p>");
  $(".left-pic-attributes").append("<p class=leftHas>has</p>");

  var formatNumber = this._formatNumber(this.selectedCases[0].searches);


  $(".left-pic-attributes").append("<p class=leftAmount>" + formatNumber + "</p>");
  $(".left-pic-attributes").append("<p class=leftAverage>average monthly searches</p>");

  //IMG ATTRIBUTES RIGHT
  $(".right-pic-attributes").append("<p class=rightTopic>'" + self.selectedCases[1].name + "'</p>");
  $(".right-pic-attributes").append("<p class=rightHas>has</p>");
  $(".right-pic-attributes").append("<p class=rightAmount> ? </p>");
  $(".right-pic-attributes").append("<p class=rightAverage>average monthly searches</p>");
  $(".right-pic-attributes").append("<button class=higherButton");
  $(".right-pic-attributes").append("<button class=lowerButton");

  // BUTTONS
  var higherButton = $('<button class="higherButton">');
  higherButton.text("Higher");
  higherButton.appendTo('.buttonsHigherLower');

  var lowerButton = $('<button class="lowerButton">');
  lowerButton.text("Lower");
  lowerButton.appendTo('.buttonsHigherLower');

  //RUNS "GAMEOVER" FUNCTION WHENEVER WE CLICK ON .LOWERBUTTON OR .HIGHERBUTTON
  lowerButton.on("click", function() {
    self.lowerButton();
  });
  higherButton.on("click", function() {
    self.higherButton();
  });

  self.initTimeOut();
};

//----------------------------------------------------------------------------
//---------STATE: GAME OVER
Game.prototype.gameOver = function() {
  var self = this;

  //DELETING HOME
  $(".container").removeClass("flexbox-intro");

  //DELETING CHALLENGE
  $(".container").removeClass("flexbox-game");
  $(".overlay").remove();
  $(".score").remove();
  $(".attributes").remove();
  $(".buttonsHigherLower").remove();
  $(".left-pic").remove();
  $(".right-pic").remove();
  $(".middle-frame").remove();

  //DELETING GAMEOVER
  $(".container").removeClass("flexbox-gameover");
  $(".gameover-background").remove();
  $(".total-score").remove();
  $(".gameover-buttons").remove();

  // ADD FLEXBOX-GAMEOVER CLASS TO .CONTAINER AND DELETING FLEXBOX-GAME
  $(".container").addClass("flexbox-gameover");
  //$(".flexbox-gameover").toggleClass("flexbox-game");

  //SHOW GAMEOVER FEATURES
  //BACKGROUND
  $(".container").append("<div class=gameover-background>");
  $(".gameover-background").append("<div class=gameover-overlay>");

  var gameoverBackgroundPic = $('<img class="gameoverBackgroundPic">');
  gameoverBackgroundPic.attr("src", "IMG/loser.gif");
  gameoverBackgroundPic.appendTo('.gameover-background');

  //TOTALSCORE
  $(".flexbox-gameover").append("<div class=total-score>");
  $(".total-score").append("<p class=numberScore></p>");
  $(".numberScore").text("Score: " + self.score);

  //GAMEOVER BUTTONS
  $(".flexbox-gameover").append("<div class=gameover-buttons>");


  //PLAY AGAIN
  var playAgainButton = $("<button class=play-again-button>");
  playAgainButton.text("Play again");
  playAgainButton.appendTo('.gameover-buttons');

  //RULES
  var backtobeginningButton = $("<button class=back-to-beginning-button>");
  backtobeginningButton.text("Back to beginning");
  backtobeginningButton.appendTo('.gameover-buttons');

  /*
    //SHARE
    var shareTheLoveButton = $("<button class=share-the-love-button>");
    shareTheLoveButton.text("Share the love");
    shareTheLoveButton.appendTo('.gameover-buttons');
    shareTheLoveButton.on("click", home);
  */

  //BUTTONS RE-DIRECTING
  //PLAY AGAIN
  playAgainButton.on("click", function() {
    self.challenge();
  });
  //BACK TO BEGINNING
  backtobeginningButton.on("click", function() {
    self.home();
  });

  self.score = 0;
};
//----------------------------------------------------------------------------
//---------STATE: WINNER
Game.prototype.winner = function() {
  var self = this;

  self.score++;

  //BUILDING WINNER
  $(".higherButton").remove();
  $(".lowerButton").remove();


  //CREATING NEXT CHALLENGE BUTTON
  var nextChallengeButton = $('<button class="next-challenge-button">');
  nextChallengeButton.appendTo('.buttonsHigherLower');

  if (self.selectedCases[0].searches === self.selectedCases[1].searches) {
    //CREATING NEXT CHALLENGE BUTTON - TIE
    nextChallengeButton.text("It's a tie! One more :)");
  } else {
    //CREATING NEXT CHALLENGE BUTTON - NOT A TIE
    nextChallengeButton.text("Cool! One more :)");

  }

  // ON CLICK - GO TO THE NEXT CHALLENGE
  nextChallengeButton.on("click", function() {
    self.challenge();
  });

  // SHOW SEARCHES
  var formatNumber = this._formatNumber(this.selectedCases[1].searches);

  $(".rightAmount").text(formatNumber);
  //SHOW SCORE
  $(".score").text("Score: " + self.score);
};

//----------------------------------------------------------------------------
//---------GAME LOGIC
Game.prototype.caseRandomizer = function() {

  var selected = [];
  var firstIndex;
  var secondIndex;

  firstIndex = Math.floor(Math.random() * this.cases.length);
  do {
    secondIndex = Math.floor(Math.random() * this.cases.length);
  } while (firstIndex === secondIndex);

  selected.push(this.cases[firstIndex]);
  selected.push(this.cases[secondIndex]);

  this.selectedCases = selected;

};
//---------GAME LOGIC -- LOWERBUTTON

Game.prototype.lowerButton = function() {
  var self = this;
  clearInterval(self._timeInterval);
  if (this.selectedCases[0].searches > this.selectedCases[1].searches || this.selectedCases[0].searches === this.selectedCases[1].searches) {
    self.winner();
  } else {
    self.gameOver();
  }

};

//---------GAME LOGIC -- HIGHERBUTTON

Game.prototype.higherButton = function() {
  var self = this;

  clearInterval(self._timeInterval);
  if (this.selectedCases[0].searches > this.selectedCases[1].searches || this.selectedCases[0].searches === this.selectedCases[1].searches) {
    self.gameOver();
  } else {
    self.winner();
  }
};


//---------NUMBER FORMAT

Game.prototype._formatNumber = function(number) {

  var stringNumber = numeral(number).format('0,0');
  var stop = false;
  while (!stop) {
    stringNumber = stringNumber.replace(',', '.');
    if (stringNumber.indexOf(',') === -1) {
      stop = true;
    }
  }
  return stringNumber;
};

//---------TIMEOUT
Game.prototype.initTimeOut = function() {
  var self = this;
  self.time = 10;
  self._timeInterval = setInterval(function() {
    $('.time').text(self.time);

    if (self.time < 5) {
      $(".time").addClass("red-time");
    }


    if (self.time === 0) {
      clearInterval(self._timeInterval);
      self.gameOver();
    }

    console.log(self.time);
    self.time--;

  }, 1000);


};
