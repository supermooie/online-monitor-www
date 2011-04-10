<?php

include 'get_vapline.php';

$data = file('info/apsr_obs.info');

list($key, $value) = preg_split('/\s+/', trim($data[$i]));

echo '<table class="gridtable" align="left">';

for ($i = 3; $i <= 8; $i++) {
  list($key, $value) = preg_split('/\s+/', trim($data[$i]));
  echo "<tr><td> $key </td><td> $value </td></tr>";
}
echo '</table>';

?>
