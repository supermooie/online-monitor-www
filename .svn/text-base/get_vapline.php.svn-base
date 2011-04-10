<?php
/*************************************
*  get_vapline() - function to read  *
*  PSRCHIVE vap -H output and assign *
*  new values                        *
*  LT 23/10/10			     *
*************************************/

function get_vapline($file, $line, $delimiter="\n")
{
  $i = 0;
  $fp = fopen($file, 'r');

  while (!feof($fp))
    {
      $buffer = stream_get_line($fp, 1024, $delimiter); 
      $bufferline = explode(',', $buffer);
      if ($line==$bufferline[0])
      {
        $val = $bufferline[1];
        return $val;        
      }
      $i++;
      $buffer = '';
    }
  return false;

  unset ($buffer);
  unset ($bufferline);
  fclose($file);
}

?>
