import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return  <Form>

<p>Perfil</p>

<Section>
  
    <img src="./Ellipse 3.svg" alt=""/>
    <p>Francisco Javier</p>
    <h5>Frncisco@gmail.com</h5>
    <a href="http://">cerrar sesiòn</a>
</Section>
<Div>
    <Link href=""><img src="./Component 1.svg" alt=""/></a>
    <Link href=""><img src="./Component 1 (2).svg" alt=""/></a>
    <Link href=""><img src="./Component 2.svg" alt=""/></a>
</Div>
</Form>;

};

const Form = styled.div`
    background-color: black;
    width: 450px;
    color: white;
    padding-left:10px;
    padding-top:9px;
    margin:auto;


`

const Section = styled.div`
    text-align:center;
    color:white;
    padding: 120px;
    margin-top:-60px;

`

const Div = styled.div`
  display:flex;
  justify-content:space-evenly;
  background-color:#232E35;
  margin-right: 8px;

`



export default Profile;
