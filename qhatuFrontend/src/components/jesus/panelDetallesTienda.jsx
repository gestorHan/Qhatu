import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Comentario from "./comentario"
import TablaEstadisticasComerciante from "./tablaEstadicticasComenciante"

import TiendaModels from "../../models/tienda";
const useStyles = makeStyles((theme) => ({
  root: {
//    maxWidth: 345,
  },
  comment: {
    marginBottom: "10px",
 },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function PanelDetallesTienda(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const comentarios = TiendaModels.comentarios();
  const miTienda = props.tienda;
  const estadisticas = TiendaModels.estadisticasTiendaEjemplo();
  console.log(miTienda);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={miTienda.nombre} />
      <CardMedia
        className={classes.media}
        image={miTienda.imagen}
        title="Paella dish"
      />
      <CardContent>
        <Rating name="read-only" value={miTienda.valoracion} readOnly />
        <Typography variant="body2" color="textSecondary" component="p">
          {miTienda.descripcion}
        </Typography>
        <TablaEstadisticasComerciante estadisticas={estadisticas}/>
      </CardContent>

      <CardActions disableSpacing>
        <Button variant="contained" color="primary">
          Contacto
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {comentarios.map((comentario) => (
              <Comentario contenido={comentario} />
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
