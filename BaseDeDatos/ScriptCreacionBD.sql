-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema melreposteria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema melreposteria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `melreposteria` DEFAULT CHARACTER SET utf8 ;
USE `melreposteria` ;

-- -----------------------------------------------------
-- Table `melreposteria`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`Clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(80) NULL,
  `Email` VARCHAR(80) NULL,
  `Telefono` VARCHAR(80) NULL,
  `Direccion` VARCHAR(80) NULL,
  `Codigo postal` VARCHAR(80) NULL,
  `Calle y numero` VARCHAR(80) NULL,
  `Colonia` VARCHAR(80) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `melreposteria`.`Pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`Pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Total` INT NULL,
  `Precio` VARCHAR(80) NULL,
  `Estatus` VARCHAR(80) NULL,
  `Direccion de envio` VARCHAR(80) NULL,
  `Calle y numero` VARCHAR(80) NULL,
  `Codigo postal` VARCHAR(80) NULL,
  `Colonia` VARCHAR(80) NULL,
  `Clientes_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Pedidos_Clientes_idx` (`Clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_Pedidos_Clientes`
    FOREIGN KEY (`Clientes_id`)
    REFERENCES `melreposteria`.`Clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `melreposteria`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `melreposteria`.`Productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(250) NULL,
  `Precio` VARCHAR(250) NULL,
  `Descripcion` TEXT(1000) NULL,
  `Pedidos_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Productos_Pedidos1_idx` (`Pedidos_id` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_Pedidos1`
    FOREIGN KEY (`Pedidos_id`)
    REFERENCES `melreposteria`.`Pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
