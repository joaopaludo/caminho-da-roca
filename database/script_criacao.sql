-- Criação do banco de dados
CREATE DATABASE caminho_da_roca;

CREATE TABLE tipo_usuario (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(20) UNIQUE NOT NULL
);

INSERT INTO tipo_usuario (tipo) VALUES ('administrador'), ('produtor'), ('consumidor'), ('cooperativa');

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cd_tipo_usuario INT NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cd_tipo_usuario) REFERENCES tipo_usuario(id) ON DELETE RESTRICT
);

CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    cd_produtor INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    disponibilidade BOOLEAN DEFAULT TRUE,
    imagem_url VARCHAR(255),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cd_produtor) REFERENCES usuario(id) ON DELETE CASCADE
);

CREATE TABLE pedido (
    id SERIAL PRIMARY KEY,
    cd_cliente INT NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pendente',
    vl_total DECIMAL(10, 2) NOT NULL,
    vl_frete DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cd_cliente) REFERENCES usuario(id) ON DELETE CASCADE
);

CREATE TABLE item_carrinho (
    id SERIAL PRIMARY KEY,
    cd_pedido INT NOT NULL,
    cd_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cd_pedido) REFERENCES pedido(id) ON DELETE CASCADE,
    FOREIGN KEY (cd_produto) REFERENCES produto(id) ON DELETE CASCADE
);

CREATE TABLE cooperativa (
    id SERIAL PRIMARY KEY,
    cd_usuario INT NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(15),
    FOREIGN KEY (cd_usuario) REFERENCES usuario(id) ON DELETE CASCADE
);

CREATE TABLE pagamento (
    id SERIAL PRIMARY KEY,
    cd_pedido INT NOT NULL,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    forma_pagamento VARCHAR(50),
    vl_pagamento DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'completo',
    FOREIGN KEY (cd_pedido) REFERENCES pedido(id) ON DELETE CASCADE
);
