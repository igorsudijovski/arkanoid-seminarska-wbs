<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 include ("database.php");
 include ("mapService.php");
 $ID = $_POST['ID'];
 $pl = $_POST['played'];
 $pl++;
 mysql_query("UPDATE map SET played=$pl WHERE ID=$ID",$base);
 mysql_close($base);
?>
