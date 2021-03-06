import { create, selectDOMelement } from "./helpers/domelements.js";
import { nextRound, playerSelect, toRanking, withdraw } from "./gamelogic.js";

const container = selectDOMelement(".container");

/**
 * @author Juan Ramallo
 * @version 1.0
 *
 * Funcion para renderizar elementos del DOM, para el juego,
 * se crean los componentes, se agregan clases, informacion a mostrar, y metodos.
 */
export const renderPage = () => {
  /**
   * Crea contenedor general del juego
   */
  const gameContainer = create("div");
  gameContainer.classList.add(
    "game_container",
    "d-flex",
    "flex-column",
    "justify-content-between",
    "align-items-center"
  );

  /**
   * Contenedor para mostrar informacion sobre el jugador actual
   */
  const playerContainer = create("div");
  playerContainer.classList.add(
    "game_player",
    "d-flex",
    "justify-content-between",
    "w-100"
  );

  const playerName = create("h6");
  playerName.setAttribute("id", "player_name");
  playerName.innerHTML = "juan";

  const playerPrize = create("h5");
  playerPrize.setAttribute("id", "player_prize");
  playerPrize.innerHTML = "prize";

  const playerRound = create("h6");
  playerRound.setAttribute("id", "player_round");
  playerRound.innerHTML = "round";
  /**
   * Contenedor tipo card para renderizar las preguntas
   */
  const gameQuestions = create("div");
  gameQuestions.classList.add("game_question");

  const questionsCard = create("div");
  questionsCard.classList.add("card");

  const questionsCardImg = create("img");
  questionsCardImg.src = "";
  questionsCardImg.alt = "alt";
  questionsCardImg.setAttribute("id", "image");
  questionsCardImg.classList.add("card-img-top");

  const questionsCardBody = create("div");
  questionsCardBody.classList.add("card-body");

  const cardBodyTitle = create("h4");
  cardBodyTitle.setAttribute("id", "category");
  cardBodyTitle.innerText = "hola";

  const cardBodyQuestion = create("p");
  cardBodyQuestion.setAttribute("id", "question");
  cardBodyQuestion.classList.add("card-text");
  cardBodyQuestion.innerHTML = "hola";
  /**
   * Contenedor de los botones de respuesta para el juego
   */
  const gameAnswers = create("div");
  gameAnswers.classList.add("game_answer", "d-flex", "flex-wrap");

  const answerButtonOne = create("button");
  answerButtonOne.setAttribute("id", "btn_1");
  answerButtonOne.addEventListener("click", playerSelect);
  answerButtonOne.classList.add("btn", "btn-primary");

  const answerButtonTwo = create("button");
  answerButtonTwo.setAttribute("id", "btn_2");
  answerButtonTwo.addEventListener("click", playerSelect);
  answerButtonTwo.classList.add("btn", "btn-primary");

  const answerButtonTree = create("button");
  answerButtonTree.setAttribute("id", "btn_3");
  answerButtonTree.addEventListener("click", playerSelect);
  answerButtonTree.classList.add("btn", "btn-primary");

  const answerButtonFour = create("button");
  answerButtonFour.setAttribute("id", "btn_4");
  answerButtonFour.addEventListener("click", playerSelect);
  answerButtonFour.classList.add("btn", "btn-primary");
  /**
   * Contenedor de botones para seguir jugando, retirarse, o visualizar el ranking de jugadores
   */
  const nextRoundContainer = create("div");
  nextRoundContainer.classList.add("m-2");

  const nextRoundBtn = create("button");
  nextRoundBtn.setAttribute("id", "next");
  nextRoundBtn.addEventListener("click", nextRound);
  nextRoundBtn.classList.add("btn", "btn-outline-success", "m-1");
  nextRoundBtn.innerText = "Siguiente pregunta";

  const withdrawBtn = create("button");
  withdrawBtn.addEventListener("click", withdraw);
  withdrawBtn.classList.add("btn", "btn-outline-danger", "m-1");
  withdrawBtn.innerText = "Retirarse";

  const rankingBtn = create("button");
  rankingBtn.addEventListener("click", toRanking);
  rankingBtn.classList.add("btn", "btn-outline-warning", "m-1");
  rankingBtn.innerText = "Ranking";

  nextRoundContainer.append(nextRoundBtn, withdrawBtn, rankingBtn);
  gameAnswers.append(
    answerButtonOne,
    answerButtonTwo,
    answerButtonTree,
    answerButtonFour
  );
  questionsCardBody.append(cardBodyTitle, cardBodyQuestion);
  questionsCard.append(questionsCardImg, questionsCardBody);
  gameQuestions.append(questionsCard);
  playerContainer.append(playerName, playerRound, playerPrize);
  gameContainer.append(
    playerContainer,
    gameQuestions,
    gameAnswers,
    nextRoundContainer
  );
  container.append(gameContainer);
};
