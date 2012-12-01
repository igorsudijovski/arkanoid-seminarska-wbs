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
 $score = $_POST['score'];
 $u = new User($user);
 $u->readUser($base);
 $u->updateScore($score);
 mysql_close($base);
?>
