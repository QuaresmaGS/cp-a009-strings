const mensagem1 = (`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair" `);
const nmensage1 = mensagem1.replace("verde", "rosa");
const nNmensagem1 = nmensage1.replace("azul", "laranja");
const gato = ("mas não deixe o gato sair");
const nNMensagem1 = (`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, ${gato.toUpperCase()}" `);
console.log(nNMensagem1);
