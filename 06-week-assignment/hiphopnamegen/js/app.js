// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

  var gangsta = ["Cash Money", "Snoop", "Lil'", "Big", "MC", "Ol' Dirty", "Dr"]

  function buttonClicked(){
    var username = $('#username').val()
    var randomNumber = Math.floor(Math.random() * gangsta.length)
    var hipHopName = gangsta[randomNumber] + " " + username
    $('#output').text(hipHopName)
  }

  $('#submit').click(buttonClicked)

});
