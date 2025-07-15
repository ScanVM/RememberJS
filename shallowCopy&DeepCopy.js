const objOriginal = { nome: "Vinícius", info: { idade: 23 } };

// Shallow Copy
const copiaRasa = { ...objOriginal };
copiaRasa.info.idade = 30;
console.log(objOriginal.info.idade); // 30 (compartilha referência)

// Deep Copy
const copiaProfunda = JSON.parse(JSON.stringify(objOriginal));
copiaProfunda.info.idade = 40;
console.log(objOriginal.info.idade); // 30
console.log(copiaProfunda.info.idade); // 40
