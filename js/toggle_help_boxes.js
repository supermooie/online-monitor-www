//Toggle Help boxes
function ShowHelpBoxes() {

  $('.help-link').click(function() {

    linkId = this.id;

    $('#' + linkId + '-text').fadeIn();
    get_help_text(linkId);
    return false;
    });

}

function HideHelpBoxes() {

  $('.close-div a').click(function() {
    divId = $(this).parents('.help-toggle');
    $(divId).hide();
    return false;
    });

}

//function to load help text into appropriate p element
function get_help_text(linkID) {

  switch (linkId) {
 
    case 'help-tscope':
      helpString = "<h2>Telescope Status</h2><p>Options are 'tracking', 'slewing', 'stationary' or 'MCP'.</p><br />" +
                   "<h3>Tracking</h3><p>The telescope is said to be 'tracking' when observing is in progress. As the earth rotates about its axis, sources appear to move across the sky, and so the telescope must make small adjustments in both altitude and azimuth in order to follow or 'track' a source.</p><br />" +
                   "<h3>Slewing</h3><p>The telescope is said to be 'slewing' when moving to new coordinates.</p><br />" +
                   "<h3>Stationary</h3><p>The telescope is said to be stationary if it is neither tracking nor slewing. This could indicate that an observation has ended, or that the telescope is 'parked' pointing at the zenith for either a wind stow or telescope maintenance.</p><br />" +
                   "<h3>MCP</h3><p>MCP indicates that the telescope is being driven manually by the observer at the Master Control Panel, and not under software control.</p>";
      break;

    case 'help-time':
      helpString = "<h2>Times, wind and receiver status</h2>" +
                   "<h3>AEST (Australian Eastern Standard Time)</h3><p>This time standard is appropriate for the eastern states of Queensland, New South Wales (with the exception of the town of Broken Hill), Victoria, Tasmania and the Australian Capital Territory. AEST is equal to Coordinated Universal Time plus 10 hours (UTC +10).</p><br />" +
                   "<h3>LMST (Local Mean Sidereal Time)</h3><p>Sidereal time is the measurement of earth's rotation with respect to the sky. LMST is calculated relative to Greenwich Mean Sidereal Time (GMST), and is dependant on your longitude with respect to the Greenwich Meridian.</p><br />" +  
                   "<h3>Time to set</h3><p>This indicates the amount of time left before the observed source reaches the horizon, beyond which it is no longer able to be observed.</p><br />" +
                   "<h3>Wind</h3><p>The wind speed at the observatory is measured by two anenometers (one on the focus cabin and another in the field). Both average wind speed and maximum gust speed in km/h are updated every 120 seconds. The telescope undergoes an automated wind 'park' if these measurements reach a certain threshold.</p><br />" +
                   "<h3>Reciever</h3><p>The telescope supports the use of many receivers. For pulsar observations, the Multibeam and 1050 receivers are most important.</p>" +
                     "<p>MULTI: The Multibeam is a 13 beam receiver designed to operate at frequencies of 1230 to 1530 MHz. Generally the central beam only is used for observing known sources, while all beams are required for search scans.</p>" +
                     "<p>1050: The 1050 receiver operates at frequencies of 2600 to 3600 MHz (10 cm), and 700 to 764 MHz (50cm)</p>";
      break;

    case 'help-coords':
      helpString = "<h2>RA/DEC</h2><p>Source coordinates.</p><br />" +
                   "<h3>RA (Right Ascension)</h3><p>RA can be seen as the 'celestial longitude' of a source, an angular distance measured eastward in hours:minutes:seconds from the vernal equinox (00:00:00 RA).</p><br />" +
                   "<h3>DEC (Declination)</h3><p>Declination can be seen as the 'celestial latitude' of a source, an angular distance measured in degrees:arcminutes:arcseconds north (a positive Dec value) or south (a negative Dec value) of the celestial equator.</p>";
      break;

    case 'help-dfb3-fold':
    case 'help-dfb4-fold':
      helpString = "<h2>DFB fold mode</h2>" +
                   "<p>DFB3 and DFB4 (Digital filterbank mark 3 & 4) are two of the telescope's 'backends'. They are responsible for analysing the observed spectrum with a maximum of 2048 frequency channels in the pulsar mode, over a maximum bandwidth of 1024 MHz. In fold mode, the spectrum is 'folded' at the rotational period of the pulsar.</p>";  
      break;

    case 'help-flux-phase':
      helpString = "<h2>Flux Density vs Phase</h2>" +
                   "<p>This plot illustrates the change in strength or amplitude of the signal on the y-axis (flux density), with the position in a pulsar's rotation or 'phase' on the x-axis. This is typically known as an integrated or average pulse profile. It represents the average of many folded pulses during an observation, and is a unique signature of that particular pulsar.</p>";
      break;

    case 'help-time-phase':
      helpString = "<h2>Time vs Phase</h2>" +
                   "<p>This plot illustrates the evolution of position in a pulsar's rotation or 'phase' on the x-axis, with time on the y-axis, and signal amplitude visible as a change in colour intensity. The time scale represents all the subintegrations (folded segments) of the observation.</p>";  
      break;

    case 'help-freq-phase':
      helpString = "<h2>Frequency vs Phase</h2>" +
                   "<p>This plot illustrates the evolution of observing frequency on the y-axis, with the position in a pulsar's rotation or 'phase' on the x-axis, and signal amplitude visible as a change in colour intensity. The frequency scale represents all the frequency channels covering the bandwidth of the observation. Radio frequency interference (RFI) can show up in this plot, visible as horizontal lines occupying one or more frequency channels.</p>"; 
      break;

    case 'help-bandpass':
      helpString = "<h2>Bandpass</h2>" +
                   "<p>This plot illustrates the strength or amplitude of the signal on the y-axis, with the full bandwidth in MHz of both polarisations on the x-axis. Radio frequency interference (RFI) can show up in this plot, visible as strong peaks in amplitude occupying one or more frequency channels.</p>";
      break;

    case 'help-dfb3-search':
    case 'help-dfb4-search':
      helpString = "<h2>DFB search mode</h2>" +
                   "<p>Search mode is used when carrying out a scan of the sky for new pulsars. The output is not folded, and so is simply the spectrum as a function of time.</p>";
      break;

    case 'help-dfb3search-freq-time':
    case 'help-dfb4search-freq-time':
      helpString = "<h2>Frequency vs Time</h2>" +
                   "<p>This plot illustrates the observing frequency on the x-axis, with time on the y-axis. The frequency scale represents all the frequency channels covering the bandwidth of the observation.</p>";
      break;

    case 'help-dfb3-digitiser':
    case 'help-dfb4-digitiser':
      helpString = "";
      break;

    case 'help-apsr':
      helpString = "<h2>APSR</h2><p>ATNF Parkes Swinburne Recorder</p>" +
                   "<p>APSR is a supercomputer 'backend' capable of analysing a maximum of 1 GHz of bandwidth in real-time. Its main role is for high-precision pulsar timing.</p>";
      break;

    case 'help-caspsr':
      helpString = "<h2>CASPSR</h2><p>CASPER Parkes Swinburne Recorder</p>" +
                   "<p>CASPSR is a GPU-based supercomputer 'backend' capable of analysing a maximum of 400 MHz of bandwidth in real-time. It is an integral part of the development of the next generation of radio telescopes such as the Australian Square Kilometre Array Pathfinder (ASKAP).</p>";
      break;

    case 'help-schedules':
      helpString = "<h2>Observation schedules</h2>" +
                   "<p>Observation time is applied for and scheduled much in advance. These tables show the observation currently underway, and observations planned for the next 24 hours or more. This can include any time given to maintenance.</p>";
      break;

    default:
      helpString = 'No information currently available.';
      break;

  }

  $('#' + linkId + '-text > p').html(helpString);

}


$(document).ready(function() {

  ShowHelpBoxes();
  HideHelpBoxes();

});
