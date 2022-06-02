import { selectDOMelement } from "./helpers/domelements.js";
import { getQuestion, getPlayer, restart } from "./helpers/getLocalData.js";
import { renderPage } from "./gameview.js";

/**
 * @author Juan Ramallo  https://github.com/juanir33
 * @version 1.0
 */

let activePlayer = {};
let mayorPrize = 68500;
let randomQuestion = {};
let users = [];
/**
 * Constante para mostar una alerta  personalizada
 * se usa libreria https://sweetalert2.github.io/
 */
const swalBoot = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    denyButton: "btn btn-outline-warning",
  },
  buttonsStyling: false,
  allowEscapeKey: false,
  allowOutsideClick: false,
});
/**
 * Comienzo del juego
 */
export const start = () => {
  users = getPlayer();
  renderPage();

  activePlayer = users[users.length - 1];

  updateRound();
  selectDOMelement("#player_name").innerHTML = `${activePlayer.name}`;
  selectDOMelement("#player_prize").innerHTML = `0`;
  randomQ();
};
/**
 * Tomamos una pregunta al azar de la caytegoria que toca en la ronda actual de juego.
 */
export const randomQ = () => {
  let localeQuestions = getQuestion();
  let questions = localeQuestions.filter(
    (question) => question.level == activePlayer.round
  );
  randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  let answers = [
    randomQuestion.answer,
    randomQuestion.falseA,
    randomQuestion.falseB,
    randomQuestion.falseC,
  ];
  /**
   * Se ordenan de forma aleatoria las respuestas para que aprezcan en distintos botones cada ves,
   * una ves ordenado, se renderizan las nuevas respuestas.
   */
  answers.sort(() => Math.random() - 0.5);

  selectDOMelement("#image").setAttribute("src", randomQuestion.image);
  selectDOMelement("#category").innerHTML = `${randomQuestion.category}`;
  selectDOMelement("#question").innerHTML = `${randomQuestion.question}`;
  selectDOMelement("#btn_1").innerHTML = answers[0];
  selectDOMelement("#btn_2").innerHTML = answers[1];
  selectDOMelement("#btn_3").innerHTML = answers[2];
  selectDOMelement("#btn_4").innerHTML = answers[3];
};

const updateRound = () => {
  let actualRound = activePlayer.round;
  selectDOMelement("#player_round").innerHTML = `${actualRound}`;
  return actualRound;
};

/**
 * Validacion de la respuesta elegida por el usuario escuchamos el evento 'click' para conocer que respondio el jugador
 * @param {*} event evento de la accion 'click'
 */
export const playerSelect = (event) => {
  let selectBtn = { value: event.target.outerText, id: `#${event.target.id}` };
  console.log(selectBtn.id);
  if (selectBtn.value === randomQuestion.answer) {
    selectDOMelement(selectBtn.id).classList.add("correct");
    setTimeout(() => {
      selectDOMelement(selectBtn.id).classList.remove("correct");
      updatePrize();
      selectDOMelement("#next").style.display = "unset";
      selectDOMelement("#next").disabled = false;
      disableBtn(true);
    }, 3000);
  } else {
    selectDOMelement(selectBtn.id).classList.add("error");
    gameOver();
  }
};
/**
 * Se desactvan los botones de respuestas
 * @param {*} value acepta valor boolean
 */
const disableBtn = (value) => {
  const btnGroup = [
    selectDOMelement("#btn_1"),
    selectDOMelement("#btn_2"),
    selectDOMelement("#btn_3"),
    selectDOMelement("#btn_4"),
  ];
  btnGroup.forEach((item) => {
    item.disabled = value;
  });
};

/**
 * Actualizacion de los premios acumulados, para mostrar en pantalla y finalizar juego si llego al premio mayor
 */
const updatePrize = () => {
  let actualPlayer = selectDOMelement("#player_prize");
  let currentPrize = actualPlayer.outerText;
  let newPrize = Number(currentPrize) + randomQuestion.prize;

  actualPlayer.innerText = newPrize;
  activePlayer.prize = newPrize;
  if (activePlayer.prize === mayorPrize) {
    alert("ganaste");
  }
  setUser();
};

/**
 * Funcion para generar nueva ronda cuando el jugador acepte seguir jugando
 */
export const nextRound = () => {
  selectDOMelement("#next").disabled = true;
  activePlayer.round++;
  disableBtn(false);
  updateRound();
  randomQ();
};

/**
 * Finalizacion del juego cuando se pierde, borra premios y actualiza la base de jugadores, reinicia el mismo
 */
const gameOver = () => {
  activePlayer.prize = 0;
  setUser();

  swalBoot
    .fire({
      title: "Lo sentimos has perdido todo",
      text: `$${activePlayer.prize}`,
      showConfirmButton: true,
      confirmButtonText: "Ok",
    })
    .then((result) => {
      if (result.isConfirmed) {
        restart();
      }
    });
};

/**
 * Funcion para actualizar los premios  que va acumulando el jugador actual en la memoria local de navegador
 */
export const setUser = () => {
  users.forEach((player) => {
    if (player.name === activePlayer.name) {
      player.prize = activePlayer.prize;
      let data = JSON.stringify(users);
      localStorage.setItem("players", data);
    }
  });
};

/**
 * Funcion para permitir al jugador retirarse con lo ganado antes de finalizar juego
 */
export const withdraw = () => {
  swalBoot
    .fire({
      title: "Estas seguro de retirarte",
      text: "No hay vuelta atras!",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Volver a jugar",
      confirmButtonText: "Si, deseo retirarme",

      background: "#defffcff",
      iconColor: "#db5461ff",
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalBoot
          .fire({
            title: "Listo, retiro exitoso!",
            text: `Has ganado $${activePlayer.prize}`,
            icon: "success",
            color: "#db5461ff",
            background: "#defffcff",
          })
          .then((results) => {
            if (results.isConfirmed) {
              restart();
            }
          });
      }
    });
};

/**
 * Redireccion a ranking de jugadores
 */
export const toRanking = () => {
  window.location.assign("ranking.html");
};
