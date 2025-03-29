CREATE DATABASE testing;

USE testing;

CREATE TABLE `product` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome_do_produto` VARCHAR(255) NOT NULL,
  `fornecedor` VARCHAR(255) NOT NULL,
  `endereco_fornecedor` VARCHAR(255) NOT NULL,
  `quantidade` INT NOT NULL,
  `descricao` TEXT,
  `data_registro` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `data_update` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
