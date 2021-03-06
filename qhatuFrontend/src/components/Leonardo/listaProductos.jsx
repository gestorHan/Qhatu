import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';
import "./listaProductos.css";
import EditIcon from '@material-ui/icons/Edit';
import values from "./modelData/listaProductos"
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  tittle:{
    textAlign: 'center',
  },
  value:{

  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardButtonDelete:{
    color: "#FF4C4C"
  },
  cardButtonEdit:{
    color: "#add8e6"
  },
  busqueda:{
    display:'flex',
     justifyContent:'center'
  }
});

class ListaProductos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valores:values.data(),
      inputValue: " ",
      showBool: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
  }
  toggleChecked(event) {
    console.log("Hola como estas", event.target.checked);
    this.setState({
      [event.target.name]: event.target.checked,
      showBool: event.target.checked,
    });
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      inputValue: event.target.value
    });
  }
  filtro(){
    const listItems = [];
    var j=0;
    var actualCheck= this.state.showBool;
    for (let i = 0; i < this.state.valores.length; i++) {
        if(!actualCheck){
            if(this.state.valores[i].nombre.toLowerCase().includes(this.state.inputValue.toLowerCase())){
                listItems[j] = this.state.valores[i];
                j++;
            }
        }
        else{
            if(!this.state.valores[i].disponible && this.state.valores[i].nombre.toLowerCase().includes(this.state.inputValue.toLowerCase())){
                listItems[j] = this.state.valores[i];
                j++;
            }
        }
      }
    return listItems;
  }
  render() {
    const  {classes}  = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
              <Typography className={classes.tittle} id="valoracionLabel" gutterBottom variant="h5" component="h2">
                    Lista Productos
              </Typography>
            </div>
            
            <div className={classes.busqueda}>
                <TextField  
                    name="busqueda"
                    label="Nombre"
                    rows="1"
                    onInput={this.handleInputChange}
                    variant="outlined"
                />
                <div>
                    <Typography>
                         Solo Productos no disponibles
                    </Typography>
                    <div  style={{display:'flex', justifyContent:'center'}}>
                        <Switch name="disponible" color="primary" onChange={this.toggleChecked} />
                    </div>
                </div>
            </div>


            <div>
                <Grid container spacing={3}>
                {this.filtro().map((value) => (
                    <Grid item key={value.id}  xs={12} sm={6} md={4} >
                        <Card className={classes.value.id} id= {`cardOf${value.id}`}>
                            <CardMedia
                                className={classes.cardMedia}
                                image = {value.imagen}
                                title = {value.nombre}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {value.nombre}
                                </Typography>
                                <Typography gutterBottom variant="h5" style={{textAlign: 'right', color: 'green'}}>
                                    S/.{value.precio}
                                </Typography>  
                                <Typography>
                                    {value.descripcion}
                                </Typography>   
                            </CardContent>
                            <CardActions>  
                                <IconButton size="small" className={classes.cardButtonDelete} aria-label="like" onClick={() => {
                                        if(this.state.valores.indexOf(value)>-1){
                                            console.log(this.state.valores.indexOf(value));
                                            this.state.valores.splice(this.state.valores.indexOf(value),1);
                                            document.getElementById(`cardOf${value.id}`).style.visibility="hidden"
                                        }
                                    }}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton size="small" className={classes.cardButtonEdit} aria-label="like" onClick={() => {
                                         console.log(this.state.valores.indexOf(value));
                                    }}>
                                    <EditIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </div>
        </form>
        </div>
    );
  }
}
export default withStyles(useStyles)(ListaProductos);

