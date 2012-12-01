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
 $answer = $_POST['answer'];
 $question = $_POST['question'];
 if(registerUser($user,$pass,$question,$answer,$base)){
	mysql_close($base);
	$an = new Answer();
	$an->answer = "register successfully";
	exit(json_encode($an));
 }else{
	mysql_close($base);
	$an = new Answer();
	$an->answer = "register error";
	exit(json_encode($an));
 }

?>
