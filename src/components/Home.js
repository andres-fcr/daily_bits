import React from 'react';

const Home = () => {
    return (
       
<Form >

<Img src="./Logo.svg" alt=""/><br/><br/>
    <H3>Iniciar sesion</H3> <br/>
    <a href=""><Img src="./Buttons.svg" alt=""/></a><hr/>

    <Label for="">correo electronico</Label>
    <Input type="text" placeholder="ingrese correo"/><br/>
    <H2><a  href="">¿Se te olvidò tu contraseña?</a></H2>
    <P>¿Aun no tienes una cuenta?<a href="">Inscribirse</a></P>
    
</Form>
    

    );
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
    padding: 50px 30px;
    border-radius: 20px;
`
const H3 = styled.h3`
 margin: 0;
    padding: 0 0 20px;
    text-align: center;
   
    
`
const Label = styled.label`
 margin: 0;
    padding: 0;
   
    display: block;
    
`

const Input = styled.input`
 width: 100%;
    margin-bottom: 30px;
    margin-top:5px;
    border-radius:5px;
    padding:9px;
`
const Img = styled.img`
display:block;
margin:auto;
`
const H2= styled.p`
text-align:center;
`
const P = styled.p`
text-align:center;
`


export default Home;
