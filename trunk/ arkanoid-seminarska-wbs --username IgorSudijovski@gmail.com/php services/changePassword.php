<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 include ("database.php");
 include ("userService.php");
 $user = $_POST['user'];
 $pass = $_POST['pass'];
 $question = $_POST['question'];
 $answer = $_POST['answer'];
 $u = new User($user);
 if($u->readUser($base)){
 	$u->forgetPassword($question,$answer,$pass,$base);
 }
 mysql_close($base);
?>
