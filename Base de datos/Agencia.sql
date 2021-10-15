-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: agencia
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `destination_promoted` tinyint DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `date` date DEFAULT NULL,
  `img_destination` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `categoria` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'Popocatépetl, Mex.','2022-01-05','/img/group-1634099748464.jpg',5,'El Popocatépetl es un volcán activo localizado en el centro de México. Se encuentra en los límites territoriales de los estados de Morelos, Puebla y el estado de México. Se localiza unos 72 km al sureste de la Ciudad de México, a 43 km de Puebla, a 63 km de Cuernavaca, y a 53 km de Tlaxcala.',500,'Aventura'),(2,0,'Montebello, Chis.','2021-10-05','/img/group-1634099841013.jpg',5,'El Parque Nacional Lagunas de Montebello, Ubicado en el municipio de La Trinitaria, Chiapas, México, lugar caracterizado por sus atracciones turísticas naturales, históricas y arqueológicas, belleza natural única en su tipo, por sus lagos de distintos colores, provocado por la misma naturaleza que lo rodea, simplemente un lugar mágico.',300,'Naturaleza'),(3,0,'Tequesquitengo, Mor.','2021-09-05','/img/group-1634099887480.jpg',5,'Tequesquitengo es un poblado del municipio de Jojutla en el estado de Morelos, México.​ Como está ubicado a orillas del Lago de Tequesquitengo se ha convertido en uno de los más importantes destinos turísticos de la región.​',800,'Aventura'),(4,0,'Mazamitla, Jal.','2021-08-05','/img/group-1634099918415.jpg',5,'Mazamitla es un municipio y población del estado de Jalisco, México. Se localiza 124 km al sur de Guadalajara en la Región Sureste. Su nombre proviene del náhuatl y significa Lugar donde se hacen flechas para cazar venados',1000,'Rural'),(5,0,'CDMX','2021-12-05','/img/group-1634099946803.jpg',5,'Ciudad de México es la densamente poblada capital de México que se encuentra a gran altura. Es famosa por su Templo Mayor (un templo azteca del siglo XIII), la Catedral Metropolitana de México, de estilo barroco, de los conquistadores españoles y el Palacio Nacional',300,'Entretenimiento');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuarios`
--

DROP TABLE IF EXISTS `tipousuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipousuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuarios`
--

LOCK TABLES `tipousuarios` WRITE;
/*!40000 ALTER TABLE `tipousuarios` DISABLE KEYS */;
INSERT INTO `tipousuarios` VALUES (1,'Administrador'),(2,'Cliente');
/*!40000 ALTER TABLE `tipousuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `last_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `image` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `id_tipo_usuario` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Usuarios_tipoUsuarios_idx` (`id_tipo_usuario`),
  CONSTRAINT `fk_Usuarios_tipoUsuarios` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipousuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Mariana','Rubio','mariana@gmail.com','$2a$10$f5XkWSIwhTR26qWKL1maJ.sVIuwatDcYGfscSi0J6a4X1BV1qrzIi','1634098743259_img.png',1),(2,'Andrea','Cazares','andrea@gmail.com','$2a$10$Bs7yd31XQfXMQciF6Mo7SuYJyVZct3G1PH3aec13p47VwKPaCTgla','1634098894793_img.png',1),(3,'Enrique','Melgar','enrique@gmail.com','$2a$10$1uq13WQAIQaK6M.yE8.MF.t3ONt0k4t5wcg0wYxEIznB0xPE1q4Cq','1634098937251_img.png',1),(4,'Ana','Rubio','ana@gmail.com','$2a$10$ckARpoTLBPaRBggYNnyWlOHX0Ic5J6rK1lyjSFHlWgHfOcR4/Rk0a','1634099086570_img.png',2),(5,'Luis','Izaguirre','luis@gmail.com','$2a$10$J9/1IzqwTqA/IMiQ9skbr.jfq3myGSg/ix81koe2/b.z/cxhnXpr2','1634099138081_img.png',2),(6,' Roberto',' Perez','roberto@gmail.com','$2a$10$rpkQ4YfZrb/d666Lj1C/p.zoJ4kY/C.ix.W4VbxlX5ZyirP3quA5.','1634099221302_img.png',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariosproductos`
--

DROP TABLE IF EXISTS `usuariosproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuariosproductos` (
  `id_compra` int NOT NULL AUTO_INCREMENT,
  `id_productos` int NOT NULL,
  `id_usuarios` int NOT NULL,
  PRIMARY KEY (`id_compra`),
  KEY `fk_Productos_has_Usuarios_Usuarios1_idx` (`id_usuarios`),
  KEY `fk_Productos_has_Usuarios_Productos1_idx` (`id_productos`),
  CONSTRAINT `fk_Productos_has_Usuarios_Productos1` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id`),
  CONSTRAINT `fk_Productos_has_Usuarios_Usuarios1` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariosproductos`
--

LOCK TABLES `usuariosproductos` WRITE;
/*!40000 ALTER TABLE `usuariosproductos` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuariosproductos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-12 23:46:35
