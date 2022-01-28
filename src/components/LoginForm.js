import React from "react";

const LoginForm = () => {
  return (
    <div>
      <h3 className="text-center"> Agregar Tareas </h3>

      <form
        className="form-group"
        // onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control "
          placeholder="Url"
          name="url"
          // value={url} onChange={handleInputChange}
        />

        <input
          type="email"
          className="form-control mt-2"
          name="nombre"
          autoComplete="off"
          placeholder="Nombre Tarea"
          // value={nombre}
          // onChange={handleInputChange}
        />

        <textarea
          name="description"
          className="form-control mt-2"
          autoComplete="off"
          // value={description}
          // onChange={handleInputChange}
        ></textarea>

        <div className="d-grid gap-2 mx-auto mt-2">
          <button
            type="submit"
            className="btn btn-dark"
            // onClick={() => postData(tarea)}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
