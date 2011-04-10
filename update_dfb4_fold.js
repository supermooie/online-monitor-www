var img = new Image();
var random = Math.random();

// Pdfb4 fold plot: stokes cyclindrical (pav -SFT)
var url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb4_fold_stokes.gif?' + random;
img.src = url;
document.getElementById('dfb4_fold_stokes').src = url;

// Pdfb4 fold plot: time vs phase (pav -YFp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb4_fold_time.gif?' + random;
img.src = url;
document.getElementById('dfb4_fold_time').src = url;

// Pdfb4 fold plot: frequency vs time (pav -GTp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb4_fold_freq.gif?' + random;
img.src = url;
document.getElementById('dfb4_fold_freq').src = url;

if ($('#dfb4_main').is(":visible") == true) {
  url = ADDRESS + $('#dfb4_main').data("src").plot + '?' + random;
  img.src = url;
  document.getElementById('dfb4_main').src = url;
}
