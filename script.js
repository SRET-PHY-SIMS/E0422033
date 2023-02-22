for (i = 0; i < 15 + 1; i++) {
  var electron = "<div class='electron'></div>";
  $('.elements .particles').append(electron);
}

$("#color").slider({
  value: 500,
  range: "min",
  min: 400,
  max: 700,
  slide: function(event, ui) {
    $(this).parent().children(".value").text(ui.value + " Hz");

    $('.elements .shine').css('background', 'linear-gradient(transparent 10%, ' + wavelengthToColor(ui.value) + ' 68%)');

    if (ui.value < 570) {
      $('.electron').show();
    }else{
      $('.electron').hide();
    }
  }
});
$("#intensity").slider({
  value: 65,
  range: "min",
  min: 0,
  max: 100,
  step: 10,
  slide: function(event, ui) {
    $(this).parent().children(".value").text(ui.value + " %");
    $('.elements .shine').css('opacity', ui.value / 100);
    
    
    if (ui.value == 0) {
       $('.electron').remove();
    }
    for (i = 1; i < 10+1; i++) {
    if (ui.value == i*10) {
       $('.electron').remove();
       for (a = 0; a < i; a++) {
        var electron = "<div class='electron'></div>";
        $('.elements .particles').append(electron);
        }
     }
    }
      
  }
});

$("#tension").slider({
  range: "min",
  min: -2.00,
  max: 2.00,
  step: 0.05,
  slide: function(event, ui) {
    $(this).parent().children(".value").text(ui.value.toFixed(2) + " V");
    
  }
});

function wavelengthToColor(wavelength) {
  var r,
    g,
    b,
    colorSpace,
    wl = wavelength,
    gamma = 1;

  if (wl >= 380 && wl < 440) {
    R = -1 * (wl - 440) / (440 - 380);
    G = 0;
    B = 1;
  } else if (wl >= 440 && wl < 490) {
    R = 0;
    G = (wl - 440) / (490 - 440);
    B = 1;
  } else if (wl >= 490 && wl < 510) {
    R = 0;
    G = 1;
    B = -1 * (wl - 510) / (510 - 490);
  } else if (wl >= 510 && wl < 580) {
    R = (wl - 510) / (580 - 510);
    G = 1;
    B = 0;
  } else if (wl >= 580 && wl < 645) {
    R = 1;
    G = -1 * (wl - 645) / (645 - 580);
    B = 0.0;
  } else if (wl >= 645 && wl <= 780) {
    R = 1;
    G = 0;
    B = 0;
  } else {
    R = 0;
    G = 0;
    B = 0;
  }
  colorSpace = "rgba(" + (R * 100) + "%," + (G * 100) + "%," + (B * 100) + "%, " + 1 + ")"

  return colorSpace;
}

var particles = $(function() {

  var color = $('#color').slider("value");
  var intensity = $('#intensity').slider("value");
  var tension = $('#tension').slider("value");

})