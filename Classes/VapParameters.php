<?php

/**
 * An array populated of the parameters from vap and their corresponding values
 * to be displayed on the web page.
 *
 * Author: Jonathan Khoo
 * Date:   10.11.10
 */

define(VAP_FILE_LOCATION, 'vapdir/vaprun.txt');

class VapParameters
{
  public function __construct()
  {
    $this->init();
  }

  private function init()
  {
    // Open vaprun.txt
    $lines = file(VAP_FILE_LOCATION);

    // Read each line and split using ',' as the delimiter.
    foreach ($lines as $l) {
      list ($key, $value) = explode(',', trim($l));
      $this->vap_parameters[$key] = $value;
    }
  }

  public function convert_vap_parameter($key)
  {
    return $this->vap_parameters[$key];
  }

  private $vap_parameters;

};

?>
