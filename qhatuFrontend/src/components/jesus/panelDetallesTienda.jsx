import React from "react";
import FormularioProducto from "./formularioProducto";
import TiendaModels from "../../models/tienda";

export default class PanelDetallesTienda extends React.Component {
  constructor(props) {
    super(props);
    this.state = TiendaModels.tiendaEjemplo();
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Detalles de producto
        </Typography>
      </React.Fragment>
    );
  }
}
