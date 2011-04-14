var img = new Image();
var random = Math.random();

// PDFB3 fold plot: stokes cyclindrical (pav -SFT)
var url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb4_search_freq.gif?' + random;
img.src = url;
document.getElementById('dfb4_search_freq').src = url;

var url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb4_search_hist.gif?' + random;
img.src = url;
document.getElementById('dfb4_search_hist').src = url;
