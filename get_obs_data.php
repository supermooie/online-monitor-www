<?php

  $data = file('obs_data.txt');

$temp = explode(',', $data[0]);

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
<table>
  <tr><td> Filename </td><td>$filename</td></tr>
  <tr><td> Observer/s </td><td>$observer</td></tr>
  <tr><td> Project ID </td><td>$projid</td></tr>
  <tr><td> RA </td><td>$ra</td></tr>
  <tr><td> DEC </td><td>$dec</td></tr>
  <tr><td> Length (s)</td><td>$length</td></tr>
  <tr><td> Pulsar name </td><td>$name</td></tr>
  <tr><td> Backend </td><td>$backend</td></tr>
  <tr><td> Npol </td><td>$npol</td></tr>
  <tr><td> Nchan </td><td>$nchan</td></tr>
  <tr><td> Nbits </td><td>$nbits</td></tr>
  <tr><td> Tsamp (s)</td><td>$tsamp</td></tr>
  <tr><td> Bandwidth (MHz)</td><td>$bandwidth</td></tr>
  <tr><td> Frequency (MHz) </td><td>$frequency</td></tr>
  <tr><td> Start time </td><td>$stt_time</td></tr>
</table>
";

?>

