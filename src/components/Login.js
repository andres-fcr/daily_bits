import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Component } from 'react';
import axios from "axios";
import { userUrl } from "../helpers/UserData";
import Swal from 'sweetalert2'
export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      form: {
        email: 'andres@gmail.com',
        password: '123'
      },
      peticion: {}
    }
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form);
  }

  iniciarSesion = () => {
    axios.get(userUrl, { params: { email: this.state.form.email, password: this.state.form.password } })
      .then(response => {
        console.log(response.data.length); //////=> Arroja 1 
        if (response.data.length > 0) { ///////////////=> pero aca es undefined
          this.setState({peticion: response})
          Swal.fire({
            icon: 'error',
            
            text: 'Complete los Campos',
          })
        } else {
          Swal.fire('Usuario o Contraseña incorrecta')     }
      })
      .catch(error => {
        console.log(error);
      })
    // this.alerta()
  }

  // alerta = () => {
  //   if (this.state.peticion.length < 1) {
  //     alert("inicio sesion")
  //   } else {
  //     alert("El usuario o contraseña no son correctos")
  //   }
  //   console.log(this.state.peticion);
  // }


  render() {
    return (
      <Form >
        <Img src="./Logo.svg" alt="" />
        <br />
        <br />
        <H3>Iniciar sesion</H3> <br />
        <Label for="">Correo Electronico</Label>
        <Input
          type="email"
          placeholder="ingrese correo"
          name="email"
          onChange={this.handleChange}
        />
        <hr />
        <Label for="">Contraseña</Label>
        <Input
          type="password"
          placeholder="ingrese contraseña"
          name="password"
          onChange={this.handleChange}
        />
        <br />
        <Button type="submit" onClick={() => this.iniciarSesion()}>Ingresar</Button>
        <H2>
        </H2>
        <P>
          ¿Aun no tienes una cuenta?<Link to="/registro">Inscribirse</Link>
        </P>
      </Form>
    );
  }
}

const Button = styled.button`
  margin-top: 2rem;
  background: #6b47dc;
  border-radius: 16px;
  padding: 16px;
  width: 360px;
  height: 42px;
  border: none;
  color: white;
`

const Form = styled.div`
  background-color: black;
  width: 400px;
  height: 625px;
  color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 50px 30px;
  border-radius: 20px;
`;
const H3 = styled.h3`
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
`;
const Label = styled.label`
  margin: 0;
  padding: 0;

  display: block;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 5px;
  border-radius: 5px;
  padding: 9px;
`;
const Img = styled.img`
  display: block;
  margin: auto;
`;
const H2 = styled.p`
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;


