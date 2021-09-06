function saludar3(nombre: string){ 
    console.log(`Hola ${nombre}`) ; 
}

saludar3("Angelica")


///////////

//valores de retorno
function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

// funciones anonimas
const nombres = ["Juan","pedro" , "Luis"];
nombres.forEach(function (s) { 
    console. log( s.toUpperCase()) ;
}); 

nombres.forEach((s) => { 
    console.log( s. toUpperCase()); 
});