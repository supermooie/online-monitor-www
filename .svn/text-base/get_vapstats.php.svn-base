<?php
/**********************************************
*  get_vapstats() - script to read obs.dat  *
*  files into a multi-dimentional array, and  *
*  output in tabular form                     *
*  LT 23/10/10                                *
**********************************************/

function get_vapstats($datfile)
{
  include 'get_vapline.php';
  $datfile = file($datfile);

  $vap_fields = explode('  ', $datfile[0]);
  $vap_values = explode('  ', $datfile[1]);
  // TODO: In a perfect world, we should check to see that the sizes of $vap_fields
  // ands $vap_values are equal.

  $vapfile = 'vapdir/vaprun.txt';

  echo "<table border=1 class=\"gridtable\" align=\"left\">";

  $count = count($vap_fields);
  for ($i = 0; $i < $count; $i++) {
    echo "<tr>";
    $vapval = get_vapline($vapfile, trim($vap_fields[$i]));

    if ($vapval) {
      echo "<td>$vapval</td>";
    } else { 
      echo "<td>$newvalue[0]</td>"; 
    }

    echo "<td>$vap_values[$i]</td>";

    echo "</tr>";
  }
  echo "</table>";
}

?>
