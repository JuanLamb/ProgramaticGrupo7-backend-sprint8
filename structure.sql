-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema botacura_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema botacura_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `botacura_db` DEFAULT CHARACTER SET utf8mb4 ;
USE `botacura_db` ;

-- -----------------------------------------------------
-- Table `botacura_db`.`addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`addresses` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `street` VARCHAR(255) NOT NULL,
  `number` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`avatars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`avatars` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`brands` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`categories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`colors` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`details` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `quantity` DECIMAL(10,0) NOT NULL,
  `subtotal` DECIMAL(10,0) NOT NULL,
  `orderId` INT(11) NOT NULL,
  `productId` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`genders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`genders` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`images` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `productId` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`orders` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `number` INT(11) NOT NULL,
  `date` DATETIME NOT NULL,
  `total` DECIMAL(10,0) NOT NULL,
  `userId` INT(11) NOT NULL,
  `shippingId` INT(11) NOT NULL,
  `stateId` INT(11) NOT NULL,
  `paymentId` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`payments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  `stockMin` INT(11) NOT NULL,
  `stockMax` INT(11) NOT NULL,
  `discount` INT(11) NOT NULL,
  `description` TEXT NOT NULL,
  `offer` INT(11) NOT NULL,
  `season` INT(11) NOT NULL,
  `brandId` INT(11) NOT NULL,
  `genderId` INT(11) NOT NULL,
  `colorId` INT(11) NOT NULL,
  `sizeId` INT(11) NOT NULL,
  `categoryId` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `destroyTime` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`sequelizemeta` (
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `botacura_db`.`shippings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`shippings` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `street` VARCHAR(255) NOT NULL,
  `dni` INT(11) NOT NULL,
  `number` INT(11) NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  `phoneNumber` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`sizes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`states`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`states` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `botacura_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `botacura_db`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `avatarId` INT(11) NOT NULL,
  `addressId` INT(11) NOT NULL,
  `roleId` INT(11) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
