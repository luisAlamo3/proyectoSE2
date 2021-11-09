import React, { Component } from 'react';
import Regalo from '../IMG/regalo1.png'
import NavBar from './principal'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#3a3737',
      contrastText: '#fff',
    },
  },
});

export default class Inicio extends Component {
  render () {
    return (
      <div id="paginaInicio">
        <div>
          <NavBar/>
        </div>
        <div className="segundo">
          <h1 className="h1Inicio">¡CREA INTERCAMBIOS Y COMPARTELOS CON TUS AMIGOS!</h1>
          <img id="imgInicio" src={Regalo} className="login-regalo" alt="Foto de un regalo" />
          <img src={Regalo} className="login-regalo" alt="Foto de un regalo" />
          <img src={Regalo} className="login-regalo" alt="Foto de un regalo" />
          <Stack id="stack" spacing={6} direction="row">
            <ThemeProvider theme={theme}>
              <Button id="crearButton" size="medium" variant="contained" color="neutral">
                <Link to="/intercambio" id="buttonLink">¡Crear intercambio!</Link>
              </Button>
              <Button id="crearButton" size="medium" variant="contained" color="neutral">
                <Link to="/unirse" id="buttonLink">¡Únete a un intercambio!</Link>
              </Button>
            </ThemeProvider>
          </Stack>
        </div>
      </div>
      
    );
  }
}
