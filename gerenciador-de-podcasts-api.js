mkdir podcast-manager
cd podcast-manager
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init

// filepath: src/server.ts
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Bem-vindo ao gerenciador de podcasts!' }));
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});