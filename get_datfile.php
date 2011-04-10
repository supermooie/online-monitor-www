<?php

/*********************************************
*  get_datfile.php - sets filename variables *
*  and calls get_vapstats()                  *
*  LT 23/10/2010                             *
*********************************************/

//get OBD_DATA_FILE variable

$filename = $_GET["OBS_DATA_FILE"];

//define data files
switch ($filename)
{
  case "dfb3obs":
    $datfile = "dfb3_fold.dat";
    break;
  case "dfb3search":
    $datfile = "dfb3_search.dat";
    break;
  case "dfb4obs":
    $datfile = "dfb4_fold.dat";
    break;
  case "dfb4search":
    $datfile = "dfb4_search.dat";
    break;
  case "apsrobs":
    $datfile = "apsr_obs.dat";
    break;
  default: echo "Data file does not exist";
}

//call get_array()
include "get_vapstats.php";
get_vapstats($datfile);

?>

