<?php

$data = file('dfb4_fold.dat');

// TODO: THIS IS A TERRIBLE METHOD
$temp = explode('  ', $data[0]);

/*echo '<pre>';
print_r($temp);
echo '</pre>';*/

$filename = $temp[0];
$name = $temp[1];
$backend = $temp[2];
$npol = $temp[3];
$nsubint = $temp[4];
$nchan = $temp[5];
$length = $temp[6];
$bandwidth = $temp[7];
$frequency = $temp[8];
$observer= $temp[9];
$projid = $temp[10];
$ra = $temp[11];
$dec = $temp[12];
$stt_time = $temp[13];

  //<table class=\"pretty\">

echo "
  <table class=\"gridtable\">
  <tr><td> Filename </td><td>$filename</td></tr>
  <tr><td> Observer/s </td><td>$observer</td></tr>
  <tr><td> Project ID </td><td>$projid</td></tr>
  <tr><td> Length (s)</td><td>$length</td></tr>
  <tr><td> Pulsar name </td><td>$name</td></tr>
  <tr><td> Bandwidth (MHz)</td><td>$bandwidth</td></tr>
  <tr><td> Frequency (MHz) </td><td>$frequency</td></tr>
  <tr><td> Start time (UTC)</td><td>$stt_time</td></tr>
  </table>
  ";
?>
