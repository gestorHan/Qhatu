import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import FormularioEditarProducto from "./components/jesus/formularioEditarProducto"
import FormularioNuevoProducto from "./components/jesus/formularioNuevoProducto"

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <FormularioNuevoProducto/>
      </Box>
    </Container>
  );
}
