import React, { Component } from 'react';
import Principal from './principal'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#3a3737',
      contrastText: '#fff',
    },
  },
});

const ariaLabel = { 'aria-label': 'description' };

export default class Regalo extends Component {
  render () {
    return (
      <div id="paginaInicio">
        <div>
          <Principal/>
        </div>
        <div className="segundo">
          <h2 className="h1Inicio"><RedeemIcon fontsize="large"/>TUS REGALOS</h2>
          <ThemeProvider theme={theme}>
            <Box sx={{bgcolor:'neutral'}}>
              <FormControl variant="standard" id="formControl">
                <Input
                  inputProps={ariaLabel, {style: { color: 'black'}}}
                  id="inputSearch"
                  placeholder="Buscar regalo"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
