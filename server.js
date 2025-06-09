const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const portStr = process.env.PORT || '3000';  // Porta padrão mais comum para servidor web
const PORT = parseInt(portStr.trim(), 10);

if (isNaN(PORT) || PORT < 0 || PORT >= 65536) {
  throw new Error('Porta inválida: ' + portStr);
}

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
