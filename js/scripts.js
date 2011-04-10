var refresh_rate = 5;
var sleep = 0;

// Hides the default main (big) DFB3 and DFB4 images.
function HideDefaults()
{
  $('#dfb3_main').hide();
  $('#dfb4_main').hide();
  $('#dfb3_search_main').hide();
  $('#dfb4_search_main').hide();
  $('#apsr_main').hide();
  $('#webcam_big').hide();
  $('#help').hide();
}

function HandleTabs()
{
  $("#box1").tabs();
  $("#box2").tabs();
  $("#box3").tabs();
  $("#box4").tabs();
}

function HandleSlider()
{
    $( "#slider" ).slider({
      value:4,
      min: 1,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        refresh_rate = ui.value;
        var seconds_string = ui.value == 1 ? "second" : "seconds";
        $( "#amount" ).text( "Refresh every " + ui.value + " " + seconds_string );
      }
    });
    $( "#amount" ).text( "Refresh every " + $( "#slider" ).slider( "value" ) + " seconds" );
}

// Update observing statuses for DFB3 and DFB4.
function UpdateObservingStatuses()
{
  $('#dfb3_observing_status').load('get_obs_status.php?dfb=3');
  $('#dfb4_observing_status').load('get_obs_status.php?dfb=4');
  $('#observing_status_update_time').load('get_obs_status_update_time.php');
}

// Updates latest plots if backend is currently shown.
function UpdatePlots()
{
  $.getScript('update_apsr.js');

  if ($('#inner-box2').is(":visible") == true) {
    $.getScript('update_dfb3_fold.js');
  }

  if ($('#inner-box8').is(":visible") == true) {
    $.getScript('update_dfb3_search.js');
  }

  if ($('#inner-box4').is(":visible") == true) {
    $.getScript('update_dfb4_fold.js');
  }

  if ($('#inner-box9').is(":visible") == true) {
    $.getScript('update_dfb4_search.js');
  }
}

function UpdateWebcamImage()
{
  // TODO: add if shown...
  if (sleep) {
    sleep--;
  } else {
    sleep = refresh_rate;
    $.getScript('update_parkes_webcam.js');
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
}

function GetCurrentProject()
{
  $('#schedule').load('get_projects.php');
}

function GetTimes()
{
  $('#lmst_time').load('get_current_lmst.php');
  $('#aest_time').load('get_current_aest.php');
  $('#utc_time').load('get_current_utc.php');
}


// Handle all toggleable elements
$(document).ready(function() {

    $('a#help_toggle').click(function() {
      $('#help').toggle("fast");
      return false;
      });

    $('a#webcam_big_toggle').click(function() {

      $('#parkes_webcam').toggle(function() {
        $(this).attr("src", "http://outreach.atnf.csiro.au/visiting/parkes/webcam/parkes.full.jpg?" + Math.random());
        }, function() {
          $(this).attr("src", "http://outreach.atnf.csiro.au/visiting/parkes/webcam/parkes.med.jpg?" + Math.random());
        });

      return false;
      });

    $('a#obs-toggle').click(function() {
      $('#obs-box').toggle(400);
      return false;
      });

    $('a#apsr-toggle').click(function() {
      $('#apsr-box').toggle(400);
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
        UpdateObservingStatuses();
      }, 5000);

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

$(document).ready(function() {
    HideDefaults();
    UpdateObservingStatuses();
    UpdatePlots();
    UpdateWebcamImage();
    UpdateObservingParameters();
    GetCurrentProject();
    GetTimes();
    HandleTabs();
    HandleSlider();
});
