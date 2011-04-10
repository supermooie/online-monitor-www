var img = new Image();
var random = Math.random();

var url = 'http://pulseatparkes.atnf.csiro.au/dev/test.png?' + random;
img.src = url;
document.getElementById('freq').src = url;
