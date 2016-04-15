var choices = ["Rock", "Paper", "Scissors"];

$(document).ready(function() {

  $('#cpurock, #cpupaper, #cpuscissors').hide();

  function chooseRock() {
    $('#paper, #scissors').hide();
    var randomChoice = Math.floor(Math.random() * choices.length);
    var cpuChoice = (choices[randomChoice]);

    console.log('You chose rock');
    console.log(cpuChoice);

    if (cpuChoice == "Rock") {
      console.log("It's a tie");
    }  else if (cpuChoice == "Paper") {
        console.log(Computer wins);
    }  else if (cpuChoice == "Scissors") {
        console.log(You win);
    };
  };

  function choosePaper() {
    $('#rock, #scissors').hide();
    console.log('You chose paper');
  };

  function chooseScissors() {
    $('#rock, #paper').hide();
    console.log('You chose scissors');
  };



  $('#rock').click(chooseRock);

  $('#paper').click(choosePaper);

  $('#scissors').click(chooseScissors);

});
