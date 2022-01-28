/* eslint-disable eqeqeq */
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
    respuestaSeleccionada: "",
  });

  const { numeroPregunta, preguntas, puntuacion, respuestaSeleccionada } = pregunta;

  const traerDatos = async () => {
    const datos = await getData(endpoint);
    setData(datos);
  };

  const posicionPregunta = data[pregunta.numeroPregunta];
  const traerPregunta = () => {
    if (posicionPregunta === undefined) {
      console.log("espera");
    } else {
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
    }
  };

  const handleChange = (e) => {
    setPregunta({
      ...pregunta,
      respuestaSeleccionada: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (respuestaSeleccionada === preguntas.correct) {
      setPregunta({
        ...pregunta,
        puntuacion: puntuacion + 1,
      });
    }
    e.target.reset();
  };

  const subirPosicion = () => {
    setPregunta({
      ...pregunta,
      numeroPregunta: numeroPregunta + 1,
    });
  };
  useEffect(() => {
    traerDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    traerPregunta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posicionPregunta]);

  console.log(preguntas.correct);
  return (
    <Form onSubmit={handleSubmit}>
      <img src="./caracters.svg" alt=""></img>
      <P>{preguntas.question}</P> <br />
      <br />
      <br />
      <label htmlFor="">{preguntas.a}</label>
      <input type="radio" value={preguntas.a} name="preguntas" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="">{preguntas.b}</label>
      <input type="radio" value={preguntas.b} name="preguntas" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="">{preguntas.c}</label>
      <input type="radio" value={preguntas.c} name="preguntas" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="">{preguntas.d}</label>
      <input type="radio" value={preguntas.d} name="preguntas" onChange={handleChange} />
      <Button type="submit" onClick={() => subirPosicion()}>
        Comprobar
      </Button>
      <br />
      <br />
      <label htmlFor="">Puntuación</label>
      <input type="text" placeholder={puntuacion} />
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

const Button = styled.button`
  margin-top: 2rem;
  background: #6b47dc;
  border-radius: 16px;
  padding: 16px;
  width: 360px;
  height: 42px;
  border: none;
  color: white;
`;
export default Preguntas;
