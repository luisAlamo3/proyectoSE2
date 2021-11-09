import React, { Component } from 'react'
import '../CSS/Login.css'
import Regalo from '../IMG/regalo1.png'
import EmailIcon from '@mui/icons-material/Email';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export default class Login extends Component{

  constructor () {
    super()
    this.state= {
      inputEmail:'',
      inputPass:''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <div className="col" id="left">
          <img id="imglogin" src={Regalo} alt="Foto de un regalo" />
        </div>
        <div className="col" id="right">
          <h2 className="formh2">Bienvenido</h2>
          <FormControl variant="standard" id="formControl" onSubmit={this.handleSubmit}>
            <p className="formp1">
              <label className="label" htmlFor="email">Email</label>
            </p>
            <p className="inputP">
              <Input
                className="control"
                id="email"
                name='userEmail'
                placeholder="Introduce tu email"
                startAdornment={
                  <InputAdornment className="control" position="start">
                    <EmailIcon id="icon"/>
                  </InputAdornment>
                }
                alt="Campo para ingresar email"
                value={this.state.inputEmail}
                onChange={e => this.setState({inputEmail: e.target.value})}/>
            </p>

            <p className="formp1">
              <label htmlFor="pass">Contraseña</label>
              <Link className="formLink" to="/newpass">¿Ha olvidado su contraseña?</Link>
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
            <p className="formButton">
                <Button onClick={this.handleClick} 
                  id="button"
                  size="medium"
                  variant="contained">
                  <Link to="/inicio">Iniciar sesión</Link>
                </Button>
            </p>
            <p className="footer">
              <h5>¿Todavía no tienes una cuenta?</h5>
              
                <Link to="/logup">Crea una ahora</Link>
              
            </p>
          </FormControl>
        </div>
      </div>
    );
  }
}
