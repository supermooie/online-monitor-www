<?php

/**
 * Populates the observation-information table for a backend.
 * The backend is specified by $_GET['obs_type'].
 *
 * Author: Jonathan Khoo
 * Date:   04.01.11
 */

require_once('Classes/VapParameters.php');

define('OBSERVATION_INFORMATION_DIRECTORY', 'info');

// Fold Mode:
//  * DFB3
//  * DFB4
//  * APSR
//  * CASPSR 
//
// Search Mode:
//  * DFB3
//  * DFB4
static $observation_types_and_files = array(
  'dfb3_fold' => 'dfb3_fold.dat',
  'dfb4_fold' => 'dfb4_fold.dat',
  'dfb3_search' => 'dfb3_search.dat',
  'dfb4_search' => 'dfb4_search.dat',
  'apsr' => 'apsr_obs.info',
  'caspsr' => 'caspsr_obs.info'
);

// Deterine the observation type.
$obs_type = $_GET['obs_type'];

$information_file = $observation_types_and_files[$obs_type];

// Do nothing is obs_type is invalid.
if ($information_file == NULL) {
  return 0;
}

// The format for the observation information is different for APSR
// and the DFBs.
if ($obs_type == 'apsr' || $obs_type == 'caspsr') {
  GetApsrObsInformation($information_file);
} else {
  GetDfbObsInformation($information_file);
}

function GetApsrObsInformation($data_file)
{
  $vp = new VapParameters();

  $file_to_read = OBSERVATION_INFORMATION_DIRECTORY . '/' . $data_file;

  if (is_file($file_to_read) and filesize($file_to_read) > 0) {
    $data = file($file_to_read);
    list($key, $value) = preg_split('/\s+/', trim($data[$i]));

    echo '<table class="gridtable" align="left">';

    if ($data_file == 'apsr_obs.info') {
      echo '<tr><th rowspan=7>A<br>P<br>S<br>R</th></tr>';
    } else {
      echo '<tr><th rowspan=7>C<br>A<br>S<br>P<br>S<br>R</th></tr>';
    }

    for ($i = 3; $i <= 8; $i++) {
      list($key, $value) = preg_split('/\s+/', trim($data[$i]));

      $key = $vp->convert_vap_parameter($key);
      echo "<tr><td> $key </td><td> $value </td></tr>";
    }
    echo '</table>';
  }
}

function GetDfbObsInformation($data_file)
{
  $vp = new VapParameters();

  $file_to_read = OBSERVATION_INFORMATION_DIRECTORY . '/' . $data_file;

  if (is_file($file_to_read) and filesize($file_to_read) > 0) {
    $data = file($file_to_read);

    $vap_fields = explode('  ', $data[0]);
    $vap_values = explode('  ', $data[1]);
    // TODO: In a perfect world, we should check to see that the sizes of
    // $vap_fields and $vap_values are equal.

    $vapfile = 'vapdir/vaprun.txt';

    echo '<table border=1 class="gridtable" align="left">';

    if ($data_file == 'dfb3_fold.dat') {
      echo '<tr><th rowspan=8>D<br>F<br>B<br>3</th></tr>';
    } else {
      echo '<tr><th rowspan=8>D<br>F<br>B<br>4</th></tr>';
    }

    $count = count($vap_fields);
    for ($i = 0; $i < $count; $i++) {
      echo '<tr>';
      $vapval = $vp->convert_vap_parameter(trim($vap_fields[$i]));

      if ($vapval) {
        echo "<td>$vapval</td>";
      } else { 
        echo "<td>$newvalue[0]</td>"; 
      }

      echo "<td>$vap_values[$i]</td>";

      echo "</tr>";
    }
    echo '</table>';
  }
}

?>
