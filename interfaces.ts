function imprimirEtiqueta(etiqueta: { label: string }) { 
    console. log(etiqueta. label ); 
}
    let miEtiqueta = { numero: 10,  label:  "Esta es mi etiqueta" };
    imprimirEtiqueta(miEtiqueta) ; 

    //////////////////////////////////
    interface Etiqueta { 
        label: string; 
    }
    function imprimirEtiqueta2(etiqueta: Etiqueta) { 
        console.log(etiqueta.label);
    }; 
    let miEtiqueta2 = {numero: 10,  label: "Esta es mi etiqueta2" };
        imprimirEtiqueta2(miEtiqueta2); 
       

    /////////////////////////////////////

    ///propiedades opcionales de las interfaces
    interface cuadrado { 
        color?: string; 
        ancho: number; 
    }
    
    function crearCuadrado(cuadrado: cuadrado): { area: number } { 
        const area=cuadrado.ancho * cuadrado.ancho; 
        return { area: area }; 
    }

        crearCuadrado({ancho: 10 }); 
       

        ////////////////////////////////////////

        //solo lectura de las interfaces

        interface Punto2 { 
            readonly x: number; 
            readonly y: number; 
        }
        
        let puntol: Punto = { x: 10, y: 20};
            puntol.x = 20; 
            