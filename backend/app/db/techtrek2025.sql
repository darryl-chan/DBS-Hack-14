-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.40 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for techtrek2025
CREATE DATABASE IF NOT EXISTS `techtrek2025` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `techtrek2025`;

-- Dumping structure for table techtrek2025.companyaccount
CREATE TABLE IF NOT EXISTS `companyaccount` (
  `companyId` int NOT NULL AUTO_INCREMENT,
  `companyName` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `activeAccount` tinyint(1) NOT NULL,
  `carbonBalance` int NOT NULL,
  `cashBalance` float NOT NULL,
  `createdDatetime` datetime NOT NULL DEFAULT (now()),
  `updatedDatetime` datetime NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`companyId`),
  UNIQUE KEY `companyId_UNIQUE` (`companyId`),
  UNIQUE KEY `companyName_UNIQUE` (`companyName`)
) ENGINE=InnoDB AUTO_INCREMENT=2046 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table techtrek2025.companyaccount: ~22 rows (approximately)
INSERT INTO `companyaccount` (`companyId`, `companyName`, `activeAccount`, `carbonBalance`, `cashBalance`, `createdDatetime`, `updatedDatetime`) VALUES
	(1, 'Kemmer, Cronin and Walter', 0, 2147, 547973, '2023-02-10 00:00:00', '2024-11-18 00:00:00'),
	(2000, 'TTTTTTTTTTTTTechtrek is here', 1, 9999, 2026000, '2025-01-11 10:00:00', '2025-01-11 10:00:00'),
	(2025, 'TechTrek 2025 Pte Ltd', 1, 200, 150000, '2025-01-11 09:00:00', '2025-01-11 09:00:00'),
	(2027, 'Senger LLC', 1, 648, 959359, '2024-08-30 00:00:00', '2024-11-19 00:00:00'),
	(2028, 'Conn - DuBuque', 0, 295, 164535, '2023-03-18 00:00:00', '2023-12-14 00:00:00'),
	(2029, 'Heathcote - Windler', 1, 8124, 139228, '2024-04-25 00:00:00', '2024-12-28 00:00:00'),
	(2030, 'Hand - Ledner', 0, 9032, 650415, '2024-11-08 00:00:00', '2024-11-15 00:00:00'),
	(2031, 'MacGyver Group', 0, 3036, 524802, '2023-10-14 00:00:00', '2024-12-22 00:00:00'),
	(2032, 'Rodriguez Inc', 1, 6784, 897333, '2023-02-18 00:00:00', '2024-07-01 00:00:00'),
	(2033, 'Gleason LLC', 1, 1764, 657636, '2023-01-13 00:00:00', '2024-12-28 00:00:00'),
	(2034, 'Mills Inc', 1, 7867, 370155, '2023-08-29 00:00:00', '2024-09-02 00:00:00'),
	(2035, 'Mayer, Haley and Stiedemann', 0, 958, 759482, '2024-10-19 00:00:00', '2024-11-08 00:00:00'),
	(2036, 'Gutmann - Langosh', 0, 161, 165937, '2024-09-07 00:00:00', '2024-11-21 00:00:00'),
	(2037, 'Hansen - Daugherty', 1, 3434, 56068, '2024-04-30 00:00:00', '2024-09-06 00:00:00'),
	(2038, 'Sanford - Bruen', 0, 541, 201799, '2024-06-29 00:00:00', '2024-03-05 00:00:00'),
	(2039, 'Haag and Sons', 1, 1118, 252659, '2024-03-01 00:00:00', '2025-01-07 17:49:43'),
	(2040, 'Hermiston, Hettinger and Streich', 1, 7492, 849960, '2023-04-09 00:00:00', '2024-09-23 00:00:00'),
	(2041, 'Price - Lemke', 1, 2043, 419981, '2023-07-26 00:00:00', '2024-12-10 00:00:00'),
	(2042, 'Emmerich - Langworth', 1, 7116, 742714, '2024-01-29 00:00:00', '2024-09-30 00:00:00'),
	(2043, 'Abbott - Hane', 1, 4419, 487599, '2024-07-04 00:00:00', '2024-08-11 00:00:00'),
	(2044, 'Koelpin LLC', 1, 4708, 509389, '2024-04-12 00:00:00', '2024-09-06 00:00:00'),
	(2045, 'Farrell, Collins and Windler', 1, 1252, 277831, '2023-07-21 00:00:00', '2024-08-01 00:00:00');

-- Dumping structure for table techtrek2025.outstandingrequest
CREATE TABLE IF NOT EXISTS `outstandingrequest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `companyId` int NOT NULL,
  `requestorCompanyId` int NOT NULL,
  `carbonUnitPrice` float NOT NULL DEFAULT (0),
  `carbonQuantity` float NOT NULL DEFAULT (0),
  `requestReason` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `requestStatus` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `requestType` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `createdDatetime` datetime NOT NULL DEFAULT (now()),
  `updatedDatetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `companId_UNIQUE` (`companyId`) USING BTREE,
  KEY `requestorCompanyId_UNIQUE` (`requestorCompanyId`) USING BTREE,
  CONSTRAINT `companyId` FOREIGN KEY (`companyId`) REFERENCES `companyaccount` (`companyId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `requestorCompanyId` FOREIGN KEY (`requestorCompanyId`) REFERENCES `companyaccount` (`companyId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table techtrek2025.outstandingrequest: ~11 rows (approximately)
INSERT INTO `outstandingrequest` (`id`, `companyId`, `requestorCompanyId`, `carbonUnitPrice`, `carbonQuantity`, `requestReason`, `requestStatus`, `requestType`, `createdDatetime`, `updatedDatetime`) VALUES
	(1, 2045, 2032, 287.36, 356, 'Request to purchase Carbon units', 'Approved', 'Buy', '2024-06-06 05:51:53', '2024-07-01 00:00:00'),
	(2, 2032, 2045, 379.88, 279, 'Request to purchase Carbon units', 'Rejected', 'Sell', '2024-06-12 08:52:01', '2024-06-18 07:42:37'),
	(3, 2040, 2042, 198, 284, 'Request to purchase Carbon units', 'Pending', 'Sell', '2024-07-07 02:52:17', '2024-07-07 00:00:00'),
	(4, 2039, 2045, 400, 703, 'As discussed over the phone, request to purchase Carbon credits at $400.', 'Approved', 'Buy', '2024-07-31 02:52:17', '2024-08-01 01:23:23'),
	(5, 2044, 2029, 106, 478, 'Request to purchase Carbon units', 'Rejected', 'Buy', '2024-08-17 05:52:25', '2024-08-18 09:12:39'),
	(6, 2043, 2041, 293.79, 814, 'Excess carbon in 2024.', 'Rejected', 'Sell', '2024-08-21 08:52:32', '2024-09-21 01:59:40'),
	(7, 2037, 2044, 124, 619, 'Request to purchase Carbon units', 'Approved', 'Sell', '2024-08-24 11:52:40', '2024-09-04 12:30:31'),
	(8, 2043, 2042, 203.16, 502, 'Request to purchase Carbon units', 'Pending', 'Buy', '2024-08-24 02:52:48', '2024-08-24 00:00:00'),
	(9, 2037, 2027, 183.48, 968, 'Get more carbon creditssssss', 'Pending', 'Buy', '2024-09-18 05:52:56', '2024-09-18 00:00:00'),
	(10, 2033, 2034, 550, 1080, 'Request to purchase Carbon units', 'Pending', 'Sell', '2024-12-19 08:53:04', '2024-12-19 00:00:00'),
	(12, 2000, 2025, 500.25, 3.5, 'Projected excess carbon credits for 2025', 'Pending', 'Buy', '2025-01-11 09:01:00', '2025-01-11 09:01:02');

-- Dumping structure for table techtrek2025.requestreceived
CREATE TABLE IF NOT EXISTS `requestreceived` (
  `id` int NOT NULL AUTO_INCREMENT,
  `requestId` int NOT NULL,
  `alertDatetime` datetime NOT NULL,
  `alertText` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `alertStatus` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `alertViewDate` datetime DEFAULT NULL,
  `createdDatetime` datetime NOT NULL DEFAULT (now()),
  `updatedDatetime` datetime NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `requestId` (`requestId`) USING BTREE,
  CONSTRAINT `requestId` FOREIGN KEY (`requestId`) REFERENCES `outstandingrequest` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table techtrek2025.requestreceived: ~11 rows (approximately)
INSERT INTO `requestreceived` (`id`, `requestId`, `alertDatetime`, `alertText`, `alertStatus`, `alertViewDate`, `createdDatetime`, `updatedDatetime`) VALUES
	(1, 1, '2024-06-13 00:00:00', 'Overdue Request 1: You have yet to approve Rodriguez Inc\'s request to Buy 356 units of carbon at $287.36.', 'Viewed', '2024-06-14 00:03:12', '2024-06-06 05:51:53', '2024-07-01 00:00:00'),
	(2, 2, '2024-06-19 00:00:00', 'Overdue Request 2: You have yet to approve Farrell, Collins and Windler\'s request to Sell 279 units of carbon at $379.88.', 'Cancelled', NULL, '2024-06-12 08:52:01', '2024-06-18 07:42:37'),
	(3, 3, '2024-07-14 00:00:00', 'Overdue Request 3: You have yet to approve Emmerich - Langworth\'s request to Sell 284 units of carbon at $198.', 'Scheduled', NULL, '2024-07-07 02:52:17', '2024-07-07 00:00:00'),
	(4, 4, '2024-08-07 00:00:00', 'Overdue Request 4: You have yet to approve Farrell, Collins and Windler\'s request to Buy 703 units of carbon at $400.', 'Cancelled', NULL, '2024-07-31 02:52:17', '2024-08-01 01:23:23'),
	(5, 5, '2024-08-24 00:00:00', 'Overdue Request 5: You have yet to approve Heathcote - Windler\'s request to Buy 478 units of carbon at $106.', 'Cancelled', NULL, '2024-08-17 05:52:25', '2024-08-18 09:12:39'),
	(6, 6, '2024-08-28 00:00:00', 'Overdue Request 6: You have yet to approve Price - Lemke\'s request to Sell 814 units of carbon at $293.79.', 'Viewed', '2024-08-28 08:01:02', '2024-08-21 08:52:32', '2024-09-21 01:59:40'),
	(7, 7, '2024-08-31 00:00:00', 'Overdue Request 7: You have yet to approve Koelpin LLC\'s request to Sell 619 units of carbon at $124.', 'Viewed', '2024-09-04 12:01:33', '2024-08-24 11:52:40', '2024-09-04 12:30:31'),
	(8, 8, '2024-08-31 00:00:00', 'Overdue Request 8: You have yet to approve Emmerich - Langworth\'s request to Buy 502 units of carbon at $203.16.', 'Scheduled', NULL, '2024-08-24 02:52:48', '2024-08-24 00:00:00'),
	(9, 9, '2024-09-25 00:00:00', 'Overdue Request 9: You have yet to approve Senger LLC\'s request to Buy 968 units of carbon at $183.48.', 'Scheduled', NULL, '2024-09-18 05:52:56', '2024-09-18 00:00:00'),
	(10, 10, '2024-12-26 00:00:00', 'Overdue Request 10: You have yet to approve Mills Inc\'s request to Sell 1080 units of carbon at $550.', 'Scheduled', NULL, '2024-12-19 08:53:04', '2024-12-19 00:00:00'),
	(11, 12, '2025-01-18 00:00:00', 'Overdue Request 12: You have yet to approve TechTrek 2025 Pte Ltd\'s request to Buy 3.5 units of carbon at $500.25.', 'Scheduled', NULL, '2025-01-11 09:01:00', '2025-01-11 09:01:02');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
