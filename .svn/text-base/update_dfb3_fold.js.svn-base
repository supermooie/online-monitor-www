var img = new Image();
var random = Math.random();

// PDFB3 fold plot: stokes cyclindrical (pav -SFT)
var url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb3_fold_stokes.gif?' + random;
img.src = url;
document.getElementById('dfb3_fold_stokes').src = url;

// PDFB3 fold plot: time vs phase (pav -YFp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb3_fold_time.gif?' + random;
img.src = url;
document.getElementById('dfb3_fold_time').src = url;

// PDFB3 fold plot: frequency vs time (pav -GTp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb3_fold_freq.gif?' + random;
img.src = url;
document.getElementById('dfb3_fold_freq').src = url;

var ADDRESS = 'http://pulseatparkes.atnf.csiro.au/dev/';

//$('#temp').html(Math.random());

if ($('#dfb3_main').is(":visible") == true) {
  url = ADDRESS + $('#dfb3_main').data("src").plot + '?' + random;
  img.src = url;
  document.getElementById('dfb3_main').src = url;
}
