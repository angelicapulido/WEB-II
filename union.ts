function imprimirld(id: number | string) { 
    console.log(`El id es ${id}`) ; 
}
    imprimirld(1); 
    imprimirld('abc') ; 


    ///////////////////////////////////////

    //trabajando con uniones
    function imprimirld2(id: number | string) { 
        if (typeof id === "string") { 
        console.log(`El id es ${(id as string) .toUpperCase()}`); 
        } else { 
            console.log(`El id es ${(id as number).toFixed(2)}`);
        }
    }    
        imprimirld2('este es mi id'); 
        imprimirld2 (100.234234123); 

