import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import styled from "styled-components";

const Preguntas = () => {
  const { endpoint } = useParams();
  const [data, setData] = useState([]);
  const [pregunta, setPregunta] = useState({
    numeroPregunta: 0,
    preguntas: {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      correct: "",
    },
    puntuacion: 0,
    preguntaSeleccionada: "",
  });

  const { numeroPregunta, preguntas, puntuacion, preguntaSeleccionada } = pregunta;

  const traerDatos = async () => {
    const datos = await getData(endpoint);
    setData(datos);
  };

  const traerPregunta = () => {
    const posicionPregunta = data[pregunta.numeroPregunta];
    setPregunta({
      ...pregunta,
      preguntas: {
        question: posicionPregunta.question,
        a: posicionPregunta.a,
        b: posicionPregunta.b,
        c: posicionPregunta.c,
        d: posicionPregunta.d,
        correct: posicionPregunta.correct,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(pregunta);
  useEffect(() => {
    traerDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form>
      <img src="./caracters.svg" alt=""></img>
      <P>¿?</P> <br />
      <br />
      <br />
      <label htmlFor=""></label>
      <input type="radio" value="" />
      <br />
      <br />
      <br />
      <br />
      <label htmlFor=""></label>
      <input type="radio" value="" />
      <br />
      <br />
      <br />
      <br />
      <label htmlFor=""></label>
      <input type="radio" value="" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <label htmlFor=""></label>
      <input type="radio" value="" />
      <a href="">
        <img src="./Buttoncomprobar.svg" alt="" />
      </a>
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
`;
const P = styled.p`
  float: right;
`;

export default Preguntas;
