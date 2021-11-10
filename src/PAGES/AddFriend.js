import React, { Component } from 'react';
import Principal from './principal'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';


const theme = createTheme({
  palette: {
    neutral: {
      main: '#3a3737',
      contrastText: '#fff',
    },
  },
});

export default class AddFriend extends Component {
  render () {
    return (
      <div id="paginaInicio">
        <div>
          <Principal/>
        </div>
        <div className="segundo">
          <h2 className="h1Inicio"><PersonAddIcon fontsize="large"/>AGREGAR AMIGO</h2>
          <ThemeProvider theme={theme}>
            <Box>
              <FormControl variant="standard" id="formControl">
                <Input
                  id="inputSearch"
                  placeholder="Correo electrónico"
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button id="buttonList" size="medium" variant="contained" color="neutral" startIcon={<SendIcon/>}>
                Enviar solicitud
              </Button>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
