<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
  include ("database.php");
 include ("userService.php");
 $us = $_POST['user'];
 $tmp = getQuestion($us,$base);
 if($tmp === false){
 	$err = new Error();
 	$err->error = "wrong username";
 	mysql_close($base);
 	exit(json_encode($err));
 }else{
 	$ans = new Answer();
 	$ans->answer = $tmp;
 	mysql_close($base);
 	exit(json_encode($ans)); 	
 }
?>
