/**
 * Constante para obtener elementos del DOM
 * @param {*} query El elemento que deseamos con su query selector en tipo string ej. '.nombre-clase'
 * @returns devuelve metodo de seleccion de elemento Html
 */
export const selectDOMelement = (query) => {
  return document.querySelector(query);
};
/**
 * Constante para crear nuevo elemento del DOM
 * @param {*} tagName Nombre de la etiqueta html
 * @returns devuelve el metodo de creacion de elemento
 */
export const create = (tagName) => {
  return document.createElement(tagName);
};
