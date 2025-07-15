function saudacao(saudacaoInicial) {
    return function(nome) {
        return `${saudacaoInicial}, ${nome}!`;
    };
}

const bomDia = saudacao("Bom dia");
console.log(bomDia("Vinícius")); // Bom dia, Vinícius!
