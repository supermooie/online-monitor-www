<?php 

define('FIX_LD_LIB', 'env PSRHOME=' . PSRHOME . ' TEMPO=' . TEMPO . ' LD_LIBRARY_PATH=/pulsar/psr/packages/linux/qt/lib:/pulsar/psr/packages/linux/pgplot:/usr/local/lib:/pulsar/psr/packages/linux/qt/lib:/pulsar/psr/packages/linux/pgplot:/usr/local/lib:/nfs/aips++/weekly/linux_gnu/lib:/nfs/atapplic/heasoft-6.4.1/i686-pc-linux-gnu-libc2.3.4/lib:/usr/openwin/lib:/usr/X11R6/lib:/usr/local/gnu/lib:/usr/local/lib:/usr/lib:/lib:/usr/xpg4/lib ');

define(PAV_CMD, '/pulsar/psr/linux/bin/pav -GTp files/process.rf -g test.png/png');

$cmd = FIX_LD_LIB . PAV_CMD;

exec($cmd);

?>
