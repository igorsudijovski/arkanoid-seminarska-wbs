-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 30, 2012 at 11:06 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `arkanoid`
--

-- --------------------------------------------------------

--
-- Table structure for table `map`
--

CREATE TABLE IF NOT EXISTS `map` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `x` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `y` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `level` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `percent` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `played` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `map`
--

INSERT INTO `map` (`ID`, `name`, `x`, `y`, `level`, `percent`, `played`) VALUES
(4, 'Crush all', '0;0;0;0;0;2;2;2;2;2;4;4;4;4;4;6;6;6;6;6;8;8;8;8;8;1;1;1;1;1;3;3;3;3;3;5;5;5;5;5;7;7;7;7;7;9;9;9;9;9', '0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9', '3;1;2;3;4;1;0;0;1;2;5;2;2;5;3;1;3;1;3;4;2;2;4;0;2;1;4;5;0;0;4;0;4;2;4;5;2;5;2;0;5;3;4;0;5;1;5;1;5;5', '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 0),
(5, 'new map', '0;0;0;0;0;2;2;2;2;2;4;4;4;4;4;6;6;6;6;6;8;8;8;8;8;1;1;1;1;1;3;3;3;3;3;5;5;5;5;5;7;7;7;7;7;9;9;9;9;9', '0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9', '5;2;5;0;2;5;2;5;3;0;4;3;4;1;3;1;1;1;4;4;2;1;5;3;5;1;3;3;5;5;1;2;3;5;5;1;0;0;2;2;2;2;3;4;2;1;0;2;1;3', '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 0),
(6, 'best map', '0;0;0;0;0;2;2;2;2;2;4;4;4;4;4;6;6;6;6;6;8;8;8;8;8;1;1;1;1;1;3;3;3;3;3;5;5;5;5;5;7;7;7;7;7;9;9;9;9;9', '0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9', '1;1;5;5;2;1;2;1;1;5;0;1;3;4;3;2;0;5;2;0;4;5;1;3;3;4;1;0;1;0;3;2;0;0;5;3;3;5;0;1;3;0;3;0;5;0;5;4;5;5', '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 0),
(7, 'example', '0;0;0;0;0;2;2;2;2;2;4;4;4;4;4;6;6;6;6;6;8;8;8;8;8;1;1;1;1;1;3;3;3;3;3;5;5;5;5;5;7;7;7;7;7;9;9;9;9;9', '0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9', '2;0;4;5;5;3;3;5;3;3;3;0;4;0;1;5;2;1;1;4;4;4;5;0;0;0;3;1;4;5;1;5;1;5;2;0;4;4;3;0;3;4;1;0;2;4;3;4;2;0', '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 0),
(8, 'map', '0;0;0;0;0;2;2;2;2;2;4;4;4;4;4;6;6;6;6;6;8;8;8;8;8;1;1;1;1;1;3;3;3;3;3;5;5;5;5;5;7;7;7;7;7;9;9;9;9;9', '0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;0;2;4;6;8;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9;1;3;5;7;9', '4;0;5;5;3;4;0;3;4;4;1;5;5;0;4;4;5;0;5;3;5;0;5;5;0;4;2;2;5;1;1;4;0;0;0;2;3;4;4;4;4;3;2;3;1;1;4;4;1;0', '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `question` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `answer` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `score` int(10) unsigned NOT NULL DEFAULT '0',
  `scorenum` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user`, `password`, `question`, `answer`, `score`, `scorenum`) VALUES
('aa', 'novpass', 'asdfa', 'asdfasgsd', 0, 0),
('Igor', '1122', 'fasdf', 'adsfasd', 32, 0),
('Igo21r', 'nesto', 'fasdf', 'adsfasd', 745, 0),
('Igo221r', 'nesto', 'fasdf', 'adsfasd', 2, 0),
('Igo11r', 'nesto', 'fasdf', 'adsfasd', 176, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
