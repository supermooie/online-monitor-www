<?php

$data = file('dfb4_search.dat');

// TODO: THIS IS A TERRIBLE METHOD
$temp = explode('  ', $data[0]);

/*echo '<pre>';
print_r($temp);
echo '</pre>';*/

# "name backend npol nchan nbits length tsamp bw freq observer projid ra dec stt_time"

$filename = $temp[0];
$name = $temp[1];
$backend = $temp[2];
$npol = $temp[3];
$nchan = $temp[4];
$nbits = $temp[5];
$length = $temp[6];
$tsamp = $temp[7];
$bandwidth = $temp[8];
$frequency = $temp[9];
$observer= $temp[10];
$projid = $temp[11];
$ra = $temp[12];
$dec = $temp[13];
$stt_time = $temp[14];

echo "
  <table class=\"gridtable\">
  <tr><th colspan=\"2\"> Observation Details </th></tr>
  <tr><td> Filename </td><td>$filename</td></tr>
  <tr><td> Observer/s </td><td>$observer</td></tr>
  <tr><td> Project ID </td><td>$projid</td></tr>
  <tr><td> Length (s)</td><td>$length</td></tr>
  <tr><td> Npol </td><td>$npol</td></tr>
  <tr><td> Nchan </td><td>$nchan</td></tr>
  <tr><td> Nbits </td><td>$nbits</td></tr>
  <tr><td> Tsamp (s) </td><td>$tsamp</td></tr>
  <tr><td> Bandwidth (MHz)</td><td>$bandwidth</td></tr>
  <tr><td> Frequency (MHz) </td><td>$frequency</td></tr>
  <tr><td> Start time </td><td>$stt_time</td></tr>
  </table>
  ";
?>
