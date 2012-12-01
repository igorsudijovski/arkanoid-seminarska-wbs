<?php
/*
 * Created on 28.11.2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 include ("database.php");
 include ("mapService.php");
 $map = new Map();
 $name = $_POST['name'];
 $kor = $_POST['kor'];
 $map->setMapName($name);
 $lst = explode(";",$kor);
 foreach ( $lst as $value ) {
 	$korel = explode(",",$value);
 	$element = new MapElement($korel[0],$korel[1],$korel[2],0);
 	$map->addElement($element);       
}
$map->writeToBase($base);
mysql_close($base);
?>
