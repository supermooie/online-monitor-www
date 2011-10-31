<?php

/**
 * Takes a backend via GET and echoes 1 if any plots have been modified in the
 * last 5 minutes. Otherwise, echoes 0.
 *
 * Author: Jonathan Khoo
 * Date:   16.08.11
 */

define(PLOTS_DIRECTORY, 'plots/');
define(MODIFICATION_TIME_THRESHOLD, 5 * 60); // check for update in the last 5 minutes.

$backend = $_GET['backend'];

$valid_backend_arguments = array(
  'dfb3',
  'dfb4'
);

if (!in_array($backend, $valid_backend_arguments)) {
  exit(1);
}

$filenames = array(
  '_fold_stokes.gif',
  '_fold_time.gif',
  '_fold_freq.gif',
  '_fold_bandpass.gif'
);

$is_observing = 0;

foreach ($filenames as $filename) {
  if (modified_recently(PLOTS_DIRECTORY . $backend . $filename)) {
    $is_observing = 1;
    break;
  }
}

echo $is_observing;

/**
 * Returns 1 if the file has been modified recently ($time_threshold).
 * Otherwise, returns 0.
 */
function modified_recently($filename,
  $time_threshold = MODIFICATION_TIME_THRESHOLD)
{
  $now = time();
  $last_modified = filemtime($filename);

  return $last_modified > $now - $time_threshold ? 1 : 0;
}

?>

