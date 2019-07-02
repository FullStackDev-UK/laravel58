-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 08, 2019 at 01:46 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel58db`
--
CREATE DATABASE IF NOT EXISTS `laravel58db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `laravel58db`;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping Faker-generated data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', 'u1@u1.com', NULL, '$2y$10$Hp9ORjNhvNvHl0rozdyEF.9otYN0IAG7LmjFCtp5HecNUTMbm/ThG', 'iK8b637oy7z76PWGgMBF3b2MLvUMVTnMG5EEZ5q6GBgTtkuUIED4rZZAX0lL', '2019-04-14 07:48:35', '2019-04-14 07:48:35'),
(2, 'General User', 'u2@u2.com', NULL, '$2y$10$yV60CeCvuBirhgfWdR9fYO5WZPyWSzIuW3gkZylhcR305Jmzbx6Iq', NULL, '2019-05-25 08:24:29', '2019-05-25 08:24:29'),
(3, 'Tim', 'tim@timtimtimtimtim.comcom', NULL, '$2y$10$eQvSBQzumk6/tBfR4O3AXe/7dbvKh/ge0lVBxD5hoDkAQI25T3Mga', NULL, '2019-05-27 07:35:15', '2019-05-27 07:35:15'),
(4, 'Dylan Harrison', 'gholmes@example.org', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 's0b77xQzWC', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(5, 'Karl Reid', 'rprice@example.org', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '188olgQpKf', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(6, 'Max Chapman', 'bbutler@example.com', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'xnvX1r6IwR', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(7, 'Kyle Davies', 'olivia54@example.net', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'wSllqApFqm', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(8, 'Keeley Cooper', 'gavin32@example.com', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'VUvgMRUwVE', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(9, 'Scarlett Davies', 'acooper@example.org', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'nTnNMcUaxE', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(10, 'Suzanne Richards', 'harley.jackson@example.net', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rtbGqRWb7F', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(11, 'Tony Kennedy', 'ross.david@example.net', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'tlnI0xmHTk', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(12, 'Gordon White', 'alexa.morgan@example.net', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '59XkfgIoB7', '2019-05-27 07:37:41', '2019-05-27 07:37:41'),
(13, 'Danielle Hall', 'jhill@example.net', '2019-05-27 07:37:41', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'MUnrqtoqb2', '2019-05-27 07:37:41', '2019-05-27 07:37:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
