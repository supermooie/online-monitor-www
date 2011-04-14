<?php

define('OBSERVATION_INFORMATION_DIRECTORY', 'info');

static $observation_types_and_files = array(
  'dfb3_fold' => 'dfb3_fold.dat',
  'dfb4_fold' => 'dfb4_fold.dat',
  'dfb3_search' => 'dfb3_search.dat',
  'dfb4_search' => 'dfb4_search.dat',
  'apsr' => 'apsr_obs.info'
);

// Deterine the observation type.
$obs_type = $_GET['obs_type'];

$information_file = $observation_types_and_files[$obs_type];

// Do nothing is obs_type is invalid.
if ($information_file == NULL) {
  return 0;
}

$data = file(OBSERVATION_INFORMATION_DIRECTORY . '/' . $information_file);
$data_split = explode('  ', $data[1]);

$observation_length = $data_split[2];
$pulsar_name = trim($data_split[1]);

// return a percentage of the observation
if ($pulsar_name == 'J2124-3358' ||
  $pulsar == 'J1939+2134' ||
  $pulsar == 'J1857+0943') {
    echo (($observation_length / 60.0) / 32.0) * 100.0;
  } else {
    echo (($observation_length / 60.0) / 64.0) * 100.0;
  }

?>
