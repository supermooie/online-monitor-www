function HideDefaults()
{
  $('#help').hide();
}

$(document).ready(function() {
    HideDefaults();
});

$(document).ready(function() {

    $('form').submit(function() {

      //alert($(this).serialize());

      var paz_script = "paz.php?" + $(this).serialize();

      $.getScript(paz_script, function() {
        UpdatePlot();
      });

      $(':input', '#myForm').not(':button, :submit, :reset, :hidden').val('');

      return false;
      });

  $('a#update').click(function() {
    UpdatePlot();
    return false;
  });

  $('a#create').click(function() {
    CreatePlot();
    return false;
  });

  $('a#help_toggle').click(function() {
    $('#help').toggle("fast");
    return false;
    })

  $('#freq').mousemove(function(e){
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      $('#example2-xy').html("X: " + x + " Y: " + y); 
      });

  });

function UpdatePlot()
{
  $.getScript('update_plot.php', function() {
      var img = new Image();
      var random = Math.random();

      var url = 'http://pulseatparkes.atnf.csiro.au/dev/test.png?' + random;
      img.src = url;
      document.getElementById('freq').src = url;
  });
}

function CreatePlot()
{
  // Copy from original file
  $.getScript('create_plot.php', UpdatePlot());

}

