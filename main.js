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

//The main function that show the computer choice
function buttonClicked() {
  var disabled = function(item) {
    $(`#${item}`).hide();
    $(`#you-${item}`).fadeTo(100, 1);
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
  $("#you-paper").fadeTo(100, 0.5);
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
  $("#you-rock").fadeTo(100, 0.5);
});
$("#you-scissors").click(() => {
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
  $("#you-scissors").fadeTo(100, 0.5);
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
  $("#you-spock").fadeTo(100, 0.5);
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
  $("#you-lizard").fadeTo(100, 0.5);
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
