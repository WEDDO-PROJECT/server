
- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema weddo
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema weddo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `weddo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `weddo` ;
-- -----------------------------------------------------
-- Table `weddo`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `tel_number` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`check_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`check_list` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `todos` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `check_list_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `weddo`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`sp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`sp` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `owner_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `tel` VARCHAR(255) NULL DEFAULT NULL,
  `professional_name` VARCHAR(255) NULL DEFAULT NULL,
  `logo` VARCHAR(255) NULL DEFAULT NULL,
  `document` VARCHAR(255) NULL DEFAULT NULL,
  `cin` VARCHAR(50) NULL DEFAULT NULL,
  `category` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(25) NULL DEFAULT NULL,
  `availability` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
----------------------------------------------
------Table 'salle'
-------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`salle` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
   `price` VARCHAR(255) NULL DEFAULT NULL,
  `latitude` VARCHAR(255) NULL DEFAULT NULL,
  `longitude` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`chosenservices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`chosenservices` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `sp_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `sp_id` (`sp_id` ASC) VISIBLE,
  CONSTRAINT `chosenservices_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `weddo`.`user` (`id`),
  CONSTRAINT `chosenservices_ibfk_2`
    FOREIGN KEY (`sp_id`)
    REFERENCES `weddo`.`sp` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `sp_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `sp_id` (`sp_id` ASC) VISIBLE,
  CONSTRAINT `comments_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `weddo`.`user` (`id`),
  CONSTRAINT `comments_ibfk_2`
    FOREIGN KEY (`sp_id`)
    REFERENCES `weddo`.`sp` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`media`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`media` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sp_id` INT NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `video` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `sp_id` (`sp_id` ASC) VISIBLE,
  CONSTRAINT `images_ibfk_1`
    FOREIGN KEY (`sp_id`)
    REFERENCES `weddo`.`sp` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`room` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `type` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`participants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`participants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `sp_id` INT NULL DEFAULT NULL,
  `room_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `sp_id` (`sp_id` ASC) VISIBLE,
  INDEX `room_id` (`room_id` ASC) VISIBLE,
  CONSTRAINT `participants_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `weddo`.`user` (`id`),
  CONSTRAINT `participants_ibfk_2`
    FOREIGN KEY (`sp_id`)
    REFERENCES `weddo`.`sp` (`id`),
  CONSTRAINT `participants_ibfk_3`
    FOREIGN KEY (`room_id`)
    REFERENCES `weddo`.`room` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NULL DEFAULT NULL,
  `participant_id` INT NULL DEFAULT NULL,
  `sender` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `participant_id` (`participant_id` ASC) VISIBLE,
  CONSTRAINT `message_ibfk_1`
    FOREIGN KEY (`participant_id`)
    REFERENCES `weddo`.`participants` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`rating`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`rating` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `sp_id` INT NULL DEFAULT NULL,
  `reviewText` VARCHAR(255) NULL DEFAULT NULL,
  `rating` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `sp_id` (`sp_id` ASC) VISIBLE,
  CONSTRAINT `rating_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `weddo`.`user` (`id`),
  CONSTRAINT `rating_ibfk_2`
    FOREIGN KEY (`sp_id`)
    REFERENCES `weddo`.`sp` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- -----------------------------------------------------
-- Table `weddo`.`user_has_chosenservices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddo`.`user_has_chosenservices` (
  `user_id` INT NOT NULL,
  `chosenservices_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`user_id`, `chosenservices_id`),
  INDEX `fk_user_has_chosenservices_chosenservices1_idx` (`chosenservices_id` ASC) VISIBLE,
  INDEX `fk_user_has_chosenservices_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_chosenservices_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `weddo`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_chosenservices_chosenservices1`
    FOREIGN KEY (`chosenservices_id`)
    REFERENCES `weddo`.`chosenservices` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
