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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Jose C. Paz','Buenos Aires','Argentina','Calle FALSA',NULL,'2023-12-20 22:14:40'),(22,'Azkaban','Gran Bretaña','Reino Unido','Calle Falsa 123','2023-11-23 22:48:03','2023-12-04 14:16:19');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_user`
--

LOCK TABLES `image_user` WRITE;
/*!40000 ALTER TABLE `image_user` DISABLE KEYS */;
INSERT INTO `image_user` VALUES (1,'1696631076554_users_.jpg',NULL,NULL),(20,'1700779683857_users_.jpeg','2023-11-23 22:48:03','2023-11-23 22:48:03');
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
  CONSTRAINT `image_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=232 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_product`
--

LOCK TABLES `images_product` WRITE;
/*!40000 ALTER TABLE `images_product` DISABLE KEYS */;
INSERT INTO `images_product` VALUES (81,'$2a$06$SdtDgclpbVByxW3lABaeH.k2mvDb5xHxwdwHWW0Zv2hiVrixBy.webp',37,'2023-11-21 00:49:35','2023-11-21 00:49:35'),(82,'$2a$06$SdAigLQbUc0gM4vo4lQmueR7v7QOib4S88CWVLevgoR.3eV5qEdO.webp',37,'2023-11-21 00:49:35','2023-11-21 00:49:35'),(83,'$2a$06$kucJ89q9bew1XllX8lUu0FclnKB6XJKxdnfYCTvytDxDhQGkrk2.webp',37,'2023-11-21 00:49:35','2023-11-21 00:49:35'),(84,'$2a$06$gOKa.ovbb1cL6LhxCPIk.w3wgw0dI8CWYCwBDvq42QyZudTxQPjy.webp',38,'2023-11-21 00:52:58','2023-11-21 00:52:58'),(85,'$2a$06$KavgWq96bI0NuVtas3mvOOO9k.jjIR4Tc0EKyYBm30Lf0RWbpinm.webp',38,'2023-11-21 00:52:58','2023-11-21 00:52:58'),(86,'$2a$06$wcu2L0BLEX.X5QQNMku4YetlCp2p02KExqmt4Lp9VXhuWQSN8TEGW.webp',39,'2023-11-21 00:55:28','2023-11-21 00:55:28'),(87,'$2a$06$BRGYAYhqyxa9.LzOIDqk.OoH.MN3rd2CdyXYLGKoZbkvpuZ9hGiG.webp',39,'2023-11-21 00:55:28','2023-11-21 00:55:28'),(88,'$2a$06$PCVFP0ge7aAruSMm.lidse6mraSB9UqNLlGqihJt52SEIwLvAIbgi.webp',39,'2023-11-21 00:55:28','2023-11-21 00:55:28'),(89,'$2a$06$AjYNavdn4pm1nDd6M6gtS.V0i7aka4uJMqcjHWqp11cLXrobItaFC.webp',39,'2023-11-21 00:55:28','2023-11-21 00:55:28'),(90,'$2a$06$VixS4kBVI6O2C1avP38xpuJB0UmfNLJclbITqaUJgecu0GwKTZTOq.webp',40,'2023-11-21 00:58:25','2023-11-21 00:58:25'),(91,'$2a$06$IuIDwu2ZmhldBT5fXuA7SOYpOp9DgCthhXA3TRZdz6OI7vaLkNS9m.webp',40,'2023-11-21 00:58:25','2023-11-21 00:58:25'),(92,'$2a$06$97herBiJuy5NG36S3k5NEOwnkBAQGwB5fJEsYqazBSjAMjB1fEE3K.webp',40,'2023-11-21 00:58:25','2023-11-21 00:58:25'),(93,'$2a$06$qVccJcMpY7c.l2yKhqNanOdH0Oj0HJuRF5hGRzZFjOQVhZR8TkUi.webp',41,'2023-11-21 01:01:51','2023-11-21 01:01:51'),(94,'$2a$06$5kon3LHaKRyXOjlGqoQl5u8ZjzBx8MNRd.4Psno.V9nxIOSfqAda.webp',41,'2023-11-21 01:01:51','2023-11-21 01:01:51'),(95,'$2a$06$YD1CSvdzX0WFE9I14t9PxuBY9yt.NtT6HybNjnB0Zz08ixFB413l2.webp',41,'2023-11-21 01:01:51','2023-11-21 01:01:51'),(96,'$2a$06$06X50YuXdNuCUyP0usHIuFgu7vsv8eAq0pj7vYJIl5FLN9t0gGgS.webp',41,'2023-11-21 01:01:51','2023-11-21 01:01:51'),(97,'$2a$06$86CKJoQXHIPrrI1jYL63eSCBqsFBbmfMvMih1ZzvT..DSFy9xWBa.webp',41,'2023-11-21 01:01:51','2023-11-21 01:01:51'),(98,'$2a$06$Vi0ShEyN0YIiHqb6JVqoOyOrXye1sz7gdM9QI9Dbfz7A2C01PdgG.webp',42,'2023-11-21 01:04:32','2023-11-21 01:04:32'),(99,'$2a$06$382wopgPb6giJtKJZzF7j.LrumFComD5XkWV3Gpsba5WKZrN0kq1G.webp',42,'2023-11-21 01:04:32','2023-11-21 01:04:32'),(100,'$2a$06$npkDwqAq8bq0wrJgtTMIb.bKeRKATm1XKQnclLS2Ii1BQTQk.jKu.webp',42,'2023-11-21 01:04:32','2023-11-21 01:04:32'),(101,'$2a$06$fxsBHGgBYY.5ro8Frk8TJOWZtOORAxXonf7pei6qzG4sGFnIj90LO.webp',43,'2023-11-21 01:05:45','2023-11-21 01:05:45'),(102,'$2a$06$CANZe9Xz0N9MgV91M7ItUO4FmRhG04Cb9TRgMKDWNc2TRbUXKZK4q.webp',43,'2023-11-21 01:05:45','2023-11-21 01:05:45'),(103,'$2a$06$CVjJRac6UguQLr34jqLT1ejTnOK08xFuLYTV0WmBtA0zb2CZ.O.webp',43,'2023-11-21 01:05:45','2023-11-21 01:05:45'),(104,'$2a$06$MX0DnZ73eNLTErGYa2MO65OhYjQZSh67Gph659nbFTh4IqaRLK.webp',44,'2023-11-21 01:07:16','2023-11-21 01:07:16'),(105,'$2a$06$bFRxIuTy8hmhqgfKC5XT.6r743ITcXbd1rgoVZ5BKHKxvUnL8Wxi.webp',44,'2023-11-21 01:07:16','2023-11-21 01:07:16'),(106,'$2a$06$7rEDOzG7VOu0LC5i5.ClueJONbAj2nvJzXEEGbrXtYlbiJ4t2PBW.webp',45,'2023-11-21 01:37:59','2023-11-21 01:37:59'),(107,'$2a$06$1xV5nk3ZwGQmvQxwUFXU1uHIMqNzXx1NA22XelYQ6pEUjVxArfHW.webp',45,'2023-11-21 01:37:59','2023-11-21 01:37:59'),(108,'$2a$06$of0Q3Ys0m0URAdRS1N84VuIk.9MqPCs5xPzfnhFKM7UEldmt5iabe.webp',45,'2023-11-21 01:37:59','2023-11-21 01:37:59'),(109,'$2a$06$g6HFAowDsyTw14O0DRbZ7.YxIliLLRybgV2OzcJbVcEom.VtfGMzu.webp',46,'2023-11-21 01:39:56','2023-11-21 01:39:56'),(110,'$2a$06$xGAbznK9qJfGSqpwasx15Orx8mG.7kwOaNHv.ZuTsl13UQ8yDqG9q.webp',46,'2023-11-21 01:39:56','2023-11-21 01:39:56'),(111,'$2a$06$4LaX8Hcd2BEtmy5qWoOv.qHHhqd33Le7tgnNDha9rs5evTYcLZG.webp',46,'2023-11-21 01:39:56','2023-11-21 01:39:56'),(112,'$2a$06$yZ4DhlZwJUqoKQ6gCZYCuOZNHvmsT0H6VeC9vBWuA1J9z5KgKEvaa.webp',47,'2023-11-21 01:41:26','2023-11-21 01:41:26'),(113,'$2a$06$DtRx2Rl7XfJWC92Ny7vSuaPxiYqdCYnjV20AgZaWuEvvzPzthBi.webp',47,'2023-11-21 01:41:26','2023-11-21 01:41:26'),(114,'$2a$06$XVYBsWcstFZnwQu2rxSyOuDn2oZuno7YG9atApZOgOQQUVfHmSm.webp',47,'2023-11-21 01:41:26','2023-11-21 01:41:26'),(115,'$2a$06$ubUoAqdvp57HWATPQzHXL.rAUsJhsvI1Emb5cvbD6uDJKbSWzDWn2.webp',48,'2023-11-21 01:42:52','2023-11-21 01:42:52'),(116,'$2a$06$9j9NawjUd3VSDp1ZCUGOc.asnulRkV6zZeSpx4qQ.YpnsrM9qele.webp',48,'2023-11-21 01:42:52','2023-11-21 01:42:52'),(117,'$2a$06$Yp.Hk.7HrxmEf63yuxhIu9GyIxorGwPd3P6oo9ThgMko2f3yCNzK.webp',48,'2023-11-21 01:42:52','2023-11-21 01:42:52'),(118,'$2a$06$8bjQBIBsNYfeB3douKP0ouPA2UYjOljlL6vLeyWHjCVXy8G5rDhm.webp',48,'2023-11-21 01:42:52','2023-11-21 01:42:52'),(119,'$2a$06$qweMA.t3xtGJdm1T9wRhOxfOPTA9rVYGX4XKssayKaQufEwp80q.png',49,'2023-11-21 01:44:47','2023-11-21 01:44:47'),(120,'$2a$06$2f2H5jROU5GtvYGvTq017OiTyJzEsEaEFXtYNM4DZ3nIC1m4rknO.webp',49,'2023-11-21 01:44:47','2023-11-21 01:44:47'),(121,'$2a$06$kQkk02S64tTbPb95osNHOuY7Q9DIoKYNzJlPl8SvqSqJ8UjM4BYe..webp',50,'2023-11-21 01:46:33','2023-11-21 01:46:33'),(122,'$2a$06$UwUBTU0yVhrqOJX53AHnQeaOVJQlXQT1Mhm546UaCMRxffzHeWu.webp',50,'2023-11-21 01:46:33','2023-11-21 01:46:33'),(123,'$2a$06$Uac.61KcdBfiOzn83q9OYurvKoWw4adqVFc5e5pSJ1CV9uFOrgili.webp',50,'2023-11-21 01:46:33','2023-11-21 01:46:33'),(124,'$2a$06$VRZHfpy1NSGQihKLBMfkGOdZqDZeCL5o8OVPGSinrc2L78drQ5GO.webp',51,'2023-11-21 01:49:46','2023-11-21 01:49:46'),(125,'$2a$06$ALM31v1seN.A3T3YbB1z7.OIMNjDlxwEfVgqPVTiyrnv.Nk0lbiPG.webp',52,'2023-11-21 01:51:12','2023-11-21 01:51:12'),(126,'$2a$06$FTFOMqXQzmjYqXkJIK8OiObEVMrJBRd9cqYOY1rtToQ2jX0kli.webp',52,'2023-11-21 01:51:12','2023-11-21 01:51:12'),(127,'$2a$06$ECC2DbfxIt3dUglpOyvllOjriRG0KWih63FxX3B6iGuLp6O9nyae6.webp',52,'2023-11-21 01:51:12','2023-11-21 01:51:12'),(128,'$2a$06$v0uG6k1gb0TC89qz4MGO.dQh9WVm9PAIbokSSzMFGkMr0nX.sYO.webp',52,'2023-11-21 01:51:12','2023-11-21 01:51:12'),(129,'$2a$06$2Gfz5Voep2casIzNQ1Vo.gvbnYmpNA.0KWMaxdclkmb9UCYL2Ka..webp',53,'2023-11-21 01:52:51','2023-11-21 01:52:51'),(130,'$2a$06$KDBatkV1AMoJNxbvfd3hE.pjAzT45JWiMg1zfzDndfOZjykxDcIFu.webp',53,'2023-11-21 01:52:51','2023-11-21 01:52:51'),(131,'$2a$06$EctR05pY0mc6Q.CyBB64i.RMaPUmFUdhyhKaYmYY21Ysd3qq73VY2.webp',53,'2023-11-21 01:52:51','2023-11-21 01:52:51'),(132,'$2a$06$CDkG3zJFBoiLms4Bs4s26OfSaHFSSniCcuhX4i.IR3e2o4ECy3bxq.webp',54,'2023-11-21 01:55:14','2023-11-21 01:55:14'),(133,'$2a$06$BVVdmLd9VTLo1cyN3Pm9ubX8U7r0YsGviNRuWrX3kNsdk3bkxICe.webp',54,'2023-11-21 01:55:14','2023-11-21 01:55:14'),(134,'$2a$06$FLPcm4Po4yXrh03wSJJiJek5PLNAMal.hAn4UCQ8Xgzq2uleIYtjW.webp',55,'2023-11-21 01:56:47','2023-11-21 01:56:47'),(135,'$2a$06$OnwkppUB1HeghRnkmPwMZOkiuAQoBWKKr57tmW7d.lUMwLKuTvv6.webp',55,'2023-11-21 01:56:47','2023-11-21 01:56:47'),(136,'$2a$06$w4ocy.eK8DICyYT30KtCOB5Vt2QEf03l0tIE2.UkYkf6zyixpvla.webp',55,'2023-11-21 01:56:47','2023-11-21 01:56:47'),(137,'$2a$06$W2M1K1hZNA7hhLetEMetguTIiX02epHRY.v29a9.xJEKjbJBeugu.webp',56,'2023-11-21 01:58:47','2023-11-21 01:58:47'),(138,'$2a$06$6rULhXwYJtc4dqaptQ3qsOzdZdtpG15pZl81gpTMJtSp1XzsxdzO.webp',56,'2023-11-21 01:58:47','2023-11-21 01:58:47'),(139,'$2a$06$xL1pkdh1YBJFqg977cyzJepzPQ3lIhuOMuyZ7ZJ8IdySHQmMSXQWK.webp',56,'2023-11-21 01:58:47','2023-11-21 01:58:47'),(140,'$2a$06$uf2LxpJvN8pJ1qCwJadbeTab58xXew6WiMxU4UpfGbNxRzG1G.webp',57,'2023-11-21 02:00:08','2023-11-21 02:00:08'),(141,'$2a$06$v0CkxJ.lsv.YKpRYgQEDcOp0YbUGJTvxA4aWbuPdLwXMwrTQyy0oa.webp',57,'2023-11-21 02:00:08','2023-11-21 02:00:08'),(142,'$2a$06$u5xZuFx9PrrL55SRpWJDOH1nF8OeoMvrOayuLL8qnv.DRFsmHua.webp',57,'2023-11-21 02:00:08','2023-11-21 02:00:08'),(143,'$2a$06$WAh2OcIf2XVyL9X8wuL.oYcr2cgAF1WzER1oOPuEOr3koI3ZApa.webp',58,'2023-11-21 02:02:07','2023-11-21 02:02:07'),(144,'$2a$06$vBYFtQ8NMd12AdLzvsrq7ell44YW60cJ8u7e4SJR8r4ZRMUuR3TmC.webp',58,'2023-11-21 02:02:07','2023-11-21 02:02:07'),(145,'$2a$06$JOmm88U8GXVuK3cyMYGbk.RVhx3GuIYmChGtJ5X2Ka8y2K8Rump1m.webp',58,'2023-11-21 02:02:07','2023-11-21 02:02:07'),(146,'$2a$06$pfEaVwQAXcfSdMK31Xw9Au8dUkonnwbwzsDfSTfORArfTQTI.QqiO.webp',58,'2023-11-21 02:02:07','2023-11-21 02:02:07'),(147,'$2a$06$tHOpjAu7VES7x0sZFfiPZu732se6v2npXw8IN4xIJrCZ8c.bn1bBm.webp',59,'2023-11-21 02:03:29','2023-11-21 02:03:29'),(148,'$2a$06$bU7nArig194FbJWNJwEvmupVQGwJF5AfmEUGAguueSmhftXlT7AO.webp',59,'2023-11-21 02:03:29','2023-11-21 02:03:29'),(149,'$2a$06$PmRGkMDyGEXyJBbocL8wyutKv2GQvj20CvxMeTw4ysYyu2uz2lvj2.webp',59,'2023-11-21 02:03:29','2023-11-21 02:03:29'),(150,'$2a$06$HLgUsdR4HgkLWF0XjiVnc.JNabJJiRNOL66eaYsCsh5TKJ3eTuY4O.webp',59,'2023-11-21 02:03:29','2023-11-21 02:03:29'),(151,'$2a$06$SOA3Jujig872bZm2LMp9zeho0IWGKqFecWCL8.sYntolOh6XuOCS.webp',59,'2023-11-21 02:03:29','2023-11-21 02:03:29'),(152,'$2a$06$q0zhlZRVOtlC9joyWkJ3ueNqziXtG9ErDM1DmPmFtnOciCpad3jpi.webp',60,'2023-11-21 02:09:17','2023-11-21 02:09:17'),(153,'$2a$06$S06hYIZ48pgLrJi2pVrVo.lnNzZZXNGBuBSFBR2yrAB3JVXfNmD.C.webp',60,'2023-11-21 02:09:17','2023-11-21 02:09:17'),(154,'$2a$06$fK8Y2cAMv7BuEFVsAJ8Xn.d16X2gSKxsvZzIHYVBRGtFZMfX5JMae.webp',60,'2023-11-21 02:09:17','2023-11-21 02:09:17'),(155,'$2a$06$W4Emx.NscMXGVgT.cUPX8esAypFU.DoXHGqy4xSOiKtSXVooOqeuW.webp',60,'2023-11-21 02:09:17','2023-11-21 02:09:17'),(156,'$2a$06$PN8MWkuttzs7C0fz5eLL6..ufHHq9mq1GMmfYSuu0qIpobXV0oepC.webp',60,'2023-11-21 02:09:17','2023-11-21 02:09:17'),(157,'$2a$06$UYtyxud8vuvktHA.HVxgFOg9XxSqgjznmmYLIW9HxF0s5CJB0XO.webp',61,'2023-11-21 02:34:03','2023-11-21 02:34:03'),(158,'$2a$06$Hwo58uIJZtEvWh7GMmlSObkl38oAoZ3RTgTna72bKCKGbN98tPbe.webp',61,'2023-11-21 02:34:03','2023-11-21 02:34:03'),(159,'$2a$06$jnLKIgn7Lb2vRj4R8RkxJOFdEVxQ1d1G73nT7JUk1NM6a7ffVjAC.webp',61,'2023-11-21 02:34:03','2023-11-21 02:34:03'),(160,'$2a$06$U1.cO2GGxJltuGWZ2Q6UveSFysG07MQ.GhCSN4O.ppr9UdMWGwkoq.webp',61,'2023-11-21 02:34:03','2023-11-21 02:34:03'),(161,'$2a$06$0wZ.GBylPaKJaCFyGYSXeRriTlFh.eC5.3w9vKy.YxFJibbzPdy.webp',62,'2023-12-03 15:30:39','2023-12-03 15:30:39'),(162,'$2a$06$Kpc5JnOkCGuv9iI3nbzMOuJV1nlT9IxoBnOTfD40dmuPzo1eVf986.webp',62,'2023-12-03 15:30:39','2023-12-03 15:30:39'),(163,'$2a$06$OsSfIrTZQeRTp5i9SuHhLeOoD1yvPIo4ORR5DgEKC9Iz5mk5BN9O.jpg',62,'2023-12-03 15:30:39','2023-12-03 15:30:39'),(164,'$2a$06$pQd6nT3utDEeg3XLtK6T.uXcdP2dya2.p.Ny7XXqDJDHNs8AhNoE2.webp',63,'2023-12-03 15:33:14','2023-12-03 15:33:14'),(165,'$2a$06$70OJr4naxSefypPSV4QHOhyJ4gTfyl5nUiUWcAqBA6YnCIU7Oyi.webp',63,'2023-12-03 15:33:14','2023-12-03 15:33:14'),(166,'$2a$06$7e6EAUhmybE5IsF1znyHJeWP88XD1xep993L5Dqc8ePzt.vufowO.webp',63,'2023-12-03 15:33:14','2023-12-03 15:33:14'),(167,'$2a$06$JdTPmiP4yt89CaJD81kPGOnsYkPt12VsG3AKMd3Pv0xvJ7kRLUQZO.webp',64,'2023-12-03 15:34:33','2023-12-03 15:34:33'),(168,'$2a$06$eMh8Ff8XqCf6xMvKvUG..EPwzcFzmiaAZmHTikIeEAyzlVtuaQ..webp',64,'2023-12-03 15:34:33','2023-12-03 15:34:33'),(169,'$2a$06$xZ.reOIOHHJYNcBaUnNG1epcrnMuR0vAx3DgnxkbQZKTu.jpfTn2..webp',64,'2023-12-03 15:34:33','2023-12-03 15:34:33'),(170,'$2a$06$sue8j5QvK4gjUlCFutFPe.dEJoZWwQO9hWddItwhJB237o3J30US..webp',65,'2023-12-03 15:36:23','2023-12-03 15:36:23'),(171,'$2a$06$6gErXvRhlQnvQrHkywvebu1VooUm2b0jaJsC96fLhP5HOXWvaE9Qu.webp',65,'2023-12-03 15:36:23','2023-12-03 15:36:23'),(172,'$2a$06$mUBBd.EHOtaHFMbuTV3q7.5Cb4Zqswz09OQvxDGPs.9VaF4FH5mCi.webp',65,'2023-12-03 15:36:23','2023-12-03 15:36:23'),(173,'$2a$06$Do0wPmUSLNTA1EHW.rTfQuiJBsimwX03dw32r1ZnGYOO0ALShtvwW.webp',66,'2023-12-03 15:37:40','2023-12-03 15:37:40'),(174,'$2a$06$HwxvxNs7uGfJV6jRDSf28ejIgd6ayar6donLUYukzsqTfeKdkkYau.webp',67,'2023-12-03 15:38:51','2023-12-03 15:38:51'),(175,'$2a$06$3oHsXVqLXf3KvP8ohIUrdOuUQ0R4YrE3AE9ZxPD.KBC3ro0he70W.webp',68,'2023-12-03 15:40:01','2023-12-03 15:40:01'),(176,'$2a$06$3D2bm9lIU8uWrFptnLG1Ger9AL5cnhk94v9EfXThvcVTjGwqoPD.G.webp',68,'2023-12-03 15:40:01','2023-12-03 15:40:01'),(177,'$2a$06$yDyEunfEnXcJzhsfEnEwFeksmxBSW7FiBQVMorbWzHTYivlzD4CAu.webp',68,'2023-12-03 15:40:01','2023-12-03 15:40:01'),(178,'$2a$06$cXPORCii5rcszgV5ENLdJO1sM8gUuNjzN.V0LALJZJkUGSl47nQXK.webp',69,'2023-12-03 15:40:52','2023-12-03 15:40:52'),(179,'$2a$06$c4wocKh5xesTo6GB53IC4Ocu91ulogQKMRnJrEIdJvjGs6ynsdKG.webp',70,'2023-12-03 15:42:29','2023-12-03 15:42:29'),(180,'$2a$06$L5CMYdjmSoO1yGXIiaYEnOspXDRuJB6.kxtISQZybV9D9iDPRPH46.webp',71,'2023-12-03 15:43:57','2023-12-03 15:43:57'),(181,'$2a$06$AcwAbYZAUJ1RcC3OZlx.F.fqtR4lnqDAy6R57xVghjXUeOXHg6Xuu.webp',71,'2023-12-03 15:43:57','2023-12-03 15:43:57'),(182,'$2a$06$zjyQwTt.riaANMTMfGwjt.3KC7nnicz6PZ5ApP4o7gDuHmLpxCcfS.webp',72,'2023-12-03 15:44:54','2023-12-03 15:44:54'),(183,'$2a$06$xkmprUxyItjkT6aj6zF0B.DvBzim8KITmtCI1LcvNGGU3TbA5Cji.webp',72,'2023-12-03 15:44:54','2023-12-03 15:44:54'),(184,'$2a$06$.ZpECvPZia133H00pEdhn.9RcqklUOT8762RS3KphEkOh1o9e8l5e.webp',72,'2023-12-03 15:44:54','2023-12-03 15:44:54'),(185,'$2a$06$4ig2PSdWGMRCU2HUcYdJS.w58EUnJkxdwOw6EjewQtbxf6VAgLWVy.webp',72,'2023-12-03 15:44:54','2023-12-03 15:44:54'),(186,'$2a$06$YQPkeRYSD8HLF0F0xHYCyumZ23Cl0AKFHAWU2WyX1tXHdYioMlUS.webp',73,'2023-12-03 15:47:09','2023-12-03 15:47:09'),(187,'$2a$06$m1.E2F1.BktKG.PP8iy4uHsUCHqEDLV2xY.IuvsGjJ42ZuW7.9MS.webp',74,'2023-12-03 15:48:02','2023-12-03 15:48:02'),(188,'$2a$06$t8tJKZX4lE.0WKOZCM8r2OoCVWVXM752pEHtwDNaSmWGhOBgqNB2W.webp',74,'2023-12-03 15:48:02','2023-12-03 15:48:02'),(189,'$2a$06$yPfdXNVUACvd5z09FdAI0OA2PM9d7I1VqdOJ.C7idVtNXf76U6Zq.webp',74,'2023-12-03 15:48:02','2023-12-03 15:48:02'),(190,'$2a$06$aYy76aMnt8fYbwJY0BWP.sFRjy4y5JOcXf8U8u9O4lB2eNv3S5CO.webp',74,'2023-12-03 15:48:02','2023-12-03 15:48:02'),(191,'$2a$06$6GEovQlcRnQnb6ICK29x1ep8rG90POlNliOiY90gss3hL4PKSBVH6.webp',75,'2023-12-03 15:48:55','2023-12-03 15:48:55'),(192,'$2a$06$DZlTE1AGLZ.ihGp0d.y3Oj58hJzTPlapYr4Dulev1UWNeHb5.Cy.webp',75,'2023-12-03 15:48:55','2023-12-03 15:48:55'),(193,'$2a$06$ivjlKGFwpzDghfbjPgrJQetNU0ysGCIYeR3HOkkiPAJmLv9kqIOU6.webp',76,'2023-12-03 15:50:04','2023-12-03 15:50:04'),(194,'$2a$06$k6tkrLZI6yrw72YgTHOJ.a0kt6dAUiURBox9RXDgovxjgZyLxwQe.webp',76,'2023-12-03 15:50:04','2023-12-03 15:50:04'),(195,'$2a$06$zaDa1udwKN7R0eP9qdMORu3CXLHpr3eJvCXimdBHZLUSSQEMTr2B2.webp',76,'2023-12-03 15:50:04','2023-12-03 15:50:04'),(196,'$2a$06$MjNZeSaKEbqC8H6Nwmg7WeXQ8ou.VuMWEHwdAYHWtQkKAROJtRutO.webp',76,'2023-12-03 15:50:04','2023-12-03 15:50:04'),(197,'$2a$06$SGHRaYx6ng9UNKaaj9m.jTq4yq3Hx3yMNRVr6tkyb5KVtZG8VJq.webp',77,'2023-12-03 15:51:50','2023-12-03 15:51:50'),(198,'$2a$06$8wQc9cvj7KRZWlrUaIZGCOBG1B59XoMk4EUdwNLhfPWAYGXXkrrIu.webp',77,'2023-12-03 15:51:50','2023-12-03 15:51:50'),(199,'$2a$06$Hqpz0DKezG4lhMkd4J2pyeWLysDvDqaKnpnTLEKpZBXI.JCarVBcK.webp',77,'2023-12-03 15:51:50','2023-12-03 15:51:50'),(200,'$2a$06$4SfKNukZsDuE87v34RbLnekMqr42DAVHmBlCQPmGRlorLgnkWitS2.webp',77,'2023-12-03 15:51:50','2023-12-03 15:51:50'),(201,'$2a$06$c6TmdAoJhAFLggda5MEel.wZP5jAwQJDMifir3zSs5Ct.AwbmaB8S.webp',78,'2023-12-03 15:53:18','2023-12-03 15:53:18'),(202,'$2a$06$ShhlO7TKBw9bLd59TXrhPOJLNa9wrZLHZkAsVQ3GLa1Lj4OEperUS.webp',78,'2023-12-03 15:53:18','2023-12-03 15:53:18'),(203,'$2a$06$GoxgjhRSBnuGD57ged70.OrBlMsnbCmcIkFNu7SNSGmTVt9WyCyC.webp',78,'2023-12-03 15:53:18','2023-12-03 15:53:18'),(204,'$2a$06$pDiNY9DZeEjj4l3zHPeVz.WswSBvyffEY7CtJbzw3wSgj2DbUpV6.webp',79,'2023-12-03 15:54:14','2023-12-03 15:54:14'),(205,'$2a$06$VeAGvBzBlRm9wNBK8TtEleGefYvof9pTg8a2tPjKuIP1aAQfefj..webp',79,'2023-12-03 15:54:14','2023-12-03 15:54:14'),(206,'$2a$06$x8UKgIa1VyQpOAmzxPHmAOjDs1MMVPvvFGDBStOxMzRct95ki5SeW.webp',79,'2023-12-03 15:54:14','2023-12-03 15:54:14'),(207,'$2a$06$Tzr8s6UtES7uNbr5T0ISOfqaGljvAKQICOXeJUN8XNJ0q5Bd0m.webp',80,'2023-12-03 15:55:11','2023-12-03 15:55:11'),(208,'$2a$06$Oxqf17sfzv66jYFqpeQXeKr7ISHoMpB7YI90IzdO2jCmtYTf4Fe.webp',80,'2023-12-03 15:55:11','2023-12-03 15:55:11'),(209,'$2a$06$nrplcTr1efFAk8NdJmC7LO7s8dSm.fxDJtz2XJHIlvt2rRzD6NC9C.webp',81,'2023-12-03 15:56:09','2023-12-03 15:56:09'),(210,'$2a$06$qzHttyt6NUt7ou9gkshsLuFwaCgrR7jhIPAjTrUYE1oBmisZ.Lm.webp',81,'2023-12-03 15:56:09','2023-12-03 15:56:09'),(211,'$2a$06$BKOFx3qGYBqpNe0CuOr.vepl5zMzlZpNHhR1uc.ltLUc48YeLpK.webp',82,'2023-12-03 15:57:14','2023-12-03 15:57:14'),(212,'$2a$06$36rht05DYY3W1FP02Om.rO9liOPYJIR7p8oG1A9MK8tDnR4ck8.Su.webp',83,'2023-12-03 15:58:18','2023-12-03 15:58:18'),(213,'$2a$06$cESW2PzKFufasoIhItRm.4sI7rTnAtAAjwzhppLAoFd8Rb8uiAEe.webp',83,'2023-12-03 15:58:18','2023-12-03 15:58:18'),(214,'$2a$06$zJJdaNhrX73XQnB2C60eO6vC3Hs9.Gfgh35llmub0W0qiBdezjcm.webp',83,'2023-12-03 15:58:18','2023-12-03 15:58:18'),(215,'$2a$06$ZeaaqhfERKEKjD9S4govN.RuW00dm5Kn3MAhJnYJc.l7hBDr99G9W.webp',84,'2023-12-03 16:00:10','2023-12-03 16:00:10'),(216,'$2a$06$cBAE1f6uCwpF8mRwMH4NvO4X7nC671tRSgeFaou9oYkrtn5HLdLc6.webp',84,'2023-12-03 16:00:10','2023-12-03 16:00:10'),(217,'$2a$06$6AXL4O62JUy9y6Fz3QroUOpoeye8jHxoevSoZRPt.22obxG6NzLQS.webp',85,'2023-12-03 16:01:16','2023-12-03 16:01:16'),(218,'$2a$06$suBbDRnRkkH6lkHyOtko4ORIXXzY8nPPCXZplb.9lvDi9PQLhGpm.webp',85,'2023-12-03 16:01:16','2023-12-03 16:01:16'),(219,'$2a$06$0d9qPK3NKpk6IwNFnMggke3p8mynBkF7zBaeEEW8IFQDe5ssCsfaC.webp',86,'2023-12-03 16:03:00','2023-12-03 16:03:00'),(220,'$2a$06$oE2eg7oTeVNH5xPTEUItZ.2J2IieXTnsL0.8hTACI1a4xJANH6hNy.webp',86,'2023-12-03 16:03:00','2023-12-03 16:03:00'),(221,'$2a$06$Ntrbdm0kExCtilpTdS1Hn.KqYijkTl7iwwkUDkmFyYey5u6EBi5..webp',86,'2023-12-03 16:03:00','2023-12-03 16:03:00'),(222,'$2a$06$z6JCDJA98eSKjuuE.rgzQ.NTxmmkQR3Td1jjNtVCP1cOKrIZPNRy.webp',86,'2023-12-03 16:03:00','2023-12-03 16:03:00'),(223,'$2a$06$4sHIRiRb7BSAxQk5lzeRGOZN0kDmKper.pWUbK.1Eq7Lo3i.Mm63G.webp',87,'2023-12-03 16:03:55','2023-12-03 16:03:55'),(224,'$2a$06$XJcAntRQItwNcuBY2DDGeHj.zSm04dKehPraadUMOk9uOPQSu5QK.webp',87,'2023-12-03 16:03:55','2023-12-03 16:03:55'),(225,'$2a$06$qOOSmazEfS513I4e93YrceobOYmJwJEB3inzrNZzPc8ftNPJ9wweC.webp',88,'2023-12-03 16:05:31','2023-12-03 16:05:31'),(226,'$2a$06$LnuJhWjhDJmEtaTE9JR83OK4wyJGBQRSXgXe4gEqdGwm5Gj4cT0Ke.webp',88,'2023-12-03 16:05:31','2023-12-03 16:05:31'),(227,'$2a$06$MvG3.sqjk0FSHIYPW2UUkuJo2nh37QhjCQ3O0cEcxmQhyyVqeNdm.webp',88,'2023-12-03 16:05:31','2023-12-03 16:05:31'),(228,'$2a$06$IQJVvTrwedl0HMLW6FLqquRtvyOkxN7pKqSLkIRB5swsmz58W8qO6.webp',88,'2023-12-03 16:05:31','2023-12-03 16:05:31');
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
  `amount` int DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_product_id_idx` (`product_id`),
  KEY `orders_shoppingcart_id_idx` (`user_id`),
  CONSTRAINT `order_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `order_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (98,41,2,'2023-12-20 23:58:48','2023-12-21 00:03:42',20),(99,60,5,'2023-12-21 00:03:55','2023-12-21 00:03:55',20),(100,69,4,'2023-12-21 00:04:13','2023-12-21 00:04:13',20);
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
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (37,'Cocina Florencia Recta 5518F a gas 4 hornallas acero inoxidable.',248950.00,0,'Cocina de pie.\r\nTipo de alimentación: gas.\r\nCapacidad de 65L.\r\nPosee 4 hornallas.\r\nEl acabado de la mesa es de acero inoxidable.\r\nRejillas de alambre enlozado.\r\nHorno con grill.\r\nDimensiones: 56cm de ancho, 85cm de alto y 60cm de profundidad.',1,'2023-11-21 00:49:35','2023-12-20 23:16:00'),(38,'Mesada Granito Negro Boreal x mts',55500.00,0,'Fabricante\r\nMarmoleria\r\nMarca\r\nMarmol\r\nModelo\r\nA medidas\r\nMaterial\r\nMármol',1,'2023-11-21 00:52:58','2023-12-20 19:28:28'),(39,'Bajo Mesada 180 Armado Melamina Blanca Perfil J De Aluminio',211801.00,5,'LA PUBLICACION NO INCLUYE MESADA, PILETA NI GRIFERIA !!!\r\n\r\nNO REALIZAMOS ENVIOS AL INTERIOR\r\n\r\nCONSULTAR DISPONIBILIDAD DE STOCK\r\n\r\nESPECTACULAR COMBO DE CAJONERA DE 40 , BAJO DE 100 Y BAJO MESADA DE 40\r\nEN MELAMINA BLANCA DE 18 MMTS.CON\r\nPERFIL J DE ALUMINIO ANODIZADO.\r\nEL PERFIL DE ALUMINIO BRINDA UN DISEÑO MODERNO Y MINIMALISTA ASI\r\nCOMO SE ENCARGA DE PROTEGER LA PARTE SUPERIOR DE LOS FRENTES.',1,'2023-11-21 00:55:28','2023-11-21 00:55:28'),(40,'Combo Griferia Adra Plus Peirano Lavatorio Bidet Ducha',211317.00,3,'INCLUYE:\r\nADRA LAVATORIO CROMO\r\nADRA BIDET CROMO\r\nADRA DUCHA EMBUTIR CON TRANSFERENCIA\r\n\r\nCAMPANAS PLASTICAS\r\nVOLANTE ZAMAK\r\nDUCHA 15 CM\r\nCUERPO DE BRONCE',1,'2023-11-21 00:58:25','2023-11-21 00:58:25'),(41,'Inodoro Con Mochila Bidet Roca Monaco Baño Completo',230167.00,10,'INCLUYE:\r\n-INODORO LARGO MONACO\r\n-DEPOSITO APOYO DESCARGA ECOLÓGICA DUAL 6 / 3 LITROS\r\n-BIDET MONACO 1 O 3 agujeros\r\n\r\nNO INCLUYE TAPA',1,'2023-11-21 01:01:51','2023-11-21 01:01:51'),(42,'Ventana De Aluminio Bco 150x110 Linea Modena Con Dvh.',163900.00,0,'VENTANA ALUMINIO LINEA MODENA ALTA PRESTACION\r\n1.50X110 ANCHOXALTO\r\nCOLOR BLANCA\r\nCON DOBLE VIDRIADO HERMETICO 4-9-4 INDUSTRIAL-',12,'2023-11-21 01:04:32','2023-11-21 01:04:32'),(43,'Puerta De Madera Para Exterior. 90x205',365000.00,5,'-Puerta de cedro okume de 90x205 final.\r\n-Marco de 2,5x4 en madera dura.\r\n-Incluye manijon, vidrio y cerradura doble perno para seguridad.\r\n-No incluye picaporte ni lustre (se entrega crudo).\r\n-Manijon de 80 cm.\r\n-Vidrio tipo pacifico.\r\n-Madera maciza.\r\n-Hay stock tanto lado izquierdo como lado derecho.',12,'2023-11-21 01:05:45','2023-11-21 01:05:45'),(44,'Aireador Ventiluz 40x26 Vidrio Reja Y Mosquitero',27000.00,15,'OESTE ABERTURAS\r\nEs el resultado de más de 30 años de trayectoria en la fabricación y venta de todo tipo de aberturas, contando con atención al público, opción de retiro por fábrica y una amplia variedad de aberturas adaptadas a tu necesidad.',12,'2023-11-21 01:07:16','2023-11-21 01:07:16'),(45,'Mosquiteros A Medida, Colocamos S/c',10100.00,0,'Marca\r\nAQUILES ABERTURAS\r\nModelo\r\nMódena\r\nTipo de ventana\r\nCorrediza\r\nForma\r\nRectangular\r\nMaterial del marco\r\nAluminio\r\nAncho x Altura\r\n60 cm x 40 cm\r\nEspesor\r\n20 mm\r\nColor\r\nBlanco',12,'2023-11-21 01:37:59','2023-12-16 22:52:18'),(46,'Neumático Pirelli Formula Energy P 175/65R14 82 T',73991.00,5,'Tamaño y rodado: 175/65R14.\r\nCarga máxima: 475 kg.\r\nVelocidad máxima: 190 km/h.\r\nEficiencia de ahorro de combustible: E.\r\nEficiencia de adherencia en mojado: E.\r\nDiseño de banda de rodadura asimétrico.\r\nCon reducción de ruido.\r\nEs direccional.\r\nSeguridad y estabilidad al conducir.\r\nNo incluye llanta.\r\nAlta performance y confort.\r\nLas imágenes pueden ser ilustrativas.',9,'2023-11-21 01:39:56','2023-11-21 01:39:56'),(47,'Porta Equipaje Tela Auto Camioneta Porta Kayak Tabla Surf',17000.00,0,'> Universal para todos los autos y camionetas del mercado\r\n> Confeccionado con goma espuma de alta densidad y resistencia',9,'2023-11-21 01:41:26','2023-11-21 01:41:26'),(48,'Kit 4 Cortinas Parasol Parabrisa Ventanilla Trasera Plegable',5700.00,0,'Cortina Parasol Parabrisa Aluminio 150x60cm (Solo aluminio de un lado)\r\nKit 2 cortinas de 65x38cm\r\nCortina de luneta 100x50cm',9,'2023-11-21 01:42:52','2023-11-21 01:42:52'),(49,'144 Ladrillos Huecos 12x18x33 6t',43488.00,0,'EL PRECIO PUBLICADO ES POR PALLET DE 144 LADRILLOS 12X18X33 6T',13,'2023-11-21 01:44:47','2023-11-21 01:44:47'),(50,'Cemento Loma Negra 50kg',4100.00,0,'Marca\r\nLoma Negra\r\nTipo\r\nDe albañilería\r\nPeso\r\n50 kg\r\nColor\r\nBordó',13,'2023-11-21 01:46:33','2023-11-21 01:46:33'),(51,'Arena En Bolson',21268.00,0,'*COSTOS CAPITAL FEDERAL *\r\n- FLETE VOLCADOR CABA $2000\r\n- FLETE GRÚA CABA $3500',13,'2023-11-21 01:49:46','2023-11-21 01:49:46'),(52,'Lámpara Colgante Negro Vintage Portalampara Cable E27 Bell05',3100.00,0,'Lámpara de techo con potencia de 150W.\r\nEs colgante.\r\nTipo de material: chapa y hierro.\r\nCon capacidad para 1 foco.\r\nDiseñada para lámparas halógena y led y bajo consumo.\r\nApta para ser colocada en ambientes interiores.\r\nTipo de rosca: e27.\r\nIlumina y da estilo a tus espacios.',7,'2023-11-21 01:51:12','2023-11-21 01:53:16'),(53,'Aplique Exterior Bidireccional Pared Apto Intemperie',6775.00,0,'Diseño bidireccional para iluminación versátil\r\nApto para interiores y exteriores cubiertos\r\nFabricado en chapa resistente y duradera\r\nCapacidad para 2 focos LED GU10 de hasta 60W\r\nDimensiones compactas: 95x95x182 mm\r\nFácil instalación en paredes',7,'2023-11-21 01:52:51','2023-11-21 01:52:51'),(54,'Araña Cristal 5 Luces Candelabro Retro',243196.00,0,'Araña con cadena\r\n\r\nLampara: 5 x E14\r\n\r\nMateriales: Cristal\r\n\r\nDiámetro de la Base 12 Cm.\r\n\r\nAltura Total 1 metro regulable.\r\n\r\nIMPORTANTE!!!!!\r\n**NO INCLUYE FOCO**',7,'2023-11-21 01:55:14','2023-11-21 01:55:14'),(55,'Receptaculo Floron Portalampara E27 Starbox Pack 10 Uni',7200.00,0,'- Marca: Trefi/Starbox\r\n- Colores disponibles: Blanco - Negro\r\n- Rosca: E27 (Aluminio niquelado).\r\n- Tension: 250v 4A.\r\n- Diametro interno: 8cm\r\n- Diametro total: 10cm.\r\n- Material termoplastico resistente a altas temperaturas.\r\n- Formato de venta: Precio publicado por PACK 10 unidades.',16,'2023-11-21 01:56:47','2023-11-21 01:56:47'),(56,'Llave De Luz Toma Doble Y Punto Toma Sica + Caja Rectangular',12887.00,0,'5 LLAVES PUNTO Y TOMA\r\n5 LLAVES DOBLE TOMA\r\n10 CAJAS RECTANGULARES CONEXTUBE/KALOP PVC\r\n\r\nDescripción del producto:\r\n-10 unidades\r\n-Bastidor: 10x5\r\n-Color Módulo: Blanco Puro\r\n-Color Tapa: Blanco Puro\r\n-Módulos: 2\r\n-Unidad de medida: C/U\r\n-SKU: 01SIC09931\r\n-Marca: SICA',16,'2023-11-21 01:58:47','2023-11-21 01:58:47'),(57,'Rollo 100 Mts. Cable Unipolar 1.5 Mm. Normalizado Iram',37627.00,0,'-COLORES:\r\n*** Marrón-Celeste-VerdeAmarrilo***\r\n\r\nESPECIFICACIONES:\r\n\r\n- CABLE NORMALIZADO\r\n- FLEXIBLE -IRAM 2183',16,'2023-11-21 02:00:08','2023-11-21 02:00:08'),(58,'Tinajas De Madera Jacuzzi Exterior',700000.00,5,'Precio publicado corresponde a tina de 1,30m sin bancos ni escalera\r\n\r\nDiámetro 1.60 (4 personas)\r\nDiámetro 1.75 (6 personas)\r\nDiámetro 1.90 (8 personas)\r\n',2,'2023-11-21 02:02:07','2023-11-21 02:09:39'),(59,'Lavavajillas Whirlpool WLV14 de 14 cubiertos plateado 220V - 240V',1101399.00,30,'Incluye 8 programas para garantizar una limpieza total.\r\nAl ser de pie podés instalarlo libremente.\r\nTiene 2 bandejas y son regulables.\r\nCuenta con recipiente para cubiertos.\r\nTrabaja con una potencia de 1900 w.\r\nSu tecnología inverter permite que trabaje con menos energía y emita menos ruido.\r\nContiene power clean pro.\r\nDimensiones: 60cm de ancho x 85cm de alto x 60cm de profundidad.\r\nPracticidad para el día a día.',2,'2023-11-21 02:03:29','2023-11-21 02:03:29'),(60,'Lavarropas Whirlpool Wnq90as Carga Frontal 9kg Inverter Titanium',644990.00,3,'Carga frontal de 9 kg.\r\nCapacidad para secado de 9 kg.\r\nCentrifuga a una velocidad de 1400 rpm.\r\nEficiencia energética A++.\r\nLas imágenes pueden ser ilustrativas.\r\nComodidad y practicidad para tu hogar.',2,'2023-11-21 02:09:17','2023-11-21 02:09:17'),(61,'Aire acondicionado Noblex split frío/calor 2881 frigorías blanco 220V',550000.00,12,'Capacidad de refrigeración de 3350W.\r\nFrigorías: 2881.\r\nCon función deshumidificación.\r\nEficiencia energética: A.\r\nCuenta con función de dormir.\r\nIncluye control remoto.\r\nDimensiones de la unidad externa: 720mm de ancho x 495mm de alto x 270mm de profundidad.\r\nDimensiones de la unidad interna: 802mm de ancho x 297mm de alto x 189mm de profundidad.\r\nTiene temporizador.',2,'2023-11-21 02:34:03','2023-12-03 15:23:15'),(62,'Clavos Cabeza Plomo 3\" X 100 Unidades',32500.00,0,'Tamaños 1\", 1 1/2\", 2\", 2 1/2\", 3\", 3 1/2\", 4\", 5\", 6\"',17,'2023-12-03 15:30:39','2023-12-03 15:30:39'),(63,'Martillo Encofrador Galponero Fibra 570g Crossmaster',12012.00,15,'El Martillo Galponero Cabo Fibra De Vidrio 570g Crossmaster es una herramienta esencial para cualquier trabajo de construcción o reparación.',17,'2023-12-03 15:33:14','2023-12-03 15:33:14'),(64,'Alicate De Corte Lateral Tradicional Bahco 6 2171g-160',14886.00,3,'El Alicate De Corte Lateral Tradicional Bahco 2171G-160 es una herramienta esencial para cualquier caja de herramientas. Con un largo de mordaza de 20 mm, este alicate de la reconocida marca Bahco, es perfecto para cortar cables y alambres con precisión y facilidad. Su diseño ergonómico y robusto garantiza un agarre cómodo y seguro, permitiendo un manejo eficiente y sin esfuerzo.',6,'2023-12-03 15:34:33','2023-12-03 15:34:33'),(65,'Jardin Vertical Artificial Panel Cesped La Mejor Calidad!!!',3999.00,0,' IMPORTADORES DIRECTOS Y VENDEDOR NUMERO UNO DEL SITIO EN JARDINES VERTICALES ARTIFICIALES , MAS FRONDOSOS Y MAS ROBUSTOS QUE OTROS SIMILARES FABRICADOS BAJO NUESTRA SUPERVISION Y CONTROL DE CALIDAD',8,'2023-12-03 15:36:23','2023-12-03 15:36:23'),(66,'Estaca Solar Exterior Jardín 10 Luces Led 5,5m Cantero Ip44',35463.00,10,'Iluminá tus espacios\r\nEste modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.',8,'2023-12-03 15:37:40','2023-12-03 15:37:40'),(67,'Corte De Tablero De Pino Encolado Lateral 18mm A Medida',767.00,5,'Cortes en Tablero Pino medida maxima 120 x 300 x 17mm\r\n\r\nRealice todas las consultas necesarias antes de ofertar.\r\nPRECIO CORRESPONDE A UNA TABLA DE 1CMX 1 CM\r\n\r\nSegún el cepillado que le hayan aplicado en el aserradero, el espesor puede variar entre 16 y 17 mm',14,'2023-12-03 15:38:51','2023-12-03 15:38:51'),(68,'Estante Repisa Flotante Con Mensula Invisible 40x15',4814.00,0,'Medidas:\r\n• Largo 40 cm\r\n• Profundidad 15 cm\r\n• Espesor 18 mm\r\n\r\nSoportan 10kg de peso\r\n\r\nColores disponibles: Negro - Blanco - Nogal - Helsinki - Wengue - Atakama - Roble Kendal',14,'2023-12-03 15:40:01','2023-12-03 15:40:01'),(69,'Juego De Sillas Jesuitas Plegables Y Mesa',26000.00,0,'Juego de 2 sillas plegables realizadas en pino , incluye 1 mesa plegable\r\n\r\nRealizamos envios a todo el pais ( cotizar envio antes de ofertar indicando provincia y localidad y la cantidad que quieras adquirir )',3,'2023-12-03 15:40:52','2023-12-03 15:40:52'),(70,'Juego Jardín Exterior Mesa 4 Sillas Plegable Sombrilla Set',183754.00,0,'SET DE JARDÍN / BALCÓN / PILETA\r\nJuego 1 Mesa + 1 Sombrilla + 4 Silla Plegable\r\n\r\nMESA DE VIDRIO REDONDA DE 80cm DE DIÁMETRO X 70cm (altura)\r\nESTRUCTURA ACERO COLOR GRIS\r\n\r\n\r\nSILLA PLEGABLE TEXTILENO 70cm(prof.) x 55cm (ancho) x 90cm (alto)\r\nESTRUCTURA ACERO COLOR GRIS\r\nTELA COLOR NEGRO\r\n\r\nSOMBRILLA 1,80MTS\r\nESTRUCTURA ACERO COLOR GRIS\r\nTELA DE COLOR NEGRO',3,'2023-12-03 15:42:29','2023-12-03 15:42:29'),(71,'Canastos Organizador Cesto Limpieza Plastico Con Manija X 2 Colombraro',8179.00,0,'Marca: Colombraro.\r\nMaterial: Plastico reforzado.\r\nAcabado Calado.\r\nTamaño: Mediano.\r\nMedidas externas: Largo: 32cm - Ancho: 23,5cm - Alto: 16,5cm.\r\nColores: Blanco, Marrón, Rojo\r\n',5,'2023-12-03 15:43:57','2023-12-03 15:43:57'),(72,'Soporte Organizador Porta Escobas Ganchos Acero Inox Premium',33099.00,0,'-Organizador de escobas y accesorios.\r\n-4 soportes para escobas y 5 ganchos\r\n-Colgá y ordena escobas, escobillas, mopas, escurridores, trapos, cepilllos, esponjas, etc\r\n-Acero inoxidable, excelente calidad y terminación.\r\n-Para colocar en la pared\r\n-Ideal para organizar el lavadero, cocina o baños\r\n-Incluye accesorios de fijacion ( tarugos, tuercas y tornillos)\r\n-Super util y cómodo.',5,'2023-12-03 15:44:54','2023-12-03 15:44:54'),(73,'Pintura Latex Interior Casablanca Pro Blanco X 20 Lts',37100.00,0,'Rinde 10m².\r\nApto para paredes.\r\nEs de interior.\r\nEs lavable.\r\nEs antihongos.',11,'2023-12-03 15:47:09','2023-12-03 15:47:09'),(74,'Combo Pintura Latex 20l+enduido+fijador+rodillo+lija Pintumm',21377.00,0,'INCLUYE:\r\n1 LATA DE 20LTS LÁTEX INGENIA\r\n1 LATA 1KG ENDUIDO INTERIOR INGENIA\r\n1 LATA 1LT FIJADOR CONCENTRADO INGENIA\r\n1 RODILLO LANA SINTETICO\r\n2 LIJAS AL AGUA DOBLE A (MEDIDA A ELECCIÓN)',11,'2023-12-03 15:48:02','2023-12-03 15:48:02'),(75,'Pintura Exterior Frentes Netcolor Colores 20lts | Giannoni',44037.00,0,'- Impermeabilizante flexible.\r\n- Protege como una barrera impermeable y cubre como una pintura de frentes de alto poder cubritivo.\r\n- Más película por mano que permite disimular defectos y cubrir imperfecciones con un atractivo acabado y con mínimo trabajo.\r\n- Cubre superficies difíciles en dos manos.\r\n- Acabado Premium.\r\n- Fácil de aplicar.',11,'2023-12-03 15:48:55','2023-12-03 15:48:55'),(76,'Pistola Soplete De Pintar Alta Presión Tacho Gravedad Kld',15814.00,5,'La presión de trabajo es de 4.8bar.\r\nEl diámetro de la boquilla es de 1,5.\r\nPinta de una manera más rápida y eficiente.',11,'2023-12-03 15:50:04','2023-12-03 15:50:04'),(77,'Piso Vinilico Spc Pvc Alto Transito Click 6 Mm Madera Caja',83655.00,28,'CARACTERÍSTICAS TÉCNICAS Y MEDIDAS\r\n-Largo: 122 cm\r\n-Ancho: 18 cm\r\n-Espesor: 4 mm + 2 mm de Manta (Goma Eva)\r\n-Capa de uso: 0.5 mm (La capa de uso determina el nivel de tránsito que puede tener el piso).\r\n-Tipo de uso (en 0.5 mm): ALTO TRANSITO/USO COMERCIAL\r\n\r\nCAJA\r\n\r\n-1 tabla = 0.22 m2 de superficie aproximadamente\r\n-1 caja = 1,7 m2.',10,'2023-12-03 15:51:50','2023-12-03 15:51:50'),(78,'Cerámica Piso Exterior Atacama Tricolor 51x51 Cerro Negro',4528.00,0,'El precio publicado es por unidad.\r\nCada unidad equivale a un metro cuadrado.\r\nSe vende por caja cerrada y trae 2.08 m2',10,'2023-12-03 15:53:18','2023-12-03 15:53:18'),(79,'Alfombra Tipo Persa 150*100 Antideslizante - Alto Transito',39784.00,0,'Alfombras de Transito alto para interior\r\n100% POLIÉSTER - TEJIDO PLANO\r\nBASE DE GOMA ANTIDESLIZANTE\r\nIMPORTADOR DIRECTO\r\nMedidas 150cm largo * 100cm Ancho - Consultar por más Medidas\r\nFácil lavado con agua-',10,'2023-12-03 15:54:14','2023-12-03 15:54:14'),(80,'Ceramica Piu Calcareo Londres',10000.00,0,'Ceramica Piu Calcareo Londres 20x20\r\nConjunto x 8 unidades, no se vende por caja. Se vende por unidad de 8 cerámicas.\r\nAmplio stock para entrega inmediata!!!\r\nPrecio publicado por pago contado',10,'2023-12-03 15:55:11','2023-12-03 15:55:11'),(81,'Oferta Ceramica Manaos Gris 38x38 1ra Calidad Cerro Negro',3739.00,0,'El precio publicado es por M2\r\n-El producto se vende por caja cerrada y la cantidad de M2 que cubran dependerá de la misma.\r\n- Ante la duda, consultar.',10,'2023-12-03 15:56:09','2023-12-03 15:56:09'),(82,'Tubo / Caño Pn20 25mm Acqua System Dema Magnum 08120025000',7877.00,0,'Marca\r\nAQCUA SYSTEM\r\nAplicación\r\nAgua\r\nFormato de venta\r\nUnidad',15,'2023-12-03 15:57:14','2023-12-03 15:57:14'),(83,'Caño Pvc 250 Mm X 3m Para Encofrado - Super Económico',42860.00,7,'Marca: Tuboforte\r\n* Modelo: Enco250\r\n* Largo: 3 metros\r\n* Diámetro: 250 mm\r\n* Espesor: 2.2 mm\r\n* Material: PVC virgen\r\n* Usos: Encofrado, Cloacal/Pluvial/Ventilacion\r\n* Ahorre tiempo y dinero! Caños sin cabeza ideales para encofrar su columna\r\n* Muy fácil de instalar\r\n* Excelente terminación\r\n* Listo para pintar',15,'2023-12-03 15:58:18','2023-12-03 15:58:18'),(84,'Flexible Facilitador Rowa Alta Presión 1 Pulgada 1 X50cm',17100.00,0,'Flexible Mallado de Acero Inoxidable\r\n1 pulgada de diámetro x 50 cm de largo. Apto para agua\r\nTemperatura Máxima 90º y Presión Máxima 10 Bar',15,'2023-12-03 16:00:10','2023-12-03 16:00:10'),(85,'Valvula Esferica 25 Manija Corta Termofusion Verde Agua Ips',5853.00,0,'Válvula esférica de 25 con manija corta, ideal para trabajos de termofusión.\r\nColor verde agua, perfecto para integrarse en sistemas de tuberías IPS.',15,'2023-12-03 16:01:16','2023-12-03 16:01:16'),(86,'Tela Black Out Juliette Textil Lavable 1.40 Mts Ancho -tdj',11080.00,8,'Tela black out textil lavable, ideal para cortinera.\r\nHermosa trama y diseño, que brinda confort y calidez en el ambite. No permite que ingresa la claridad del dia.-\r\n\r\n+Medidas:\r\n1.40 x 1 mts.-',4,'2023-12-03 16:03:00','2023-12-03 16:03:00'),(87,'Acolchado Edredón Reversible Invierno Similpiel 2 1/2plazas',85868.00,33,'INCLUYE 2 FUNDAS DE ALMOHADA 50 x 70 cm\r\n\r\n- Medidas\r\nEste producto es apto para camas 2 1/2 Plazas de hasta 160cm (ancho) x 200cm (largo) x 30cm (alto)\r\n\r\n- Medidas del producto:\r\nAcolchado: 240 x 260',4,'2023-12-03 16:03:55','2023-12-03 16:03:55'),(88,'3x2 Mt Aprox Alfombras Nórdicas Pelo Largo Varios Colores',68603.00,15,'Descripción: ALFOMBRAS NORDICAS PELO LARGO SUAVE\r\nCod. : Medida 3x2 Metros aproximadamente, puede variar algunos centímetros por ser industriales. Alfombras Nórdicas Pelo Largo Varios Colores\r\n\r\n- Tenemos varias opciones de colores',4,'2023-12-03 16:05:31','2023-12-03 16:05:31');
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
  `image_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `user_role_id_idx` (`role_id`),
  KEY `user_address_id_idx` (`address_id`),
  KEY `user_image_id_idx` (`image_id`),
  CONSTRAINT `address_id` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`),
  CONSTRAINT `image_id` FOREIGN KEY (`image_id`) REFERENCES `image_user` (`id`),
  CONSTRAINT `role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Martin','Velazquez','martin@gmail.com','$2a$10$bH70EZM8fFVad0y61uy3E.GkQ3LhJvripjShgjrT049WlQ5SncyDC',2,1,1,'2023-10-25 00:18:16','2023-12-20 23:12:58'),(20,'Marilyn','Sayago','marilyn@gmail.com','$2a$10$vjnVpM1kZWjSGqxotkr8yOlEO4JeswzFER8ZPBrAZlHvtKYq7LBdu',1,22,20,'2023-11-23 22:48:04','2023-12-20 23:23:28');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ventas_product_idx` (`product_id`),
  CONSTRAINT `ventas_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
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

-- Dump completed on 2023-12-20 22:03:56
