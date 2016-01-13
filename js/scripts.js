$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    $("#kristen").hide();
    $("#jessica").hide();
    $('#david').hide();

    if (gender === 'male') {
      $('#celeb').text('David');
      $('#david').show();
    }
    if (gender === "female") {
      if (age <= 20) {
        $('#celeb').text('Kristen');
        $("#kristen").show();
      }
      if (age >20) {
        $('#celeb').text("Jessica");
        $("#jessica").show();
      }
    }
      $("#youShouldDate").show();
    event.preventDefault();
  });
});
