import React, { Component } from 'react';
import Regalo from '../IMG/regalo2.png';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    blue: {
      main: '#017BAB',
      contrastText: '#fff',
    },
  },
});

export default class Logup extends Component{

  constructor () {
    super()
    this.state= {
      inputName:'',
      inputAlias:'',
      inputEmail:'',
      inputPass:'',
      inputPassconf:''
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <div className="col" id="left">
          <img src={Regalo} alt="Foto de un regalo" />
        </div>
        <div className="col" id="right">
          <h2 className="formh2reg">Crea tu cuenta</h2>
          <FormControl variant="standard" id="formControl" onSubmit={this.handleSubmit}>
            <p className="formp2">
              <label htmlFor="name">Nombre</label>
            </p>
            <p className="inputP">
              <Input
                className="control"
                id="name"
                name='userName'
                placeholder="Introduce tu nombre"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleIcon id="icon"/>
                  </InputAdornment>
                }
                alt="Campo para ingresar nombre"
                value={this.state.inputName}
                onChange={e => this.setState({inputName: e.target.value})}/>
            </p>
            <p className="formp2">
              <label htmlFor="alias">Alias</label>
            </p>
            <p className="inputP">
              <Input
                className="control"
                id="alias"
                name='userAlias'
                placeholder="Introduce tu alias"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon id="icon"/>
                  </InputAdornment>
                }
                alt="Campo para ingresar alias"
                value={this.state.inputAlias}
                onChange={e => this.setState({inputAlias: e.target.value})}/>
            </p>
            <p className="formp2">
              <label htmlFor="email">Email</label>
            </p>
            <p className="inputP">
              <Input
                className="control"
                id="email"
                name='userEmail'
                placeholder="Introduce tu email"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon id="icon"/>
                  </InputAdornment>
                }
                alt="Campo para ingresar email"
                value={this.state.inputEmail}
                onChange={e => this.setState({inputEmail: e.target.value})}/>
            </p>
            <p className="formp2">
              <label htmlFor="pass">Introduce tu contraseña</label>
            </p>
            <p className="inputP">
              <Input
                className="control"
                id="pass"
                name='userPassword'
                type="password"
                placeholder="Introduce tu contraseña"
                startAdornment={
                  <InputAdornment position='start'>
                    <VisibilityIcon id="icon"/>
                  </InputAdornment>
                }
                alt="Campo para ingresar email"
                value={this.state.inputPass}
                onChange={e => this.setState({inputPass: e.target.value})}/>
            </p>
            <p className="formp2">
              <label htmlFor="passconf">Confirma tu contraseña</label>
            </p>
            <p className="inputP">
              <Input
                className="control"
                id="passconf"
                name='userPassword'
                type="password"
                placeholder="Repite tu contraseña"
                startAdornment={
                  <InputAdornment position='start'>
                    <VisibilityIcon id="icon"/>
                  </InputAdornment>
                }
                alt="Campo para repetir contraseña"
                value={this.state.inputPassconf}
                onChange={e => this.setState({inputPassconf: e.target.value})}/>
            </p>
            <p>
              <ThemeProvider theme={theme}>
                <Button onClick={this.handleClick} 
                  id="button"
                  size="medium"
                  variant="contained"
                  color="blue">
                  Crear cuenta
                </Button>
              </ThemeProvider>
            </p>
            <p className="footer">
              <h5>¿Ya tienes una cuenta?</h5>
                <Link to="/login">Inicia sesión</Link>
            </p>
          </FormControl>
        </div>
      </div>
    );
  }
}
