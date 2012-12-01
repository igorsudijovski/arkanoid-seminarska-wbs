<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
  include ("database.php");
 include ("userService.php");
 $arr = getTop10($base);
 mysql_close($base);
 exit(json_encode($arr));
?>
