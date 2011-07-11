<?php

/**
 * A hack-n-slash method of getting the Parkes telescope information.
 * Echo json-encoded output of the telescope information.
 *
 * Author: Jonathan Khoo
 * Date:   11.07.11
 */

$keys = array(
  'AEST',
  'LMST',
  'DEC',
  'RA',
  'RX',
  'CONTROLLER',
  'FSTAT',
  'T_SET',
  'WD_SPD',
  'WindAvg10s',
  'WindMax1m',
  'WindDir15m'
);

define(INFORMATION_FILE, 'info/telescope.dat');

$contents = file(INFORMATION_FILE);
$i = 0;

foreach ($contents as $line) {
  $values_and_keys[$keys[$i]] = trim($line);
  $i++;
}

echo json_encode($values_and_keys);

?>
