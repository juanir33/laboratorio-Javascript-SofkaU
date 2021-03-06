import { create, selectDOMelement } from "./helpers/domelements.js";
import { getPlayer } from "./helpers/getLocalData.js";
/**
 *  @author Juan Ramallo  https://github.com/juanir33
 * @version 1.0
 *
 * Renderizado del ranking de jugadores, se crea tabla por medio de metodos del DOM para mostrar el listado
 * ordenados por el premio mayotr a menor
 */
const render = () => {
  const container = selectDOMelement(".ranking_container");
  const containerTitle = create("h2");
  containerTitle.classList.add("text-center");
  containerTitle.innerText = "Ranking de Jugadores";
  const tableContainer = create("div");
  tableContainer.classList.add("game_container", "table-responsive");
  const rankingTable = create("table");
  rankingTable.classList.add("table", "table-striped");

  const tableHeader = create("thead");

  const tableHeaderRow = create("tr");

  const tableHeaderColOne = create("th");
  tableHeaderColOne.innerText = "Nombre";
  const tableHeaderColTwo = create("th");
  tableHeaderColTwo.innerText = "Premio";

  tableHeaderRow.append(tableHeaderColOne, tableHeaderColTwo);
  tableHeader.appendChild(tableHeaderRow);

  const tableBody = create("tbody");
  tableBody.classList.add("body_table");

  rankingTable.append(tableHeader, tableBody);
  tableContainer.append(rankingTable);
  container.append(containerTitle, tableContainer);
};
render();

/**
 * Obtenemos lista de jugadores, se ordena mayor a menor segun premio, y se muestra en el body de la tabla
 * creada en el metodo render.
 */
const topPlay = () => {
  let top = getPlayer();
  let sorted = top.sort((a, b) => {
    if (a.prize > b.prize) {
      return -1;
    } else if (a.prize < b.prize) {
      return 1;
    } else {
      return 0;
    }
  });
  let bodyTable = selectDOMelement(".body_table");
  sorted.forEach((player) => {
    let row = create("tr");
    let colName = create("td");
    colName.innerText = player.name;
    let colPrize = create("td");
    colPrize.innerText = player.prize;
    row.append(colName, colPrize);

    bodyTable.append(row);
  });
};

topPlay();
