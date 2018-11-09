$(document).ready(function() {
  var thermostat = new Thermostat
  $('#temperature').text(thermostat.temperature)
});

$('#temperature-up').on('click' function() {
  thermostat.increaseTemperature()
  $('#temperature').text(thermostat.temperature)
});

$('#temperature-down').click(function() {
  thermostat.decreaseTemperature()
  $('#temperature').text(thermostat.temperature)
});

$('temperature-reset').click(function() {
  thermostat.reset()
  updateTemperature()
});

$('PSM-on').click(function() {
  thermostat.powerSavingModeOn()
  $('#power-saving').text('on')
  updateTemperature()
});

$('PSM-off').click(function() {
  thermostat.powerSavingModeOff()
  $('#power-saving').text('off')
  updateTemperature()
});

function updateTemperature() {
  $('#temperature').text(thermostat.temperature)
  if(thermostat.energyUsage() === 'low-usage') {
    $('#temperature').css('colour', 'green')
  } else if (thermostat.energyUsage() === 'medium-usage') {
    $('#temperature').css('colour', 'black')
  } else {
    $('#temperature').css('colour', 'red')
  };
};
