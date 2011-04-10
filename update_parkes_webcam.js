var img = new Image();
random = Math.random();

//var url = 'http://outreach.atnf.csiro.au/visiting/parkes/webcam/parkes.med.jpg?' + random;
var url = 'http://pulseatparkes.atnf.csiro.au/dev/image.png?' + random;
img.src = url;
document.getElementById('parkes_webcam').src = url;

if ($('#webcam_big').is(":visible") == true) {
  url = 'http://outreach.atnf.csiro.au/visiting/parkes/webcam/parkes.full.jpg?' + random;
  img.src = url;
  document.getElementById('parkes_webcam').src = url;
}
