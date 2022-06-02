import { setPlayers, setQuestions, playerInstance } from "./db/database.js";
import { toRanking, start } from "./gamelogic.js";
import { create, selectDOMelement } from "./helpers/domelements.js";
import { getPlayer } from "./helpers/getLocalData.js";

const container = selectDOMelement(".container");
export const renderLogin = () => {
  container.classList.add("container_login", "position-relative");

  const cardContainer = create("div");
  cardContainer.classList.add(
    "position-absolute",
    "top-50",
    "start-50",
    "translate-middle",
    "container_card"
  );

  const loginCard = create("card");
  loginCard.classList.add("card");

  const loginCardHeader = create("div");
  loginCardHeader.classList.add("card-header");

  const loginCardBody = create("div");
  loginCardBody.classList.add("card-body");

  const loginCardFooter = create("div");
  loginCardFooter.classList.add(
    "card-footer",
    "d-flex",
    "justify-content-evenly"
  );

  const textHeader = create("h2");
  textHeader.classList.add("card-title", "text-center");
  textHeader.innerText = "Bienvenido a Preguntados 3.0";

  const bodyText = create("h6");
  bodyText.classList.add("card-text", "text-center", "mt-2");
  bodyText.innerText = "Para comenzar ingresa tu nombre completo";

  const bodyInput = create("input");
  bodyInput.classList.add("form-control", "mt-4");
  bodyInput.placeholder = "Nombre y Apellido";
  bodyInput.type = "text";
  bodyInput.required = true;
  bodyInput.pattern = "AZ-az";

  const footerBtnLog = create("btn");
  footerBtnLog.classList.add("btn", "btn-outline-success");
  footerBtnLog.innerText = "Entrar";
  footerBtnLog.addEventListener("click", toGame);

  const footerBtnRank = create("btn");
  footerBtnRank.classList.add("btn", "btn-outline-warning", "ms-5");
  footerBtnRank.innerText = "Ranking";
  footerBtnRank.addEventListener("click", toRanking);

  loginCardFooter.append(footerBtnLog, footerBtnRank);
  loginCardBody.append(bodyText, bodyInput);
  loginCardHeader.append(textHeader);
  loginCard.append(loginCardHeader, loginCardBody, loginCardFooter);
  cardContainer.append(loginCard);
  container.append(cardContainer);
};

const toGame = (event) => {
  event.preventDefault();
  setPlayers();
  setQuestions();
  let players = getPlayer();
  let field = selectDOMelement(".form-control");
  let child = selectDOMelement(".container_card");

  if (field.value) {
    let newPlayer = playerInstance(field.value);
    players.push(newPlayer);
    let data = JSON.stringify(players);
    localStorage.setItem("players", data);

    container.removeChild(child);

    start();
  } else {
    alert("Por favor completa tu nombre");
  }
};
