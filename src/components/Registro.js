import axios from 'axios';
import React, { Component } from 'react';
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
    this.state({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form);
  }

  handleSubmit = (e) => {
    e.preventDefault()

  }


  envioData = () => {
    axios.post(userUrl, this.state.form)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.form.email}
            onChange={this.handleChangehandleChange}
          />

          <input
            type="pasword"
            name="password"
            placeholder="Contraseña"
            value={this.state.form.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
