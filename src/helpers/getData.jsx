const url = "https://preguntas-programacion.herokuapp.com/";

export const getData = async (endpoint) => {
  const resp = await fetch(url + endpoint);
  const data = resp.json();
  return data;
};
