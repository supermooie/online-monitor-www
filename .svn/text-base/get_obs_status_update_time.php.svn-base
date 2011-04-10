<?php

/**
 * Extract the timestamp of the last update performed at Parkes.
 *
 * Author: Jonathan Khoo
 * Date: 05.08.10
 */

define(DFB_STATUS_FILE, "dfb_status.txt");
define(TIME_CSV_INDEX, 2);

if (($fh = fopen(DFB_STATUS_FILE, "r")) !== FALSE) {
  while (($data = fgetcsv($fh, 1000, ",")) !== FALSE) {
    echo $data[TIME_CSV_INDEX];
  }
}

?>
