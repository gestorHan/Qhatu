import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import 'fontsource-roboto';
import "./cajaValoracion.css";


class CajaValoracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valoracion: 0,
      comentario: " ",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  toggleChecked(event) {
    console.log("Hola como estas", event.target.checked);
    this.setState({
      [event.target.name]: event.target.checked,
    });
  }

  handleSubmit(event) {
    alert("Datos: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
              <Typography id="valoracionLabel" gutterBottom variant="h5" component="h2">
                Valoracion a Tienda:
              </Typography>
            </div>
            
            <div>
              <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    id="Raiting"
                    name="valoracion"
                    defaultValue={0}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    onChange={(event, newValue) => {
                      this.setState({
                        [event.target.name]: event.target.value,
                      });
                    }}
                  />
              </Box>
            </div>


            <div>
                <TextField
                    name="comentario"
                    label="Comentarios(opcional)"
                    multiline
                    rows="3"
                    onInput={this.handleInputChange}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div>
                <Button type="submit" variant="contained">
                Enviar
                </Button>
            </div>
            </form>
        </div>
    );
  }
}
export default CajaValoracion;
