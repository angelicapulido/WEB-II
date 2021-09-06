interface Transporte { 
    nombre: string; 
}
type Figura ={
    nombre: string; 
}

//extender una interfaz
interface Auto extends Transporte { 
    ruedas: number; 
}

//extender un type
type Cuadrad02 = Figura & { 
lados: 4; 
}