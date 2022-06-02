import { selectDOMelement } from "./helpers/domelements.js";
import { getQuestion, getPlayer} from "./helpers/getLocalData.js";

let activeP = {};



export const start = () =>{
  let users = getPlayer();
  console.log(users);

  activeP = users[users.length - 1];
  console.log(activeP);
  updateRound();
  selectDOMelement("#player_name").innerHTML = `${activeP.name}`;
  selectDOMelement("#player_prize").innerHTML = `0`;
  randomQ();
}


export const  randomQ = () =>{
    let localeQuestions = getQuestion();
    let questions = localeQuestions.filter((question) => question.level == activeP.round);
    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    
    let answers = [randomQuestion.answer, randomQuestion.falseA, randomQuestion.falseB, randomQuestion.falseC];
    answers.sort(() => Math.random() - 0.5);
  
    selectDOMelement('#image').setAttribute('src', randomQuestion.image)
    selectDOMelement("#category").innerHTML = `${randomQuestion.category}`;
    selectDOMelement("#question").innerHTML = `${randomQuestion.question}`;
    selectDOMelement("#btn_1").innerHTML = answers[0];
    selectDOMelement("#btn_2").innerHTML = answers[1];
    selectDOMelement("#btn_3").innerHTML = answers[2];
    selectDOMelement("#btn_4").innerHTML = answers[3];
  }

  const updateRound = () =>{
    let actualRound =  activeP.round;
    selectDOMelement("#player_round").innerHTML = `${actualRound}`;
    return actualRound;
  }
  