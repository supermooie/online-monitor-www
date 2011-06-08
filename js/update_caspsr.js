var img = new Image();
var random = Math.random();

// plot: stokes cyclindrical (pav -SFT)
var url = 'http://pulseatparkes.atnf.csiro.au/dev/plots/caspsr_flux_vs_phase.png?' + random;
img.src = url;
document.getElementById('caspsr_flux').src = url;

// plot: time vs phase (pav -YFp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/plots/caspsr_time_vs_phase.png?' + random;
img.src = url;
document.getElementById('caspsr_time').src = url;

// plot: frequency vs time (pav -GTp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/plots/caspsr_freq_vs_phase.png?' + random;
img.src = url;
document.getElementById('caspsr_freq').src = url;

// plot: bandpass (pav -BTp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/plots/caspsr_bandpass.png?' + random;
img.src = url;
document.getElementById('caspsr_bandpass').src = url;
