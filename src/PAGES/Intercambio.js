import React, { Component } from 'react';
import Principal from './principal'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RedeemIcon from '@mui/icons-material/Redeem';
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#3a3737',
      contrastText: '#fff',
    },
  },
});

export default class Intercambio extends Component {
  render () {
    return (
      <div id="paginaInicio">
        <div>
          <Principal/>
        </div>
        <div className="segundo">
          <h1 className="h1Inicio">INTERCAMBIO</h1>
          <Box id="boxIntercambio" sx={{ display: 'flex', alignItems: 'flex-start'}}>
            <RedeemIcon className="svg_icons"/>
            <Box sx={{ diplay: 'inline-block', alignItems: 'flex-start'}}>
              <h5 className="h5InterSup">Tematica:</h5>
              <h5 className="h5Inter">Clave:</h5>
              <h5 className="h5Inter">Fecha:</h5>
            </Box>
          </Box>
          <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
              <h4 className="inter">Participantes:</h4>
              <Button id="buttonInter" size="small" variant="contained" color="neutral" startIcon={<PersonAddIcon/>}>
                <Link to="/addFriend" id="buttonLink">Añadir participante</Link>
              </Button>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
