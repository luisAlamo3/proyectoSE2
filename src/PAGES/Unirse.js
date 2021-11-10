import React, { Component } from 'react';
import Principal from './principal'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';


const theme = createTheme({
  palette: {
    neutral: {
      main: '#3a3737',
      contrastText: '#fff',
    },
  },
});

export default class Unirse extends Component {
  render () {
    return (
      <div id="paginaInicio">
        <div>
          <Principal/>
        </div>
        <div className="segundo">
          <h2 className="h1Inicio"><AddIcon/>UNIRSE A UN INTERCAMBIO</h2>
          <ThemeProvider theme={theme}>
            <Box sx={{bgcolor:'neutral'}}>
              <FormControl variant="standard" id="formControl">
                <Input
                  id="inputSearch"
                  placeholder="Correo electrónico"
                  startAdornment={
                    <InputAdornment position="start">
                      <VisibilityIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button id="buttonList" size="medium" variant="contained" color="neutral">
                Unirse
              </Button>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
