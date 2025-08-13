// Instale o Express antes de rodar: npm install express

const express = require('express');
const app = express();
app.use(express.json());

// Dados simulados em memória
let equipes = [
  { id: 1, nome: "Real Madrid", pais: "Espanha" },
  { id: 2, nome: "Manchester City", pais: "Inglaterra" }
];

let jogadores = [
  { id: 1, nome: "Vinícius Júnior", equipeId: 1, posicao: "Atacante" },
  { id: 2, nome: "Erling Haaland", equipeId: 2, posicao: "Atacante" }
];

let partidas = [
  { id: 1, equipeA: 1, equipeB: 2, golsA: 2, golsB: 1, data: "2025-05-28" }
];

let classificacao = [
  { equipeId: 1, pontos: 3 },
  { equipeId: 2, pontos: 0 }
];

// Rotas de equipes
app.get('/equipes', (req, res) => res.json(equipes));
app.get('/equipes/:id', (req, res) => {
  const equipe = equipes.find(e => e.id === Number(req.params.id));
  if (!equipe) return res.status(404).json({ mensagem: "Equipe não encontrada" });
  res.json(equipe);
});

// Rotas de jogadores
app.get('/jogadores', (req, res) => res.json(jogadores));
app.get('/jogadores/:id', (req, res) => {
  const jogador = jogadores.find(j => j.id === Number(req.params.id));
  if (!jogador) return res.status(404).json({ mensagem: "Jogador não encontrado" });
  res.json(jogador);
});

// Rotas de partidas
app.get('/partidas', (req, res) => res.json(partidas));
app.get('/partidas/:id', (req, res) => {
  const partida = partidas.find(p => p.id === Number(req.params.id));
  if (!partida) return res.status(404).json({ mensagem: "Partida não encontrada" });
  res.json(partida);
});

// Rotas de classificação
app.get('/classificacao', (req, res) => {
  const tabela = classificacao.map(c => ({
    equipe: equipes.find(e => e.id === c.equipeId)?.nome,
    pontos: c.pontos
  }));
  res.json(tabela);
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('API da Champions League rodando em http://localhost:3000');
});