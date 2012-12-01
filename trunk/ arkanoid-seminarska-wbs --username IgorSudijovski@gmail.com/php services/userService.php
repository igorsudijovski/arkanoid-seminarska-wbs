<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 class User{
 	var $user;
 	var $score;
 	private $password;
 	private $question;
 	private $answer;
 	private $scorenum;
 	function __construct($u){
 		$this->user = $u;
 		$score = 0;
 	}
 	function setPassword($password) {
 		$this->password = $password;	
	}
	function setQuestion($question){
		$this->question = $question;
	}
	function setAnswer($answer){
		$this->answer = $answer;
	}
	function readUser($base){
		$result = mysql_query("SELECT * FROM users WHERE user='$this->user'",$base);
		if(mysql_num_rows($result) == 0){
			return false;
		}else{
			$lst = mysql_fetch_assoc($result);
			$this->score = $lst['score'];
			$this->password = $lst['password'];
			$this->question = $lst['question'];
			$this->answer = $lst['answer'];
			$this->scorenum = $lst['scorenum'];
			return true;
		}
	}
	function login($password){
		if($password == $this->password){
			return true;
		}
		return false;
	}
	function forgetPassword($q,$a,$pass,$base){
		if(($q == $this->question) && ($a == $this->answer)){
			mysql_query("UPDATE users SET password='$pass' WHERE user='$this->user'",$base);
			return true;
		}
		return false;
	}
	function updateScore($newscore){
		$nn = $this->scorenum + 1;
		$news = round((($this->score * $this->scorenum) + $newscore)/$nn);
		mysql_query("UPDATE users SET score=$news, numscore=$nn WHERE user='$this->user'");	
	}	
 }
 function registerUser($u, $p, $q, $a,$base){
 	$result = mysql_query("SELECT * FROM users WHERE user='$u'",$base);
		if(mysql_num_rows($result) == 0){
			mysql_query("INSERT INTO users (`user`,`password`,`question`,`answer`) VALUES ('$u','$p','$q','$a')",$base);
			return true;
		}
		return false;
 }
 function getTop10($base){
 	$result = mysql_query("SELECT * FROM users ORDER BY score DESC", $base);
 	$lst = array();
 	$i = 1;
 	while($el = mysql_fetch_assoc($result)){
 		$us = new User($el['user']);
 		$us->score = $el['score'];
 		array_push($lst,$us);
 		if($i >= 10) break;
 		$i++;
 	}
 	return $lst;
 }
 function getQuestion($user,$base){
 	$result = mysql_query("SELECT question FROM users WHERE user='$user'",$base);
 	if(mysql_num_rows($result) == 0){
 		return false;
 	}
 	$lst = mysql_fetch_assoc($result);
 	return $lst['question'];
 }
  class Error{
 	var $error;
 }
   class Answer{
 	var $answer;
 }
?>
