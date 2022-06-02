import { selectDOMelement } from "./helpers/domelements.js";
import { getQuestion, getPlayer, restart } from "./helpers/getLocalData.js";
import {renderPage} from "./gameview.js";
import {setQuestions, setPlayers, playerInstance} from './db/database.js'

let activePlayer = {};
let mayorPrize = 68500;
let randomQuestion = {};
let users = [];
const swalBoot = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    denyButton: "btn btn-outline-warning"
  },
  buttonsStyling: false,
  allowEscapeKey: false,
  allowOutsideClick: false,
});


export const simpleLoginUser = () =>{
   setPlayers();
   setQuestions();
  let players = getPlayer();
  swalBoot.fire({
    title: "Bienvenido a Preguntados 3.0",
    text: "Para comenzar ingresa tu nombre completo",
    showConfirmButton: true,
    confirmButtonText: "Empezar",
    showDenyButton: true,
    denyButtonText: 'Ranking',
    
    input: "text",
    
    inputPlaceholder: "Nombre y Apellido",
    color: "#db5461ff",
    background: "#defffcff" ,
    inputValidator: (value) => {
      if (!value) {
        return 'Introduce tu nombre!'
      }
    }
    
  }).then((result) => {
    let playerName = Swal.getInput().value.toUpperCase();

    if (result.isConfirmed) {
      let newPlayer = playerInstance(playerName);
      players.push(newPlayer);
      let data = JSON.stringify(players);
      localStorage.setItem("players", data);
      
      start();
    }else if(result.isDenied){
      toRanking();
    }
  });
}



export const start = () => {
  users = getPlayer();
  renderPage();

  activePlayer = users[users.length - 1];
  console.log(activePlayer);
  updateRound();
  selectDOMelement("#player_name").innerHTML = `${activePlayer.name}`;
  selectDOMelement("#player_prize").innerHTML = `0`;
  randomQ();
};

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
}

export const nextRound = () => {
  selectDOMelement("#next").disabled = true;
  activePlayer.round++;
  disableBtn(false);
  updateRound();
  randomQ();
};

const gameOver = () => {
  activePlayer.prize = 0;
  setUser();
  
  swalBoot.fire({
    title: "Lo sentimos has perdido todo",
    text: `$${activePlayer.prize}`,
    showConfirmButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      restart();
    }
  });

}

export const setUser = ()=>{
  
    users.forEach((player) => {
      if (player.name === activePlayer.name) {
        player.prize = activePlayer.prize;
        let  data = JSON.stringify(users);
        localStorage.setItem("players", data);
      }
  })
  }

export const  withdraw = ()=>{
    swalBoot
      .fire({
        title: "Estas seguro de retirarte",
        text: "No hay vuelta atras!",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "Volver a jugar",
        confirmButtonText: "Si, deseo retirarme",
        
        background: "#defffcff" ,
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
              background: "#defffcff" ,
            })
            .then((results) => {
              if (results.isConfirmed) {
                restart();
              }
            });
        }
      });
  }

  export const toRanking = () => {
    window.location.assign('ranking.html');
   
  
  }

  

