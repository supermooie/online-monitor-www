var refresh_rate = 5;
var sleep = 0;

function GetTelescopeInformation()
{
  $.getJSON('get_telescope_information.php', function(data) {
      var items = [];

      $.each(data, function(key, val) {
          switch(key) {
            case 'RA':
            $('#ra').text(val);
            break;

            case 'DEC':
            $('#dec').text(val);
            break;

            case 'RX':
            $('#rx').text(val);
            break;

            case 'T_SET':
            $('#t_set').text(val);
            break;

            case 'WD_SPD':
            $('#wd_spd').text(val);
            break;

            case 'DRV_TIME':
              var message = "";
              if (val != "0.0") {
                message = " | Slew time (m): " + val;
              }
              $('#drv_time').text(message);
            break;

            case 'AEST':
            $('#aest_time').text(val);
            break;

            case 'LMST':
            $('#lmst_time').text(val);
            break;

            case 'FSTAT':
              var message = val;
              if (val == "DISH" || val == "SOURCE") {
                message = "DISH IS STATIONARY";
              } else if (val == "SLEWING") {
                message = "SLEWING TO NEW COORDINATE";
              }
              $('#fstat').text(message);
            break;
          }
      });

      //alert(items);

      //alert(data);
      //$('#debug').text(data);
    });
}

//var is_p456 = 0;

// Hides the default main (big) DFB3 and DFB4 images.
function HideDefaults()
{
  $('#dfb3_main').hide();
  $('#dfb4_main').hide();
  $('#dfb3_search_main').hide();
  $('#dfb4_search_main').hide();
  $('#help').hide();
  //added 10/7/11 LT
  $('.help-toggle').hide();
  
}

function HandleTabs()
{
  $("#box1").tabs();
  $("#box2").tabs();
  $("#box3").tabs();
  $("#box4").tabs();
  $("#box6").tabs(); // CASPSR
}

function HandleButtonset()
{
  $("#radio").buttonset();
}

/*function HandleProgressbar()
{
  if (is_p456) {
    $.get('get_observation_progress.php?obs_type=dfb3_fold', function(data) {
        $("#pb1").progressBar(data);
    });
  } else {
    $("#pb1").html('');
  }
}*/

function HandleSlider()
{
    $( "#slider" ).slider({
      value: 2,
      min: 1,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        refresh_rate = ui.value;
        var seconds_string = ui.value == 1 ? "second" : "seconds";
        $("#amount" ).text( "Update rate (s): " + ui.value);
      }
    });
    $("#amount" ).text( "Update rate (s): " + $( "#slider" ).slider( "value" ));
}

// Updates latest plots if backend is currently shown.
function UpdatePlots()
{
  $.getScript('js/update_apsr.js');
  $.getScript('js/update_caspsr.js');

  if ($('#inner-box2').is(":visible") == true) {
    $.getScript('js/update_dfb3_fold.js');
  }

  if ($('#inner-box8').is(":visible") == true) {
    $.getScript('js/update_dfb3_search.js');
  }

  if ($('#inner-box4').is(":visible") == true) {
    $.getScript('js/update_dfb4_fold.js');
  }

  if ($('#inner-box9').is(":visible") == true) {
    $.getScript('js/update_dfb4_search.js');
  }
}

function UpdateWebcamImage()
{
  // TODO: add if shown...
  if (sleep) {
    sleep--;
  } else {
    sleep = refresh_rate;
    $.getScript('js/update_parkes_webcam.js');
  }
}

// Update table to latest observing parameters values.
function UpdateObservingParameters()
{
  $('#dfb3_obs_data').load('get_obs_information.php?obs_type=dfb3_fold');
  $('#dfb4_obs_data').load('get_obs_information.php?obs_type=dfb4_fold');
  $('#dfb3_search_data').load('get_obs_information.php?obs_type=dfb3_search');
  $('#dfb4_search_data').load('get_obs_information.php?obs_type=dfb4_search');
  $('#apsr_obs_data').load('get_obs_information.php?obs_type=apsr');
  $('#caspsr_obs_data').load('get_obs_information.php?obs_type=caspsr');
}

function GetCurrentProject()
{
  $('#schedule_today').load('get_projects_today.php');
  $('#schedule_tomorrow').load('get_projects_tomorrow.php');
}

function GetTimes()
{
  //$('#lmst_time').load('get_current_lmst.php');
  //$('#aest_time').load('get_current_aest.php');
  //$('#utc_time').load('get_current_utc.php');
}


// Handle all toggleable elements
$(document).ready(function() {

    $('a#help_toggle').click(function() {
      $('#help').toggle("fast");
      return false;
      });

    $('a#obs-toggle').click(function() {
      $('#obs-box').toggle(400);
      return false;
      });
});

// Interval events.
$(document).ready(function() {
    webcam_interval = setInterval(function() {
      UpdateWebcamImage();
    }, 1000);

    setInterval(function() {
        UpdatePlots();
        UpdateObservingParameters();
        //HandleProgressbar();
      }, 5000);

    setInterval(function() {
      GetTelescopeInformation();
    }, 1000);

    setInterval(function() {
        GetCurrentProject();
      GetTimes();
      }, 60000);
    });

// Thumbnail to populate main plots
$(document).ready(function() {
    // DFB3 toggles
    $('a#dfb3_fold_stokes_toggle').click(function() {
      $('#dfb3_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb3_fold_stokes.gif?" + Math.random()); }
        );
      $('#dfb3_main').data("src", { plot: 'big-dfb3_fold_stokes.gif' });

      return false;
      });

    $('a#dfb3_fold_time_toggle').click(function() {
      $('#dfb3_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb3_fold_time.gif?" + Math.random()); }
        );
      $('#dfb3_main').data("src", { plot: 'big-dfb3_fold_time.gif' });
      return false;
      });

    $('a#dfb3_fold_freq_toggle').click(function() {
      $('#dfb3_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb3_fold_freq.gif?" + Math.random()); }
        );
      $('#dfb3_main').data("src", { plot: 'big-dfb3_fold_freq.gif' });
      return false;
      });

    $('a#dfb3_bandpass_toggle').click(function() {
      $('#dfb3_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb3_bandpass.gif?" + Math.random()); }
        );
      $('#dfb3_main').data("src", { plot: 'big-dfb3_bandpass.gif' });
      return false;
      });

    // TODO: get dfb4 and dfb4 to hide
    $('a#dfb3_main_toggle').click(function() {
      $('#dfb3_main').hide("fast")
      return false;
      });

    // DFB4 toggles
    $('a#dfb4_fold_stokes_toggle').click(function() {
      $('#dfb4_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb4_fold_stokes.gif?" + Math.random()); }
        );
      $('#dfb4_main').data("src", { plot: 'big-dfb4_fold_stokes.gif' });
      return false;
      });

    $('a#dfb4_fold_time_toggle').click(function() {
      $('#dfb4_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb4_fold_time.gif?" + Math.random()); }
        );
      $('#dfb4_main').data("src", { plot: 'big-dfb4_fold_time.gif' });
      return false;
      });

    $('a#dfb4_fold_freq_toggle').click(function() {
      $('#dfb4_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb4_fold_freq.gif?" + Math.random()); }
        );
      $('#dfb4_main').data("src", { plot: 'big-dfb4_fold_freq.gif' });
      return false;
      });

    $('a#dfb4_bandpass_toggle').click(function() {
      $('#dfb4_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb4_bandpass.gif?" + Math.random()); }
        );
      $('#dfb4_main').data("src", { plot: 'big-dfb4_bandpass.gif' });
      return false;
      });

    $('a#dfb3_search_freq_toggle').click(function() {
      $('#dfb3_search_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb3_search_freq.gif?" + Math.random()); }
        );
      $('#dfb3_search_main').data("src", { plot: 'big-dfb3_search_freq.gif' });
      return false;
      });

    $('a#dfb4_search_freq_toggle').click(function() {
      $('#dfb4_search_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb4_search_freq.gif?" + Math.random()); }
        );
      $('#dfb4_search_main').data("src", { plot: 'big-dfb4_search_freq.gif' });
      return false;
      });

    $('a#dfb3_search_hist_toggle').click(function() {
      $('#dfb3_search_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb3_search_hist.gif?" + Math.random()); }
        );
      $('#dfb3_search_main').data("src", { plot: 'big-dfb3_search_hist.gif' });
      return false;
      });

    $('a#dfb4_search_hist_toggle').click(function() {
      $('#dfb4_search_main').show(
        "fast",
        function(){ $(this).attr("src", "big-dfb4_search_hist.gif?" + Math.random()); }
        );
      $('#dfb4_search_main').data("src", { plot: 'big-dfb4_search_hist.gif' });
      return false;
      });

    $('a#dfb3_search_toggle').click(function() {
      $('#dfb3_search_main').hide("fast")
      return false;
      });

    $('a#dfb4_search_toggle').click(function() {
      $('#dfb4_search_main').hide("fast")
      return false;
      });

    // TODO: get dfb3 and dfb4 to hide
    $('a#dfb4_main_toggle').click(function() {
      $('#dfb4_main').hide("fast")
      return false;
      });

    $('#webcam-box').draggable();
});

//Toggle Help icons - added 18/7/11 LT
function ToggleHelpIcons() {

  $('#help-all').click(function() {
    $('.help-icon').toggle();
    if ($('.help-icon').is(':visible')) {
      $('#help-icon').css('color','red');
      $('#help-icon').attr("title", "Hide help icons");
    } else {
      $('#help-icon').css('color','green');
    }
    });

}

//Toggle Help boxes - added 18/7/11 LT
function ToggleHelpBoxes() {

  $.getScript('js/toggle_help_boxes.js');

}

$(document).ready(function() {
    HideDefaults();
    UpdatePlots();
    UpdateWebcamImage();
    UpdateObservingParameters();
    GetCurrentProject();
    GetTimes();
    HandleTabs();
    HandleSlider();
    //HandleProgressbar();
    HandleButtonset();
    ToggleHelpIcons();
    ToggleHelpBoxes();
    GetTelescopeInformation();
});
