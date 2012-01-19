<?php

// Magical epoch where UTC == LMST
$same = 1272051154.0;

// Earth time rate / LMST rate ???
$rate = 1.00273792575;

$utc = date("U", time() - date("Z")) ;

$lst_s = (($utc - $same)*$rate + $same);
$lst = date("H:i", $lst_s);

echo "$lst";

?>
