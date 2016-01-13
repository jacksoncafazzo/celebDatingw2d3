$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (gender === 'male') {
      $('#celeb').empty();
      $('#celeb').append('David');
      $("#kristen").hide();
      $("#jessica").hide();
      $('#david').show();
    }
    if (gender === "female") {
      if (age <= 20) {
        $('#celeb').empty();
        $('#celeb').append('Kristen');
        $("#jessica").hide();
        $('#david').hide();
        $("#kristen").show();
      }
      if (age >20) {
        $('#celeb').empty();
        $('#celeb').append("Jessica");
        $('#david').hide();
        $("#kristen").hide();
        $("#jessica").show();
      }
    }
      $("#youShouldDate").show();
    event.preventDefault();
  });
});
