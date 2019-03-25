$("#logo").click(() => {
  alert("I hope you will enjoy it");
});
$("#how-work").click(popup);
function popup() {
  $("div.popup").fadeIn(1000);
}
$("#gotit").click(() => {
  $("div.popup").slideUp(1000);
});
var options = ["rock", "paper", "scissors", "spock", "lizard"];

$("#you-paper").click(buttonClicked);
$("#you-rock").click(buttonClicked);
$("#you-sciccors").click(buttonClicked);
$("#you-spock").click(buttonClicked);
$("#you-lizard").click(buttonClicked);
function buttonClicked() {
  var disabled = function(item) {
    $(`#${item}`).hide();
  };
  $("#result").empty();
  disabled("paper");
  disabled("rock");
  disabled("scissors");
  disabled("spock");
  disabled("lizard");
  var computerPlay = function() {
    return options[Math.floor(Math.random() * 5)];
  };
  x = computerPlay(); //we can put x inside click x to inhert it (andrea)
  $(`#${x}`).css("display", "flex");
  $(`#${x}`).css("justifyContent", "center");
  result = $("#result");
  youWin = function() {
    $("<p>You win</p>").appendTo("#result");
  };
  youLose = function() {
    $("<p>You lose </p>").appendTo("#result");
  };
  itTie = function() {
    $("<p>It is a tie</p>").appendTo("#result");
  };
  $("#you-paper").click(() => {
    $("#result").empty();
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
    $("#result").empty();
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
    $("#result").empty();
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
    $("#result").empty();
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
    $("#result").empty();
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
}
// if ($("#you-paper").is(":visible") && x == "paper") {
//   $("<p>He mate it's a tie</p>").appendTo("#result");
// }

$(".btn-success").click(() => {
  $(".moreinfotext").show(2000);
});
