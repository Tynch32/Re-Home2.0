CREATE DATABASE  IF NOT EXISTS `re_hogar` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `re_hogar`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: re_hogar
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Jose C. Paz','Buenos Aires','Argentina','Calle 123',NULL,NULL),(2,'Palermo','Buenos Aires','Argentina','Calle falsa 123',NULL,'2023-10-27 21:41:49'),(4,'CABA','Buenos Aires','Argentina','Calle Faltante','2023-10-27 20:41:57','2023-10-27 20:41:57');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Baños y Cocinas',NULL,NULL,NULL),(2,'Electrodomésticos',NULL,NULL,NULL),(3,'Muebles de exterior',NULL,NULL,NULL),(4,'Textil',NULL,NULL,NULL),(5,'Organización y Limpieza',NULL,NULL,NULL),(6,'Herramientas',NULL,NULL,NULL),(7,'Iluminación y Deco',NULL,NULL,NULL),(8,'Jardíny y Aire Libre',NULL,NULL,NULL),(9,'Automotor',NULL,NULL,NULL),(10,'Pisos',NULL,NULL,NULL),(11,'Pinturas',NULL,NULL,NULL),(12,'Aberturas',NULL,NULL,NULL),(13,'Construcción',NULL,NULL,NULL),(14,'Maderas',NULL,NULL,NULL),(15,'Plomería',NULL,NULL,NULL),(16,'Electricidad',NULL,NULL,NULL),(17,'Ferretería',NULL,NULL,NULL),(18,'Otros',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_user`
--

DROP TABLE IF EXISTS `image_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_user`
--

LOCK TABLES `image_user` WRITE;
/*!40000 ALTER TABLE `image_user` DISABLE KEYS */;
INSERT INTO `image_user` VALUES (1,'1696631076554_users_.jpg',NULL,NULL),(2,'1696631134852_users_.png',NULL,NULL),(3,'1698439317338_users_.webp','2023-10-27 20:41:57','2023-10-27 20:41:57');
/*!40000 ALTER TABLE `image_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_product`
--

DROP TABLE IF EXISTS `images_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file` varchar(255) NOT NULL,
  `product_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `image_product_id_idx` (`product_id`),
  CONSTRAINT `image_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_product`
--

LOCK TABLES `images_product` WRITE;
/*!40000 ALTER TABLE `images_product` DISABLE KEYS */;
INSERT INTO `images_product` VALUES (1,'1695947867474_products_.jpg',1,NULL,NULL),(2,'1695950120523_products_.jpg',2,NULL,NULL),(3,'1695950185484_products_.jpg',3,NULL,NULL),(4,'1695950258990_products_.jpg',4,NULL,NULL),(5,'1695950312911_products_.jpg',5,NULL,NULL),(6,'1695950441218_products_.jpg',6,NULL,NULL),(7,'1696002046650_products_.jpg',7,NULL,NULL),(8,'1696260043981_products_.jpg',7,NULL,NULL),(9,'1696260043982_products_.jpg',7,NULL,NULL),(10,'1696260043999_products_.jpg',7,NULL,NULL),(48,'1698193096910_products_.jpg',27,'2023-10-25 00:18:16','2023-10-25 00:18:16'),(49,'1698193096911_products_.jpg',27,'2023-10-25 00:18:16','2023-10-25 00:18:16'),(54,'1698193293995_products_.jpg',29,'2023-10-25 00:21:34','2023-10-25 00:21:34'),(56,'1698193293998_products_.jpg',29,'2023-10-25 00:21:34','2023-10-25 00:21:34'),(57,'1698196833522_products_.jpg',30,'2023-10-25 01:20:33','2023-10-25 01:20:33'),(58,'1698196833523_products_.jpg',30,'2023-10-25 01:20:33','2023-10-25 01:20:33'),(60,'1698196833524_products_.jpg',30,'2023-10-25 01:20:33','2023-10-25 01:20:33'),(61,'1698196895975_products_.jpg',31,'2023-10-25 01:21:36','2023-10-25 01:21:36'),(63,'1698196895987_products_.jpg',31,'2023-10-25 01:21:36','2023-10-25 01:21:36'),(65,'1698196895988_products_.jpg',31,'2023-10-25 01:21:36','2023-10-25 01:21:36'),(67,'1698258993534_products_.jpg',1,'2023-10-25 18:36:33','2023-10-25 18:36:33'),(68,'1698259117608_products_.jpg',1,'2023-10-25 18:38:37','2023-10-25 18:38:37'),(70,'1698259666962_products_.jpg',2,'2023-10-25 18:47:46','2023-10-25 18:47:46'),(71,'1698259666963_products_.jpg',2,'2023-10-25 18:47:46','2023-10-25 18:47:46'),(72,'1698435518527_products_.webp',3,'2023-10-27 19:38:38','2023-10-27 19:38:38'),(73,'1698435518528_products_.jpg',3,'2023-10-27 19:38:38','2023-10-27 19:38:38'),(78,'1698983718870_products_.jpg',36,'2023-11-03 03:55:18','2023-11-03 03:55:18'),(79,'1698983718871_products_.jpg',36,'2023-11-03 03:55:18','2023-11-03 03:55:18'),(80,'1698983718871_products_.webp',36,'2023-11-03 03:55:18','2023-11-03 03:55:18');
/*!40000 ALTER TABLE `images_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `amount` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `shoppingcart_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_shoppingcart_id_idx` (`shoppingcart_id`),
  KEY `orders_product_id_idx` (`product_id`),
  CONSTRAINT `orders_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `orders_shoppingcart_id` FOREIGN KEY (`shoppingcart_id`) REFERENCES `shopping_cart` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,4,1,NULL,NULL,4),(4,6,1,NULL,NULL,4),(8,4,1,NULL,NULL,2),(17,7,1,'2023-11-03 03:04:41','2023-11-03 03:04:41',2),(18,6,1,'2023-11-03 03:04:47','2023-11-03 03:04:47',2),(20,30,1,'2023-11-03 03:31:59','2023-11-03 03:31:59',2),(22,36,1,'2023-11-03 03:55:41','2023-11-03 03:55:41',2),(23,31,1,'2023-11-03 04:49:09','2023-11-03 04:49:09',2),(24,29,1,'2023-11-03 04:49:11','2023-11-03 04:49:11',2),(40,1,1,'2023-11-03 06:14:28','2023-11-03 06:14:28',4);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `discount` int DEFAULT '0',
  `description` varchar(500) NOT NULL,
  `category_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_category_id_idx` (`category_id`),
  CONSTRAINT `product_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cintra Metrica',12500.00,10,'Ideal para hacer todas tus mediciones con precisión',6,NULL,'2023-10-25 18:38:48'),(2,'Destornillador',850.00,10,'Destornillador plano, mango antideslizante y punta magnetica',6,NULL,'2023-10-25 18:47:46'),(3,'Lijadora para madera',76500.00,10,'Lijadora de precisión, apta para todo tipo de maderas, 220v de gran potencia',6,NULL,'2023-10-27 19:38:38'),(4,'Llave Inglesa',11250.00,12,'Llave inglesa de fuerza, de metal reforzado',6,NULL,NULL),(5,'Mazo 5Kg',6000.00,13,'Mazo de 5kg, con mango de madera barnizada',6,NULL,NULL),(6,'Taladro Inalambrico',55000.00,5,'Taladro inalambrico, bateria con independencia de 6hs de uso continuo, bateria recargable de litio. Tiempo de recarga total de la bateria de 2hs',6,NULL,NULL),(7,'Madera de pino x1mt2',25000.00,0,'Madera de pino, de perfecta calidad, barnizada con doble capa, aislante de temperatura, capa recubierta anti insectos.',14,NULL,'2023-10-25 23:00:52'),(27,'Ventana de baño',49000.00,5,'Ventana de 45x70 cm ideal entrada de luz, con marco de aluminio reforzado, y trabador en el centro.',12,'2023-10-25 00:18:16','2023-10-25 00:18:16'),(29,'Ladrillo T8, pallet x144u',43000.00,0,'Ladrillo T8 común de construcción, solo venta por pallet, no se fracciona!',13,'2023-10-25 00:21:34','2023-10-25 00:21:34'),(30,'Puerta estilo granero',135000.00,3,'Puerta estilo granero, de madera de roble barnizada, con corredera y guia incluida, medida estandar.',12,'2023-10-25 01:20:33','2023-10-25 01:20:33'),(31,'Barral para cortinas de acero inoxidable',35000.00,0,'Barral para cortinas de acero inoxidable, adaptable (alcanza los 3mts)',7,'2023-10-25 01:21:35','2023-10-25 01:21:35'),(36,'Pintura Blanca 5lts',17000.00,5,'Pintura blanca, de mayor cobertura en el mercado, la unica que con solo una pasada queda el color perfecto',11,'2023-11-03 03:55:18','2023-11-03 03:55:18');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user',NULL,NULL),(2,'admin',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
INSERT INTO `shopping_cart` VALUES (1,NULL,'2023-11-03 05:38:16'),(2,NULL,'2023-11-05 04:39:05'),(4,'2023-10-27 20:41:57','2023-11-03 06:14:49');
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  `address_id` int DEFAULT NULL,
  `shoppingcart_id` int DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `user_role_id_idx` (`role_id`),
  KEY `user_address_id_idx` (`address_id`),
  KEY `user_shoppingcart_id_idx` (`shoppingcart_id`),
  KEY `user_image_id_idx` (`image_id`),
  CONSTRAINT `user_address_id` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`),
  CONSTRAINT `user_image_id` FOREIGN KEY (`image_id`) REFERENCES `image_user` (`id`),
  CONSTRAINT `user_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `user_shoppingcart_id` FOREIGN KEY (`shoppingcart_id`) REFERENCES `shopping_cart` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Martin','Velazquez','martin@gmail.com','$2a$10$bH70EZM8fFVad0y61uy3E.GkQ3LhJvripjShgjrT049WlQ5SncyDC',2,1,1,1,'2023-10-25 00:18:16','2023-10-25 00:18:16'),(2,'Marisa','Ferrada','marisa@gmail.com','$2a$10$/lCLK7VxFU7fs7fvwJz8eO9fyqi1KYJS7mNuXhp1VWwVPRoSnn2Wq',1,2,2,2,'2023-10-25 00:18:16','2023-10-27 21:41:49'),(3,'Marilyn','Sayago','marilyn@gmail.com','$2a$10$xHIXl7..sYH6qV83dxT9Te0Lk8U/tDluUw4DAYcP1K2Q2x24MyO3u',1,4,4,3,'2023-10-27 20:41:57','2023-10-27 20:41:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 're_hogar'
--

--
-- Dumping routines for database 're_hogar'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-05  3:02:18
