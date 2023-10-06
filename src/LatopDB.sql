/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` longtext,
  `image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `price` int DEFAULT NULL,
  `line_throu` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `title` longtext,
  `description` longtext,
  `gender` longtext,
  `color` longtext,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`id`, `name`, `image`, `price`, `line_throu`, `discount`, `title`, `description`, `gender`, `color`) VALUES
(8, '', 'https://cdn.thewirecutter.com/wp-content/media/2023/09/windowsultrabooks-2048px-02832.jpg?auto=webp&width=1024, https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=980&dpr=2, https://cdn.thewirecutter.com/wp-content/media/2023/01/businesslaptops-2048px-0056.jpg', 629900, 899900, 30, '1979 SLEENKER-J Skinny Fit Boys Blue jeans', 'Skinny style with a low waist and narrow leg from thigh to ankle, featuring a versatile design with a punk attitude.', 'kids', 'blue');
INSERT INTO `products` (`id`, `name`, `image`, `price`, `line_throu`, `discount`, `title`, `description`, `gender`, `color`) VALUES
(9, '', 'https://cdn.thewirecutter.com/wp-content/media/2023/09/windowsultrabooks-2048px-02832.jpg?auto=webp&width=1024, https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=980&dpr=2, https://cdn.thewirecutter.com/wp-content/media/2023/01/businesslaptops-2048px-0056.jpg', 629900, 899900, 30, '1979 SLEENKER-J Skinny Fit Boys Blue jeans', 'Skinny style with a low waist and narrow leg from thigh to ankle, featuring a versatile design with a punk attitude.', 'kids', 'blue');
INSERT INTO `products` (`id`, `name`, `image`, `price`, `line_throu`, `discount`, `title`, `description`, `gender`, `color`) VALUES
(10, '', 'https://cdn.thewirecutter.com/wp-content/media/2023/09/windowsultrabooks-2048px-02832.jpg?auto=webp&width=1024, https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=980&dpr=2, https://cdn.thewirecutter.com/wp-content/media/2023/01/businesslaptops-2048px-0056.jpg', 629900, 899900, 30, '1979 SLEENKER-J Skinny Fit Boys Blue jeans', 'Skinny style with a low waist and narrow leg from thigh to ankle, featuring a versatile design with a punk attitude.', 'kids', 'blue');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;