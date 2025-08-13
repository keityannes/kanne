// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const movimentacao = parseFloat(gets());

function classificarCliente(movimentacao) {
    if (isNaN(movimentacao) || movimentacao <= 0) {
        return "Valor invalido";
    } else if (movimentacao <= 2000) {
        return "Basic";
    } else if (movimentacao <= 8000) {
        return "Plus";
    } else if (movimentacao <= 25000) {
        return "Premium";
    } else {
        return "Private";
    }
}

// Imprime o classificador de cliente baseado na movimentação
print(classificarCliente(movimentacao));