-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2022 at 01:47 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacations`
--

-- --------------------------------------------------------

--
-- Table structure for table `following`
--

CREATE TABLE `following` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `vacationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `following`
--

INSERT INTO `following` (`id`, `userId`, `vacationId`) VALUES
(145, 8067, 30),
(146, 8067, 31),
(147, 8052, 16),
(148, 8052, 17),
(149, 8067, 20),
(150, 8067, 18),
(151, 8067, 16),
(152, 8067, 17),
(153, 8067, 21),
(154, 8067, 19),
(155, 8067, 22);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `userName`, `password`, `role`) VALUES
(8052, 'Omri', 'Blutstein', 'omri', '274e2bff61a9b36a7fe11aa1c5dcf7107dc27416d2a7cd1d519f0e749193528699ea5e8f4e7b6cab358119cb119e6cfb91ab0ccd9647c19d3a74246eb3fbf43d', 'Admin'),
(8067, 'Omri', 'Blutstein', 'omri_balut', '274e2bff61a9b36a7fe11aa1c5dcf7107dc27416d2a7cd1d519f0e749193528699ea5e8f4e7b6cab358119cb119e6cfb91ab0ccd9647c19d3a74246eb3fbf43d', 'User');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationId` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `location` varchar(500) NOT NULL,
  `imageName` varchar(500) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationId`, `description`, `location`, `imageName`, `startDate`, `endDate`, `price`) VALUES
(16, 'Stay In Berlin - Incredibly Low Prices', 'Berlin', '61cf21de-19f6-4522-88d8-6bc6b51e803e.jpg', '2022-05-09', '2022-05-13', '350.00'),
(17, 'Vacation In Paris - Go To Paris In 2022', 'Paris', 'abbbf93d-46cb-46a1-b742-e19162ebbe44.jpg', '2022-05-09', '2022-05-13', '849.99'),
(18, 'Tourism Rome - Top 10 Things to Do in Rome', 'Rome', '48517dc7-9fef-4f41-9aa7-1736ec633a14.jfif', '2022-06-09', '2022-06-13', '850.00'),
(19, 'Discover Places Travelers Love. See the Area\'s Top Attractions', 'London', 'ba23c582-f534-448a-9a6b-dcd5b86e97dd.jpg', '2022-07-09', '2022-07-13', '1000.00'),
(20, 'NYC Vacation - Huge Discounts', 'New York', '5d643738-54c5-4f10-836f-a2db1dfbf9aa.webp', '2022-09-09', '2022-09-13', '1000.00'),
(21, 'The Best Tel Aviv Vacation Packages 2022', 'Tel Aviv', '70b30566-c28d-4150-9452-a9fff5ada928.jpg', '2022-05-15', '2022-05-19', '900.00'),
(22, 'Madrid Vacation - See Madrid in 2023', 'Madrid', 'adade1b9-6894-484d-906b-b542b6e11037.jpg', '2023-02-15', '2023-02-21', '1250.00'),
(23, 'Lisbon Travel Guide: Vacation + Trip Ideas', 'Lisbon', '5d376250-fe81-46d9-a665-07f2c4aa294f.jpg', '2023-03-15', '2023-03-21', '450.00'),
(30, 'Stockholm Vacation Packages 2022', 'Stockholm ', '2f9dd5d8-1877-4bce-9b9e-2982077b03b6.jpg', '2022-06-15', '2022-06-21', '275.00'),
(31, 'New Zealand Vacation Packages 2022', 'New Zealand', '23e911f3-2a82-4de6-b08e-165ba7b8ee2c.webp', '2022-05-26', '2022-05-20', '600.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `following`
--
ALTER TABLE `following`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `vacationId` (`vacationId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `following`
--
ALTER TABLE `following`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8069;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `following`
--
ALTER TABLE `following`
  ADD CONSTRAINT `following_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `following_ibfk_2` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`vacationId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
