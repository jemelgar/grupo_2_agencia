-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema agencia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema agencia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `agencia` DEFAULT CHARACTER SET utf8mb4 ;
USE `agencia` ;

-- -----------------------------------------------------
-- Table `agencia`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `destination_promoted` TINYINT(4) NULL DEFAULT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `img_destination` VARCHAR(150) NULL DEFAULT NULL,
  `rating` INT(11) NULL DEFAULT NULL,
  `description` VARCHAR(500) NULL DEFAULT NULL,
  `price` DECIMAL(10,0) NULL DEFAULT NULL,
  `categoria` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `agencia`.`tipousuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`tipousuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `agencia`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL,
  `last_name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL,
  `email` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL,
  `password` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL,
  `image` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL,
  `id_tipo_usuario` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Usuarios_tipoUsuarios_idx` (`id_tipo_usuario` ASC),
  CONSTRAINT `fk_Usuarios_tipoUsuarios`
    FOREIGN KEY (`id_tipo_usuario`)
    REFERENCES `agencia`.`tipousuarios` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `agencia`.`usuariosproductos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`usuariosproductos` (
  `id_compra` INT(11) NOT NULL AUTO_INCREMENT,
  `id_productos` INT(11) NOT NULL,
  `id_usuarios` INT(11) NOT NULL,
  PRIMARY KEY (`id_compra`),
  INDEX `fk_Productos_has_Usuarios_Usuarios1_idx` (`id_usuarios` ASC),
  INDEX `fk_Productos_has_Usuarios_Productos1_idx` (`id_productos` ASC),
  CONSTRAINT `fk_Productos_has_Usuarios_Productos1`
    FOREIGN KEY (`id_productos`)
    REFERENCES `agencia`.`productos` (`id`),
  CONSTRAINT `fk_Productos_has_Usuarios_Usuarios1`
    FOREIGN KEY (`id_usuarios`)
    REFERENCES `agencia`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
