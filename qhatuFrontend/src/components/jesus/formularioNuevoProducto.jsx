import React from "react";
import FormularioProducto from "./formularioProducto"
import ProductoModels from "../../models/jesus/Producto"


export default class FormularioEditarProducto extends React.Component {
    constructor(props) {
      super(props);
      this.state = ProductoModels.productoEjemplo();
    }
    render(){
        return(
            <FormularioProducto/>
        )
    }
}  