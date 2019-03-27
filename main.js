// hiding the popup card
$(document).ready(function() {
  $(".popup").hide();
});
// the link for the logo
$("#logo").click(() => {
  alert("I hope you will enjoy it");
});
//the link to show the popup card and to hide it
$("#how-work").click(popup);
function popup() {
  $("div.popup").fadeIn(1000);
}
$("#gotit").click(() => {
  $("div.popup").slideUp(1000);
});
//The array that the computer will randomly chose from
var options = ["rock", "paper", "scissors", "spock", "lizard"];
var computerPlay = function() {
  return options[Math.floor(Math.random() * 5)];
};

//adding same function to all user choice images on click
// $("#you-paper").click(buttonClicked);
// $("#you-rock").click(buttonClicked);
// $("#you-sciccors").click(buttonClicked);
// $("#you-spock").click(buttonClicked);
// $("#you-lizard").click(buttonClicked);
//The main function that show the computer choice
function buttonClicked() {
  var disabled = function(item) {
    $(`#${item}`).hide();
  };

  //emptying the results text place
  $("#result").empty();
  //disabling computer choices
  disabled("paper");
  disabled("rock");
  disabled("scissors");
  disabled("spock");
  disabled("lizard");
}

//results functions to put the text in the result area/just to save time and space
youWin = function() {
  $("<p>You win</p>").appendTo("#result");
};
youLose = function() {
  $("<p>You lose </p>").appendTo("#result");
};
itTie = function() {
  $("<p>It is a tie</p>").appendTo("#result");
};

//added seperate functions to each results as they have different cases
$("#you-paper").click(() => {
  buttonClicked();
  let x = computerPlay();
  $(`#${x}`).show();
  switch (x) {
    case "paper":
      itTie();
      break;
    case "rock":
      youWin();
      break;
    case "scissors":
      youLose();
      break;
    case "spock":
      youWin();
      break;
    case "lizard":
      youLose();
      break;
  }
});
$("#you-rock").click(() => {
  buttonClicked();
  let x = computerPlay();
  $(`#${x}`).show();
  switch (x) {
    case "paper":
      youLose();
      break;
    case "rock":
      itTie();
      break;
    case "scissors":
      youWin();
      break;
    case "spock":
      youLose();
      break;
    case "lizard":
      youWin();
      break;
  }
});
$("#you-sciccors").click(() => {
  buttonClicked();
  let x = computerPlay();
  $(`#${x}`).show();
  switch (x) {
    case "paper":
      youWin();
      break;
    case "rock":
      youLose();
      break;
    case "scissors":
      itTie();
      break;
    case "spock":
      youLose();
      break;
    case "lizard":
      youWin();
      break;
  }
});
$("#you-spock").click(() => {
  buttonClicked();
  let x = computerPlay();
  $(`#${x}`).show();
  switch (x) {
    case "paper":
      youLose();
      break;
    case "rock":
      youWin();
      break;
    case "scissors":
      youWin();
      break;
    case "spock":
      itTie();
      break;
    case "lizard":
      youLose();
      break;
  }
});
$("#you-lizard").click(() => {
  buttonClicked();
  let x = computerPlay();
  $(`#${x}`).show();
  switch (x) {
    case "paper":
      youWin();
      break;
    case "rock":
      youLose();
      break;
    case "scissors":
      youLose();
      break;
    case "spock":
      youWin();
      break;
    case "lizard":
      itTie();
      break;
  }
});

$(".btn-success").click(() => {
  $(".moreinfotext").show(2000);
});
$(".reset").click(() => {
  var disabled = function(item) {
    $(`#${item}`).hide();
  };

  //emptying the results text place
  $("#result").empty();

  //disabling computer choices
  disabled("paper");
  disabled("rock");
  disabled("scissors");
  disabled("spock");
  disabled("lizard");
});
