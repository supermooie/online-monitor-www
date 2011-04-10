<?php

/**
 * Depending on the GET parameter 'dfb', display whether or not DFBX is
 * currently observing by extracting the boolean value from the
 * dfb status file.
 *
 * Author: Jonathan Khoo
 * Date: 05.08.10
 */

define(DFB3_CSV_INDEX, 0);
define(DFB4_CSV_INDEX, 1);
define(TIME_CSV_INDEX, 2);

define(DFB3_GET_PARAM, "3");
define(DFB4_GET_PARAM, "4");

define(DFB_STATUS_FILE, "dfb_status.txt");

$dfb = $_GET['dfb'];

if (($fh = fopen(DFB_STATUS_FILE, "r")) !== FALSE) {
  while (($data = fgetcsv($fh, 1000, ",")) !== FALSE) {
    switch ($dfb) {
    case DFB3_GET_PARAM:
      $currently_observing = $data[DFB3_CSV_INDEX] == 1 ? TRUE : FALSE;
      break;
    case DFB4_GET_PARAM:
      $currently_observing = $data[DFB4_CSV_INDEX] == 1 ? TRUE : FALSE;
      break;
    default:
      echo "Error";
      break;
    }
  }
}

if ($currently_observing === TRUE ) {
  echo 'OBSERVING';
} else {
  echo 'NOT OBSERVING';
}

?>
