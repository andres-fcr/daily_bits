import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Practica tus conocimientos en la categoria que prefieras</h3>
      <div>
        <Link to="/html">
          <img src="./Categorias (1).svg" alt="" />
        </Link>
        <Link to="/css">
          <img src="./Categorias.svg" alt="" />
        </Link>
        <Link to="/javascript">
          <img src="./Frame 2.svg" alt="" />
        </Link>
      </div>
      <div>
        <Link to="">
          <img src="./Navegation.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
