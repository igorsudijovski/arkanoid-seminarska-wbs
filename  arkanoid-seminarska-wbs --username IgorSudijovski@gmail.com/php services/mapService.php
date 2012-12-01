<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 include ("database.php");
 class MapElement{
 	var $x;
 	var $y;
 	var $level;
 	var $percent;
 	function __construct($x, $y, $l, $p){
 		$this->x = $x;
 		$this->y = $y;
 		$this->level = $l;
 		$this->percent = $p;
 	} 	
 }
 class Map{
 	var $mapname;
 	var $ID;
 	var $played;
 	var $map = array();
 	
 	
 	function setMapName($name){
 		$this->mapname = $name;
 	}
 	function addElement($element){
 		array_push($this->map,$element);
 	}
 	function writeToBase($base){
 		$xkor = array();
 		$ykor = array();
 		$level = array();
 		$perc = array();
 		foreach ( $this->map as $key => $value ) {
 			array_push($xkor,$value->x);
 			array_push($ykor,$value->y);
 			array_push($level,$value->level);
 			array_push($perc,$value->percent);
       }
       $xtobase = implode(";",$xkor);
       $ytobase = implode(";",$ykor);
       $levelbase = implode(";",$level);
       $percbase = implode(";",$perc);
       $result = mysql_query("SELECT * FROM map",$base);
       $dontexist = true;
       while($lst = mysql_fetch_assoc($result)){
       	if($lst['x'] == $xtobase && $lst['y'] == $ytobase && $lst['level'] == $levelbase){
       		$dontexist = false;
       		break;
       	}      	
       }
       if($dontexist){
       	 mysql_query("INSERT INTO map (`name`,`x`,`y`,`level`,`percent`) VALUES ('$this->mapname','$xtobase','$ytobase','$levelbase','$percbase')",$base);
       }      
 	}
 }
 class AllMaps{
 	var $allmaps = array();
 	
 	function readFromBase($base){
 		$result = mysql_query("SELECT * FROM map ORDER BY played DESC",$base);
 		if(mysql_num_rows($result) == 0){
 			mysql_close($base);
 			$err = new Error();
 			$err->error = "no maps";
 			exit(json_encode($err));
 		}
 		while($lst = mysql_fetch_assoc($result)){
 			$x = $lst['x'];
 			$name = $lst['name'];
 			$y = $lst['y'];
 			$level = $lst['level'];
 			$per = $lst['percent'];
 			$map = new Map();
 			$map->setMapName($name);
 			$xlst = explode(";",$x);
 			$ylst = explode(";",$y);
 			$lvllst = explode(";",$level);
 			$perlst = explode(";",$per);
 			$map->ID = $lst['ID'];
 			$map->played = $lst['played'];
 			for($i = 0; $i < count($xlst); $i++){
 				$ele = new MapElement($xlst[$i],$ylst[$i],$lvllst[$i],$perlst[$i]);
 				$map->addElement($ele);
 			}
 			array_push($this->allmaps,$map);
 		}
 	}
 	
 }
   class Error{
 	var $error;
 }
?>
