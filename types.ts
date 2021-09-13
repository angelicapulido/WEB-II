function saludar(persona:{nombre:string;edad:number}) {
    return `hola ${persona.nombre}`;
}
console.log(saludar({nombre: "Luis", edad:22}));

interface persona{
    nombre:string;
    edad:number;
}
function saludar2(persona:persona) {
    return `hola ${persona.nombre}`
}
console.log(saludar2({nombre: "Elena", edad:25}));

type persona2 = {
    nombre:string;
    edad:number;
}
function saludar3(persona2:persona2) {
    return `hola ${persona2.nombre}`
}
console.log(saludar3({nombre: "Anabel", edad:30}));