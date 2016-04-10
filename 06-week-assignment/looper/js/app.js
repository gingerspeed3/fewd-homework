var responses = ["yes", "no", 'ask again later', 'maybe', 'reply hazy', 'signs point to yes', 'idk'];


// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

  console.log(responses);

  responses.forEach(
    function(response){
      // alert("Take one down, pass it around...");
      // alert("You took down the " + response);
      document.write(response + "<br>");
  });

  document.write("<hr>");
  document.write("You have " + responses.length + " items");


});
