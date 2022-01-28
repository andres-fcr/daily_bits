import React, { useState } from "react";

const Preguntas = () => {
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
  return <div></div>;
};

export default Preguntas;
