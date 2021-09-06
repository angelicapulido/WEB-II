function saludar4(fn: (a: string) => void) { 
    fn("Hola Mundo") 
}
    
function imprimirEnConsola(s: string) { 
    console.log(s) ; 
}
    saludar4(imprimirEnConsola) ; 
    
    