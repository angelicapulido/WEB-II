declare function crear(o: object):  void;
crear({prop: 0 }) 
crear(null); 
crear(undefined); 
crear([]); 
 
// false es un tipo primitivo, por lo cual se generara un error 

//crear(false) ; 
