import React, { Component } from 'react';
import Principal from './principal.js';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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

const ariaLabel = { 'aria-label': 'description' };

export default class FriendList extends Component {
  render () {
    return (
      <div id="paginaInicio">
        <div>
          <Principal/>
        </div>
        <div className="segundo">
          <h1 className="h1Inicio">Lista de amigos</h1>
          <ThemeProvider theme={theme}>
            <Box sx={{bgcolor:'neutral'}}>
              <FormControl variant="standard" id="formControl">
                <Input
                  inputProps={ariaLabel, {style: { color: 'black'}}}
                  id="inputSearch"
                  placeholder="Buscar amigo"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button id="buttonList" size="medium" variant="contained" color="neutral" startIcon={<PersonAddIcon/>}>
                <Link to="/addFriend" id="buttonLink">Agregar amigo</Link>
              </Button>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
