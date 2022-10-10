CREATE DATABASE nodejs;

USE nodejs;

CREATE TABLE clientes (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      address VARCHAR(100) NOT NULL,      
      phone VARCHAR(15) NOT NULL
);

SHOW TABLES;

DESCRIBE clientes;