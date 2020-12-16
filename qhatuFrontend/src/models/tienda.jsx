'use strict';

var TiendaModels;

if (TiendaModels === undefined) {
   TiendaModels = {};
}
TiendaModels.tiendaEjemplo = function (){
    return ({
        id:0,
        valoracion: 4,//estrellas
        nombre: "Tienda seño Maria",
        descripcion: "Lo mejor al mejor precio.",
        imagen:
          "https://www.findevgateway.org/sites/default/files/inline-images/es_mujer_peruana_junto_a_su_puesto_de_verduras.jpg",
      });
}

export default TiendaModels;