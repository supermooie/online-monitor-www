var img = new Image();
var random = Math.random();

var url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb3_search_freq.gif?' + random;
img.src = url;
document.getElementById('dfb3_search_freq').src = url;

var url = 'http://pulseatparkes.atnf.csiro.au/dev/dfb3_search_hist.gif?' + random;
img.src = url;
document.getElementById('dfb3_search_hist').src = url;
