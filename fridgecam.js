$(document).ready(function() {
  function fridgecam_time() {
    var now = new Date();

    // Show this in cafuegos timezone.
    now.setMinutes(now.getMinutes() + now.getTimezoneOffset());
    now.setHours(now.getHours() + 11);

    var currentHours = now.getHours();
    var currentMinutes = now.getMinutes();
    var currentSeconds = now.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    $('#fridgecam-time').html(currentTimeString);
  }

  fridgecam_time();
  setInterval(function(){fridgecam_time();}, 1000);

  function fridgecam_temp() {
    var baseTemperature = 3.75;
    var randomComponent = Math.floor(Math.random()*50) / 100;

    var currentTemperature = baseTemperature + randomComponent;

    var currentTemperatureString = currentTemperature.toFixed(2) + "&deg;C";

    $('#fridgecam-temperature').html(currentTemperatureString);
  }

  fridgecam_temp();
  setInterval(function(){fridgecam_temp();}, 42000);
});
