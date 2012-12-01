<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 include ("database.php");
 include ("userService.php");
 $u = $_POST['user'];
 $pass = $_POST['pass'];
 $user = new User($u);
 if(!($user->readUser($base))){
 	$err = new Error();
 	$err->error = "wrong username";
 	mysql_close($base);
 	exit(json_encode($err));
 }
 if($user->login($pass)){
 	mysql_close($base);
 	exit(json_encode($user));
 }else{
 	$err = new Error();
 	$err->error = "wrong password";
 	mysql_close($base);
 	exit(json_encode($err));
 }
?>
