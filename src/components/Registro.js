import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { userUrl } from '../helpers/UserData';

export default class Registro extends Component {

  constructor() {
    super();
    this.state = {
      form: {
        email: '',
        password: ''
      }
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.envioData()
  }


  envioData = () => {
    axios.post(userUrl, this.state.form)
      .then(response => {
        console.log(response.data)
        Swal.fire({
          icon: 'successs',
          text: 'Te has registardo con éxito',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/"
          }
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Div>
      <Form>
        <form onSubmit={this.handleSubmit}>
          <H2>Formulario de Registro</H2>
          <br /><br />
          <Label >Email</Label>
          <Input
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
          <Label >Contrseña</Label>
          <Input
            required
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={this.handleChange}
          />
          <Button type="submit">Registrarme</Button>
        </form>
      </Form>
      </Div>
    );
  }
}

const Form = styled.div`
 padding-top: 10px;
	font-size: 14px;
	margin-top: 30px;

`

const Div = styled.div`
   height:100%;
	display: block;
  margin:auto;
	align-items: center;
	justify-content: center;
	background-color: black;
  color:white;
  width:200px;
  padding:100px;
border-radius:20px;
`

const Label = styled.label`
 margin: auto;
  padding: 0;
  display: block;
  text-align:center;
  margin-top:10px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 5px;
  border-radius: 5px;
  padding: 9px;
`;

const H2 = styled.h2`
  text-align: center;
`;
const Button = styled.button`
  background-color: #6B47DC;
  margin: auto;
  display: block;
  margin-top: 50px;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  width:200px;
`

