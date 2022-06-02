export  class Question {
    constructor(
      level,
      category,
      question,
      answer,
      falseA,
      falseB,
      falseC,
      prize,
      image
    ) {
      this.level = level;
      this.category = category;
      this.question = question;
      this.answer = answer;
      this.falseA = falseA;
      this.falseB = falseB;
      this.falseC = falseC;
      this.prize = prize;
      this.image = image;
  
    }
  }
  
  const questions = [
    new Question(
      1,
      "Geografia",
      "¿Qué país está entre Perú y Colombia?",
      "Ecuador",
      "Brasil",
      "Guyana",
      "Panama",
      1000,
      './assets/img/download.jpeg'
    ),
    new Question(
      1,
      "Geografia",
      "¿En qué continente se encuentra Jamaica?",
      "America",
      "America del Sur",
      "Asia",
      "Europa",
      1000,
      './assets/img/download.jpeg'
    ),
    new Question(
      1,
      "Geografia",
      "¿En qué continente se encuentra Australia?",
      "Oceania",
      "America del Sur",
      "Asia",
      "Europa",
      1000,
      './assets/img/download.jpeg'
    ),
    new Question(
      1,
      "Geografia",
      "¿En qué país se encuentra el pico Aconcagua?",
      "Argentina",
      "Brasil",
      "Canada",
      "Suiza",
      1000,
      './assets/img/download.jpeg'
    ),
    new Question(
      1,
      "Geografia",
      "¿Cuál es el idioma más hablado en Suiza?",
      "Aleman",
      "Japones",
      "Arabe",
      "Ingles",
      1000,
      './assets/img/download.jpeg'
    ),
    new Question(
      2,
      "Historia",
      "¿En qué año el hombre pisó la Luna por primera vez?",
      "1969",
      "1967",
      "1996",
      "1869",
      2500,
      './assets/img/historia.jpg'
    ),
    new Question(
      2,
      "Historia",
      "¿Cuánto duró la Guerra de los Cien Años?",
      "116",
      "98",
      "100",
      "112",
      2500,
      './assets/img/historia.jpg'
    ),
    new Question(
      2,
      "Historia",
      "¿Quiénes fueron, según la leyenda, los dos hermanos fundadores de la ciudad de Roma?",
      "Romulo y Remo",
      "Romualdo y Renaldo",
      "Marco y Aurelio",
      "Juan y Maximo",
      2500,
      './assets/img/historia.jpg'
    ),
    new Question(
      2,
      "Historia",
      "¿Para qué religión es especialmente importante el rey Haile Selassie I?",
      "Rastafari",
      "Budismo",
      "Judia",
      "Protestante",
      2500,
      './assets/img/historia.jpg'
    ),
    new Question(
      2,
      "Historia",
      "¿Cómo se apellidaban los dos exploradores que dieron la primera vuelta al mundo?",
      "Magallanes-Elcano",
      "Colon-Hernandez",
      "Polo-Khan",
      "Cortez-Colon",
      2500,
      './assets/img/historia.jpg'
    ),
    new Question(
      3,
      "Entretenimiento",
      "¿A quién interpretaba John Travolta en “Grease”?",
      "Danny Zuko",
      "Samuel Zuko",
      "Doody",
      "Sonny",
      5000,
      './assets/img/entretenimiento.jpeg'
    ),
    new Question(
      3,
      "Entretenimiento",
      "¿Qué conocido cómico imitó a Hitler en la película “El Gran Dictador”?",
      "Charles Chaplin",
      "MrBean",
      "Steve Martin",
      "Bill Murray",
      5000,
      './assets/img/entretenimiento.jpeg'
    ),
    new Question(
      3,
      "Entretenimiento",
      "¿Cómo se llama la ciudad donde se encuentra el Mago de Oz?",
      "Esmeralda",
      "Ruby",
      "Esperada",
      "Jade",
      5000,
      './assets/img/entretenimiento.jpeg'
    ),
    new Question(
      3,
      "Entretenimiento",
      "¿Cómo se llama el protagonista de la serie de cómics The Sandman, de Neil Gaiman?",
      "Morfeo",
      "Lucifer",
      "Sandman",
      "Hector Hall",
      5000,
      './assets/img/entretenimiento.jpeg'
    ),
    new Question(
      3,
      "Entretenimiento",
      "¿En qué país transcurre la acción de la película 'Chappie'?",
      "Sudafrica",
      "Irlanda",
      "Alemania",
      "Sudan",
      5000,
      './assets/img/entretenimiento.jpeg'
    ),
    new Question(
      4,
      "Arte y Literatura",
      "¿Quién escribió “La colmena”?",
      "Camilo José Cela",
      "Mario Benedetti",
      "Gabriel García Márquez",
      "Pablo Neruda",
      10000,
      './assets/img/arte.jpg'
    ),
    new Question(
      4,
      "Arte y Literatura",
      "¿Qué animal mitológico da nombre a uno de los libros más conocidos de Thomas Hobbes?",
      "Leviatán",
      "Quimera",
      "Toro de Creta",
      "Basilisco",
      10000,
      './assets/img/arte.jpg'
    ),
    new Question(
      4,
      "Arte y Literatura",
      "¿Cómo se llama el pintor noruego autor de la obra “El Grito”?",
      "Edvard Munch",
      "Erik Werenskiold",
      "Harald Sohlber",
      "Ragnhild Kaarbø",
      10000,
      './assets/img/arte.jpg'
    ),
    new Question(
      4,
      "Arte y Literatura",
      "¿Qué pianista y cantante de jazz compuso un álbum titulado “Glad Rag Doll”?",
      "Diana Krall",
      "Carla Bley",
      "Erroll Garner",
      "Bud Powell",
      10000,
      './assets/img/arte.jpg'
    ),
    new Question(
      4,
      "Arte y Literatura",
      "¿Qué pintor hizo el cuadro llamado “La joven de la perla”?",
      "Johannes Vermeer",
      "Gustav Klimt",
      "El Greco",
      "Alberto Durero",
      10000,
      './assets/img/arte.jpg'
    ),
    new Question(
      5,
      "Ciencia y Naturaleza",
      "¿Qué especie de árbol de uso frecuente en la llamada medicina tradicional china es un ejemplo de fósil viviente por sus antiquísimos orígenes?",
      "Gingko biloba",
      "Cupressus chengiana",
      "Nageia nagi",
      "Picea brachytyla",
      50000,
      './assets/img/ciencia.jpg'
    ),
    new Question(
      5,
      "Ciencia y Naturaleza",
      "¿Cuáles son las bases nitrogenadas del ADN?",
      "guanina, adenina, timina y citosina.",
      "citosina, uracilo y timina",
      "adenosina, flavina, riboflavina, citosina",
      "guanodina, timidina, citisina",
      50000,
      './assets/img/ciencia.jpg'
    ),
    new Question(
      5,
      "Ciencia y Naturaleza",
      "¿En qué archipiélago vive la única especie de cormorán que no es capaz de volar?",
      "Islas Galápagos",
      "Islas Paracelso",
      "Archipiélago de Hochelaga",
      "Archipiélago de Mergui",
      50000,
      './assets/img/ciencia.jpg'
    ),
    new Question(
      5,
      "Ciencia y Naturaleza",
      "¿Con qué denominación se conoce la línea dibujada por las estrellas Alnitak, Alnilam y Mintaka vistas desde nuestro planeta",
      "Orión",
      "Osa Mayor",
      "Cygnus",
      "Pegaso",
      50000,
      './assets/img/ciencia.jpg'
    ),
    new Question(
      5,
      "Ciencia y Naturaleza",
      "¿Cómo se llama el tipo de célula nerviosa más abundante en el cerebro humano?",
      "Gliales",
      "Neuronas",
      "Dendritas",
      "Astrositas",
      50000,
      './assets/img/ciencia.jpg'
    ),
  ];
  
  export const setQuestion = ()=>{
  if (!localStorage.getItem("questions")) {
    localStorage.setItem("questions", JSON.stringify(questions));
  }}
  
  class Player {
    constructor(name) {
      this.name = name;
      this.prize = 0;
      this.round = 1;
      this.finalRound = 5;
    }
  }
  export const players = [new Player("Juan"), new Player("Juanito")];

  export const setPlayers = ()=>{
  if (!localStorage.getItem("players")) {
    localStorage.setItem("players", JSON.stringify(players));
  }
  }

  