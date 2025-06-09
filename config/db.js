const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar com o banco:', erro.message);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});

module.exports = conexao;
