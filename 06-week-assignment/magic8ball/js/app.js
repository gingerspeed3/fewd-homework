var responses = ["Results Unclear", "Signs Point To Yes", "Ask Again Later", "It Is Certain", "Outlook Good", "Most Likely", "Don't Count On It", "My Sources Say No"]

// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

  $('#reset').hide();

  function buttonClicked(){
    $('#ball').attr("id","bottom");
    $('#submit').hide();
    $('#reset').show();
    var randomAnswer = Math.floor(Math.random() * responses.length);
    var answer = (responses[randomAnswer]);
    $('#header').text(answer);
    console.log(answer);
  }

  function addResult(){
    responses.push(document.getElementById('newanswer').value);
    alert("Your Response Has Been Added!")
  }

  $('#submit, #reset').click(buttonClicked);

  $('#add').click(addResult);

});
