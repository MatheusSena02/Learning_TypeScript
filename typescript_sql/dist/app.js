"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE, (error) => {
    if (error) {
        throw new Error(error.message);
    }
    console.log("Conexão concluída com sucesso!");
});
db.run(`CREATE TABLE IF NOT EXISTS Categoria (
        Id INTEGER PRIMARY KEY,
        Nome TEXT NOT NULL UNIQUE
    )
    `, (err) => {
    if (err) {
        console.error("Erro ao criar tabela", err.message);
    }
});
db.run(`CREATE TABLE IF NOT EXISTS Produto (
        Id INTEGER PRIMARY KEY,
        Nome TEXT NOT NULL, 
        Preco FLOAT NOT NULL,
        Estoque INTEGER,
        Id_Categoria INTEGER,
        FOREIGN KEY (Id_Categoria) REFERENCES Categoria(Id)
    )`, (err) => {
    if (err) {
        console.error("Erro ao criar tabela", err.message);
    }
});
db.run(`CREATE TABLE IF NOT EXISTS Cliente(
    Id INTEGER PRIMARY KEY,
    Nome TEXT NOT NULL,
    Email TEXT,
    Telefone TEXT,
    Endereco TEXT
    )`, (err) => {
    if (err) {
        console.error("Erro ao criar tabela", err.message);
    }
});
db.run(`CREATE TABLE IF NOT EXISTS ItensPedido(
    Id INTEGER PRIMARY KEY,
    Id_Produto INTEGER,
    Quantidade INTEGER NOT NULL,
    CHECK (Quantidade > 0),
    FOREIGN KEY (Id_Produto) REFERENCES Produto(Id)
    )`, (err) => {
    if (err) {
        console.error("Erro ao criar tabela", err.message);
    }
});
db.run(`CREATE TABLE IF NOT EXISTS Pedido(
    Id INTEGER PRIMARY KEY,
    Data_Pedido DATE NOT NULL,
    ValorTotal_Pedido FLOAT,
    Id_Cliente INTEGER,
    Id_ItensPedido INTEGER,
    FOREIGN KEY (Id_ItensPedido) REFERENCES ItensPedido(Id),
    FOREIGN KEY (Id_Cliente) REFERENCES Cliente(Id)
    )`, (err) => {
    if (err) {
        console.error("Erro ao criar tabela", err.message);
    }
});
db.run(`
    INSERT OR IGNORE INTO Categoria (Nome) VALUES
    ('Eletrônicos'),
    ('Informática'),
    ('Acessórios'),
    ('Casa e Cozinha'),
    ('Livros'),
    ('Esporte & Lazer'),
    ('Moda'),
    ('Beleza & Saúde'),
    ('Brinquedos'),
    ('Automotivo')
    `);
db.run(`
    INSERT INTO Produto (Nome, Preco, Estoque, Id_Categoria) VALUES
    ('Smartphone Nova X10 128GB', 1699.90, 35, 1),
    ('Smartphone Nova X10 256GB', 1999.90, 22, 1),
    ('Fone Bluetooth Pro ANC', 399.90, 80, 1),
    ('Smartwatch Pulse Fit', 549.90, 45, 1),
    ('TV 50" 4K Ultra', 2499.00, 18, 1),
    ('Notebook 15.6 i5 8GB 256GB SSD', 3199.00, 12, 2),
    ('Notebook 14 Ryzen 5 16GB 512GB SSD', 3899.00, 10, 2),
    ('Teclado Mecânico TKL', 349.90, 50, 2),
    ('Mouse Gamer 7200 DPI', 149.90, 120, 2),
    ('Headset USB Over-Ear', 229.90, 60, 2),
    ('Monitor 24 Full HD 75Hz', 799.90, 25, 2),
    ('SSD NVMe 1TB', 549.90, 40, 2),
    ('HD Externo 2TB', 429.90, 35, 2),
    ('Roteador Wi-Fi 6 Dual Band', 399.90, 30, 2),
    ('Cabo USB-C 1m', 29.90, 300, 3),
    ('Adaptador HDMI para VGA', 39.90, 180, 3),
    ('Suporte Articulado para TV', 119.90, 55, 3),
    ('Jarra Elétrica Inox 1,7L', 159.90, 26, 4),
    ('Liquidificador 900W', 219.90, 20, 4),
    ('Cafeteira Espresso 20bar', 649.90, 14, 4),
    ('Jogo de Panelas 5 peças', 379.90, 17, 4),
    ('Travesseiro Viscoelástico', 129.90, 40, 4),
    ('Livro "Clean Code"', 149.90, 60, 5),
    ('Livro "Design Patterns GoF"', 199.90, 35, 5),
    ('Livro "Estruturas de Dados em C"', 139.90, 28, 5),
    ('Tênis de Corrida AirRun', 299.90, 42, 6),
    ('Bicicleta MTB Aro 29', 2499.00, 6, 6),
    ('Garrafa Térmica 1L', 79.90, 100, 6),
    ('Kit Halteres 20kg', 429.90, 12, 6),
    ('Camiseta Dry Fit Masculina', 69.90, 150, 7),
    ('Jaqueta Corta-Vento', 229.90, 22, 7),
    ('Calça Jogger', 119.90, 40, 7),
    ('Mochila Antifurto 20L', 189.90, 33, 7),
    ('Creme Hidratante 200ml', 34.90, 120, 8),
    ('Protetor Solar FPS 50', 59.90, 140, 8),
    ('Escova Dental Elétrica', 199.90, 25, 8),
    ('Máquina de Barbear Recarregável', 159.90, 30, 8),
    ('Boneca Fashion 30cm', 99.90, 48, 9),
    ('Quebra-Cabeça 1000 peças', 89.90, 44, 9),
    ('Jogo de Tabuleiro Estratégia', 229.90, 20, 9),
    ('Carrinho Controle Remoto', 149.90, 26, 9),
    ('Bomba de Ar 12V Automotiva', 129.90, 38, 10),
    ('Câmera de Ré com Visor', 279.90, 22, 10),
    ('Suporte Celular Veicular', 39.90, 200, 10),
    ('Aspirador Automotivo 120W', 159.90, 28, 10),
    ('Impressora Multifuncional Wi-Fi', 649.90, 15, 2),
    ('Webcam Full HD 1080p', 199.90, 32, 2),
    ('Base Refrigerada para Notebook', 119.90, 40, 3),
    ('Hub USB-C 7-em-1', 249.90, 25, 3),
    ('Microfone Condensador USB', 349.90, 18, 3)
    `);
db.all(`
    SELECT DISTINCT Nome, Preco
    FROM Produto
    WHERE Preco < 100
    ORDER BY Preco 
    `, (err, rows) => {
    if (err) {
        console.error("Erro: ", err.message);
        return;
    }
    console.log("Todos os usuários: ", rows);
});
console.log();
//# sourceMappingURL=app.js.map