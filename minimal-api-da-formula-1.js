// Minimal API da Fórmula 1 com Node.js e Fastify

// Instale o Fastify antes de rodar: npm install fastify

const fastify = require('fastify')({ logger: true });

// Dados simulados em memória
let pilotos = [
  { id: 1, nome: "Lewis Hamilton", equipe: "Mercedes" },
  { id: 2, nome: "Max Verstappen", equipe: "Red Bull" }
];

// Listar todos os pilotos
fastify.get('/pilotos', async (request, reply) => {
  return pilotos;
});

// Buscar piloto por ID
fastify.get('/pilotos/:id', async (request, reply) => {
  const piloto = pilotos.find(p => p.id === Number(request.params.id));
  if (!piloto) {
    reply.code(404).send({ mensagem: "Piloto não encontrado" });
  }
  return piloto;
});

// Criar novo piloto
fastify.post('/pilotos', async (request, reply) => {
  const { nome, equipe } = request.body;
  const novoPiloto = { id: pilotos.length + 1, nome, equipe };
  pilotos.push(novoPiloto);
  reply.code(201).send(novoPiloto);
});

// Atualizar piloto
fastify.put('/pilotos/:id', async (request, reply) => {
  const id = Number(request.params.id);
  const { nome, equipe } = request.body;
  const piloto = pilotos.find(p => p.id === id);
  if (!piloto) {
    reply.code(404).send({ mensagem: "Piloto não encontrado" });
    return;
  }
  piloto.nome = nome;
  piloto.equipe = equipe;
  reply.send(piloto);
});

// Remover piloto
fastify.delete('/pilotos/:id', async (request, reply) => {
  const id = Number(request.params.id);
  const index = pilotos.findIndex(p => p.id === id);
  if (index === -1) {
    reply.code(404).send({ mensagem: "Piloto não encontrado" });
    return;
  }
  pilotos.splice(index, 1);
  reply.code(204).send();
});

// Iniciar servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('API da Fórmula 1 rodando em http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();