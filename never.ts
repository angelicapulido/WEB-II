// esta funcion no tiene un punto final ya que dispara una excepcion 
function error (mensaje: string): never { 
    throw new Error (mensaje); 
}
// esta funcion no tiene un punto final ya que dispara un error 
function fallo(): never { 
    return error("Reportar fallo"); 
}
// esta funcion no finaliza ya que posee un loop infinito 
function looplnfinito() : never { 
while(true){}
} 