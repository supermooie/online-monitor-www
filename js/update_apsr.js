var img = new Image();
var random = Math.random();

// Pdfb4 fold plot: stokes cyclindrical (pav -SFT)
var url = 'http://pulseatparkes.atnf.csiro.au/dev/plots/apsr_flux_vs_phase.png?' + random;
img.src = url;
document.getElementById('apsr_flux').src = url;

// Pdfb4 fold plot: time vs phase (pav -YFp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/plots/apsr_time_vs_phase.png?' + random;
img.src = url;
document.getElementById('apsr_time').src = url;

// Pdfb4 fold plot: frequency vs time (pav -GTp)
url = 'http://pulseatparkes.atnf.csiro.au/dev/plots/apsr_freq_vs_phase.png?' + random;
img.src = url;
document.getElementById('apsr_freq').src = url;
