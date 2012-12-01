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
 $played = $_POST['played'];
 $played++;
 mysql_query("UPDATE map SET played=$played WHERE ID=$ID");
 mysql_close($base); 
?>
