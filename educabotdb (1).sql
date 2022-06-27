-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2022 a las 23:20:29
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `educabotdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `DNI` int(8) NOT NULL,
  `Nombre y apellido` varchar(64) NOT NULL,
  `E-Mail` varchar(64) NOT NULL,
  `Pregunta 1` text NOT NULL,
  `Pregunta 2` text NOT NULL,
  `Pregunta 3` int(2) NOT NULL,
  `Pregunta 4` int(2) NOT NULL,
  `Pregunta 5` text NOT NULL,
  `Pregunta 6` text NOT NULL,
  `Pregunta 7` text NOT NULL,
  `PROMEDIO` int(2) NOT NULL,
  `Probabilidad` varchar(5) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
