var img = new Image();
var random = Math.random();

// plot: stokes cyclindrical (pav -SFT)
var url = 'http://pulseatparkes.atnf.csiro.au/dev/caspsr_flux_vs_phase.png?' + random;
img.src = url;
document.getElementById('caspsr_flux').src = url;

// plot: time vs phase (pav -YFp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/caspsr_time_vs_phase.png?' + random;
img.src = url;
document.getElementById('caspsr_time').src = url;

// plot: frequency vs time (pav -GTp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/caspsr_freq_vs_phase.png?' + random;
img.src = url;
document.getElementById('caspsr_freq').src = url;
