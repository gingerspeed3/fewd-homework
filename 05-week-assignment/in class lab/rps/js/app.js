// $(document).ready(function() {
//
//   console.log("this is not a test")
//
//   function choseRock(){
//     console.log("You've selected rock!")
//   }
//
//   function chosePaper(){
//     console.log("You've selected paper!")
//   }
//
//   function choseScissors(){
//     console.log("You've selected scissors!")
//   )}
//
//   $("#rock").click(choseRock)
//
//   $("#paper").click(chosePaper)
//
//   $("#scissors").click(choseScissors)
//
// )}


$(document).ready(function() {
  var computerWeapon = "rock"

  function choseRock(){
    console.log("You chose rock")
    if(computerWeapon == "rock"){
      alert("It's a tie!")
    } else if(computerWeapon == "scissors"){
      alert("You Win!")
    } else if(computerWeapon == "paper"){
      alert("You lost :(")
    } else {
      alert("Oops, your dropped your weapon, pick again")
    }
  }

  function chosePaper(){
    console.log("You chose paper")
    if(computerWeapon == "paper"){
      alert("It's a tie!")
    } else if(computerWeapon == "rock"){
      alert("You Win!")
    } else if(computerWeapon == "scissors"){
      alert("You lost :(")
    } else {
      alert("Oops, your dropped your weapon, pick again")
    }
  }

  function choseScissors(){
    console.log("You chose scissors")
    if(computerWeapon == "scissors"){
      alert("It's a tie!")
    } else if(computerWeapon == "paper"){
      alert("You Win!")
    } else if(computerWeapon == "rock"){
      alert("You lost :(")
    } else {
      alert("Oops, your dropped your weapon, pick again")
    }
  }

  $("#rock").click(choseRock)
  $("#paper").click(chosePaper)
  $("#scissors").click(choseScissors)

});
