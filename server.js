require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const app = express();

let currentAuthCode = null;

// Función para generar un código aleatorio (6 dígitos alfanuméricos)
function generateAuthCode() {
  return crypto.randomBytes(3).toString('hex').toUpperCase(); // Ej: "A3F9C1"
}

// Middleware para regenerar el código en cada visita
app.get('/auth', (req, res) => {
  currentAuthCode = generateAuthCode();
  console.log(`[${new Date().toISOString()}] Nuevo código generado: ${currentAuthCode}`);
  res.send(`
    <html>
      <head>
        <title>Auth Code</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
          }
          .code-box {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            text-align: center;
          }
          .code {
            font-size: 48px;
            font-weight: bold;
            color: #007bff;
          }
        </style>
      </head>
      <body>
        <div class="code-box">
          <h2>Código de autenticación:</h2>
          <div class="code">${currentAuthCode}</div>
        </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
