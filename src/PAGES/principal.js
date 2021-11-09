import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import '../CSS/principal.css'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#3a3737',
      contrastText: '#fff',
    },
  },
});

export default class Principal extends Component {

  render() {
    return(
          <Box sx={{ display: 'flex',
                    alignItems: 'flex-start',
                    padding:'2em',
                    background:"#2F2E2D"}}>
            <FormControl variant="standard">
              <Input
                id="input-with-icon-adornment"
                placeholder="Buscar"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon id="icon"/>
                  </InputAdornment>
                }
              />
            </FormControl>

          <p className="navLink">
            
              <Link className="navLink" to="/inicio">Inicio</Link>|
              <Link className="navLink" to="/#">Cuenta</Link>|
              <Link className="navLink" to="/friendList">Amigos</Link>|
              <Link className="navLink" to="/#">Ayuda</Link>
            
          </p>
          <ThemeProvider theme={theme}>
            <Button id="navButton" size="small" variant="contained" color="neutral" startIcon={<CardGiftcardIcon/>}>
              <Link to="/Regalo" id="buttonLink">Tus regalos</Link>
            </Button>
          </ThemeProvider>
          </Box>
    );
  }
}
