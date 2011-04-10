<?php

define('FIX_LD_LIB', 'env PSRHOME=' . PSRHOME . ' TEMPO=' . TEMPO . ' LD_LIBRARY_PATH=/pulsar/psr/packages/linux/qt/lib:/pulsar/psr/packages/linux/pgplot:/usr/local/lib:/pulsar/psr/packages/linux/qt/lib:/pulsar/psr/packages/linux/pgplot:/usr/local/lib:/nfs/aips++/weekly/linux_gnu/lib:/nfs/atapplic/heasoft-6.4.1/i686-pc-linux-gnu-libc2.3.4/lib:/usr/openwin/lib:/usr/X11R6/lib:/usr/local/gnu/lib:/usr/local/lib:/usr/lib:/lib:/usr/xpg4/lib ');

$PAZ_COMMAND = '/pulsar/psr/linux/bin/paz -m -Z "' . $_GET['start'] . ' ' . $_GET['end'] . '" ' . 'files/process.rf';

$cmd = FIX_LD_LIB . $PAZ_COMMAND;

echo $cmd;

exec($cmd);

?>
