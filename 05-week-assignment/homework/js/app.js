$(document).ready(function() {

  $('#submit-btn').click(function(){
    event.preventDefault();

    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();

    if(city == 'nyc' || city == 'new york' || city == 'new york city' || city == 'big apple') {
      $('body').attr('class','nyc');
    }

    else if (city == 'los angeles' || city == 'la' || city == 'lax' || city == 'city of angels') {
      $('body').attr('class','la');
    }

    else if (city == 'sf' || city == 'san francisco' || city == 'bay area' || city == 'frisco' || city == 'san fran') {
      $('body').attr('class','sf');
    }

    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }

    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }

    else if (city != 'nyc' || city != 'new york' || city != 'new york city' || city != 'big apple' || city != 'sf' || city != 'san francisco' || city != 'bay area' || city != 'frisco' || city != 'san fran' || city != 'austin' || city != 'atx' || city != 'los angeles' || city != 'la' || city != 'lax' || city != 'city of angels' || city != 'sydney' || city != 'syd') {
      alert("Your selection does not have any results, please choose another city.");
    }
  });
});
