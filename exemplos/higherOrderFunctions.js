function aplicarOperacao(arr, operacao) {
    return arr.map(operacao);
}

const dobrar = (x) => x * 2;
console.log(aplicarOperacao([1, 2, 3], dobrar)); // [2, 4, 6]
