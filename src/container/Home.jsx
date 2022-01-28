import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
     

       <div>
       <Form> 
       <H3>Practica tus conocimientos en la categoria que prefieras</H3>

    <Div>
      <Link to="/html">
        <Img src="./Categorias (1).svg" alt="" />
      </Link>
      <Link to="/css">
        <Img src="./Categorias.svg" alt="" />
      </Link>
      <Link to="/javascript">
        <Img src="./Frame 2.svg" alt="" />
      </Link>
    </Div>
    <div>
    
    </div>
    </Form> 
  </div>
  );
};

const Form = styled.div`
  background-color:orange;
  width:300px;
  display:block;
  margin:auto;
  padding:30px;
`



const Div  = styled.div`
   display:block;
  margin:auto;
`

const Img = styled.img`
  display:inline-block;
  justify-content:space-between;
`



const H3 = styled.h3`
  text-align:center;
`


export default Home;
