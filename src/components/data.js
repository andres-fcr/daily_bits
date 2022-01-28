import React from 'react';
import styled from 'styled-components';


const Registro = () => {
  
  return  <Form>
  <H2>Formulario de Registro</H2> <br/><br/>
<Label >Nombre y Apellidos</Label>
<Input type="text" required placeholder="Ingresar Nombre"/>
<Label >Email</Label>
<Input type="email" required placeholder="Ingresar Telefono"/>
<Label >Telefono</Label>
<Input type="text" required placeholder="Ingresar Apellido" />
<Button>Registrar</Button>

  </Form>;
};

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
  background-color: red;
  margin: auto;
  display: block;
  margin-top: 50px;
  padding: 10px;
  border-radius: 5px;
`
export default Registro;