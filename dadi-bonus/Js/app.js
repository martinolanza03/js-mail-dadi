let computerNumber = parseInt((Math.random() * 6) + 1); //Creo un numero random al computer
let userNumber = prompt('Inserisci un numero da 1 a 6'); // L'utente inserisce un numero

for(let i = 0; userNumber > 6 || userNumber == 0; i++){ // Controllo se il numero inserito dall'utente è compreso tra 1 e 6, ripete se il numero non è maggiore di 6
  userNumber = prompt('Inserisci un numero da 1 a 6'); // Faccio inserire di nuovo il numero dall'utente
}

if (computerNumber > userNumber) { // Controllo se il numero del computer è maggiore di quello del giocatore
    console.log(`Il numero maggiore è quello del computer : ${computerNumber} , il numero del giocatore è ${userNumber}`); // Stampo il numero maggiore
} else if (computerNumber < userNumber) { // Controllo SE il numero del computer è minore di quello del giocatore
    console.log(`Il numero maggiore è quello del giocatore : ${userNumber}, il numero del computer è ${computerNumber}`); // Stampo il numero maggiore
} else if (computerNumber == userNumber) { // Controllo SE il numero del computer e quello del giocatore sono uguali
    console.log(`Il numero dei concorrenti è uguale : ${userNumber}`); // Stampo il numero uguale
}