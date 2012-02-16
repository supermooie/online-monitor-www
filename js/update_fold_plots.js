var img = new Image();
var random = Math.random();
var plot_directory = 'http://pulseatparkes.atnf.csiro.au/dev/plots/';
var not_observing_image = 'http://pulseatparkes.atnf.csiro.au/dev/images/off.png';

var filenames = new Array(
  "_fold_stokes.gif",
  "_fold_time.gif",
  "_fold_freq.gif",
  "_fold_bandpass.gif"
);

var divs = new Array(
  "_fold_stokes",
  "_fold_time",
  "_fold_freq",
  "_bandpass"
);

update_plots('dfb3');
update_plots('dfb4');

function update_plots(backend)
{
  for (var i = 0; i < filenames.length; i++) {
    var url = plot_directory + backend + filenames[i] + '?' + random;
    document.getElementById(backend + divs[i]).src = url;
  }

  if ($('#' + backend + '_main').is(":visible") == true) {
    url = plot_directory + $('#' + backend + '_main').data("src").plot + '?' + random;
    document.getElementById(backend + '_main').src = url;
  }
}
