// Função Pura
function soma(a, b) {
    return a + b;
}

// Função Impura
let total = 0;
function adicionar(valor) {
    total += valor; // altera estado externo
    return total;
}
