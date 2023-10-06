/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` longtext,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `firms` (
  `id` int DEFAULT NULL,
  `name` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` longtext,
  `image` longtext,
  `price` int NOT NULL,
  `discount` int DEFAULT NULL,
  `category_id` int NOT NULL,
  `brand_id` int NOT NULL,
  `cpu` longtext,
  `ram` longtext,
  `disk` longtext,
  `display` longtext,
  `graphic_card` longtext,
  `time_release` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `operating_system` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `connector` longtext,
  `size` longtext,
  `design` longtext,
  `weight` longtext,
  UNIQUE KEY `id` (`id`),
  KEY `category_id` (`category_id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Gamming');
INSERT INTO `categories` (`id`, `name`) VALUES
(2, 'Đồ họa');
INSERT INTO `categories` (`id`, `name`) VALUES
(3, 'Sinh viên - Văn phòng');
INSERT INTO `categories` (`id`, `name`) VALUES
(4, 'Mỏng nhẹ'),
(5, 'Doanh nhân');

INSERT INTO `firms` (`id`, `name`) VALUES
(1, 'Apple (Macbook)');
INSERT INTO `firms` (`id`, `name`) VALUES
(2, 'Asus');
INSERT INTO `firms` (`id`, `name`) VALUES
(3, 'HP');
INSERT INTO `firms` (`id`, `name`) VALUES
(4, 'Lenovo'),
(5, 'Acer'),
(6, 'MSI'),
(7, 'Dell'),
(8, 'Gigabyte'),
(9, 'Huawei'),
(10, 'LG'),
(11, 'Vaio'),
(12, 'Microsoft (Surface)');

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `discount`, `category_id`, `brand_id`, `cpu`, `ram`, `disk`, `display`, `graphic_card`, `time_release`, `operating_system`, `connector`, `size`, `design`, `weight`) VALUES
(12, 'Laptop MSI Gaming GF63 Thin 11SC i5 11400H/8GB/512GB/4GB GTX1650/144Hz/Win11 (664VN)', 'Mang trong mình sức mạnh hiệu năng của bộ vi xử lý Intel Core i5 dòng H mạnh mẽ và card đồ họa rời NVIDIA GeForce GTX, laptop MSI Gaming GF63 Thin 11SC i5 (664VN) có khả năng chiến game nặng và thiết kế đồ họa một cách mượt mà.', 'https://phucanhcdn.com/media/product/46971_msi_gaming_gf63_thin_11_h4.jpg, https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-gaming-msi-gf63-thin-11sc-662vn-1.png?v=1696090116907, https://product.hstatic.net/1000037809/product/thegioigear_laptop_gaming_msi_gf63_thin_11sc_662vn__5_6754be40cc49437d8362ad6d3f021dc9_grande.jpg, https://minhancomputercdn.com/media/product/6231_laptop_msi_gaming_gf63_10sc_014vn_15inch_i5_10200h_gtx_1650_5.jpg ', 14490000, 12, 1, 1, 'i511400H2.7GHz', '8 GBDDR4 2 khe (1 khe 8 GB + 1 khe rời)3200 MHz', '512 GB SSD NVMe PCIeHỗ trợ khe cắm SATA 2.5 inch mở rộng (nâng cấp SSD hoặc HDD đều được)', '15.6\" Full HD (1920 x 1080) 144Hz', 'Card rời GTX 1650 Max-Q 4GB', '2022', 'Windows 11 Home SL', '1 x USB Type-C (hỗ trợ USB 3.2, DisplayPort)HDMI2 x USB 3.2Jack tai nghe 3.5 mm', 'Dài 362.9 mm - Rộng 237.5 mm - Dày 18.9 mm', 'Vỏ nhựa', 'Nặng 1.7 kg');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;