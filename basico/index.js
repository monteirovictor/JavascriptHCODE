// Nova forma de declarar variavel e constante

let primeiroCodigo = "Hello Word";  

const segundoCodigo = "Hello word 2";

let terceirocodigo = "10";

let quartocodigo = 10;

console.log(primeiroCodigo);
console.log(segundoCodigo);

// comparando as variaveis
console.log(primeiroCodigo==segundoCodigo);

//validade conteudo e tipo da variavel usa ===
console.log(terceirocodigo===quartocodigo);



let num =5;

for (let index = 1; index <=10; index++) {
    // template string
    console.log(`${index}x${num}=${index*num}`);
    
}