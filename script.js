$(function () {
  // Add a click() method for #hide-text
  $('#calc_btn').click(function () {
    var bmi_value = 0;
    var h = 0;
    var w = 0;
    h = $('#height').val();
    w = $('#weight').val();
    if ((h != "" && w != "") && (h != 0 && w != 0) && (h > 0 && w > 0)) { //check height and weight values
      bmi_value = (w * 10000) / (h * h); // bmi calculate
      $('#bmi_value').text(bmi_value.toFixed(1)); //print bmi value
      //check bmi value
      if (bmi_value <= 18.5) {
        $('#weight-range').text('Underweight');
      }
      if (bmi_value > 18.5 && bmi_value < 25) {
        $('#weight-range').text('Healthy Weight');
      }
      if (bmi_value >= 25 && bmi_value <= 30) {
        $('#weight-range').text('Overweight');
      }
      if (bmi_value > 30) {
        $('#weight-range').text('Obese');
      }
      //show bmi information 
      $('.bmi-if').fadeIn();
      $('.error').css('display', 'none');
    }
    else {
      $('.bmi-if').css('display', 'none');
      $('.error').css('display', 'block');
    }

  })

  $('#reset_btn').click(function () {
    location.reload();
  })
});

