const url = "https://preguntas-programacion.herokuapp.com/";

export const getData = async (endpoint) => {
  const urlFinal = url + endpoint;
  const resp = await fetch(urlFinal);
  const data = resp.json();
  return data;
};
