import { renderPage } from "./gameview.js";
import {setPlayers, setQuestion} from "./db/database.js"
import { start } from "./gamelogic.js";
renderPage();
setQuestion();
setPlayers();
start()