const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const qtAntes = minhaString.length;
const qtDepois = minhaString.trim().length;

console.log(minhaString.trim());
console.log(`Quantidade de caracteres antes do comando "trim": ${qtAntes}`);
console.log(`Quantidade de caracteres depois do comando "trim": ${qtDepois}`);

console.log(minhaString.replace("________", "sticioso"));