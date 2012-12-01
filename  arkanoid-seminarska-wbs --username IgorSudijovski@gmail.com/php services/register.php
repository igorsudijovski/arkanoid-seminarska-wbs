<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 include ("database.php");
 include ("userService.php");
 /*$user = $_POST['user'];
 $pass = $_POST['pass'];
 $answer = $_POST['answer'];
 $question = $_POST['question'];*/
 $user = "sale";
 $pass = "111";
 $answer = "koj sum jas?";
 $question = "sase";
 if(registerUser($user,$pass,$question,$answer,$base)) echo "true";
 else echo "false";
 mysql_close($base);
?>
