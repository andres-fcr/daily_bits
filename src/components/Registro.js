import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';
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
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
        </Form>
      </div>
    );
  }
}

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
  padding: 50px 50px;
  border-radius: 20px;

`

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

const H2 = styled.h2`
  text-align: center;
`;
const Button = styled.button`
  background-color: tomato;
  margin: auto;
  display: block;
  margin-top: 50px;
  padding: 10px;
  border-radius: 5px;
`

