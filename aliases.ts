type Punto = { 
    x: number; 
    y: number; 
}
    function imprimircoordenada(punto: Punto) { 
        console.log(`La coordenada x es: ${punto.x}`); 
        console.log(`La coordenada y es: ${punto.y}`); 
    }
    imprimircoordenada({ x: 10, y: 25 }); 