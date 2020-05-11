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


// função 
function somar(a,b){
    return a+b;

}

let result=somar(2,3);
console.log(result);


// função anônima
(function (a,b){
    return a+b;

})(2,3);

// aerofunction
let calc=(a,b)=>{
    return a+b;
};

let resultadinho = calc(1,2);
console.log(resultadinho);

window.addEventListener('click',event=>{
    console.log("click");
});


let data = new Date();
console.log(data.toLocaleDateString("pt-BR"));

let carros = ["palio 98","marea turbo","toro"];

console.log(carros);
console.log(carros[2]);

carros.forEach(function(value,index){
    console.log(index,value);
});


let montadora = ["Fiat","GM","Volkswagem","Tesla"];

montadora.forEach(function(value,index){
    console.log(index,value);
});

