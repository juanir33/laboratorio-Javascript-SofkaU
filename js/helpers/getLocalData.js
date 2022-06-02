/***
 *  @author Juan Ramallo  https://github.com/juanir33
 * @version 1.0
 * Funcion con la cual obtenemos jugadores registrados en localStorage
 * @returns nos devuelve el array de jugadores
 */

export const getPlayer = () => {
  let dataLs = localStorage.getItem("players");
  return JSON.parse(dataLs);
};
/**
 * Funcion con la cual obtenemos preguntas registradas en localStorage
 * @returns nos devuelve el array de preguntas
 */

export const getQuestion = () => {
  let dataLs = localStorage.getItem("questions");
  return JSON.parse(dataLs);
};
/**
 * Funcion para reinicar el juego
 */
export const restart = () => {
  window.location.reload();
};
