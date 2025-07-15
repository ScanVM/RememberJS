function processarUsuario(nome, callback) {
    console.log("Processando...");
    callback(nome);
}

processarUsuario("Vinícius", function(nome) {
    console.log(`Bem-vindo, ${nome}!`);
});
