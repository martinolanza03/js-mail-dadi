let computerNumber = parseInt((Math.random() * 6) + 1); //Creo un numero random al computer
let userNumber = parseInt((Math.random() * 6) + 1); //Creo un numero random al giocatore

if (computerNumber > userNumber) { // Controllo se il numero del computer è maggiore di quello del giocatore
    console.log(`Il numero maggiore è quello del computer : ${computerNumber}`); // Stampo il numero maggiore
} else if (computerNumber < userNumber) { // Controllo SE il numero del computer è minore di quello del giocatore
    console.log(`Il numero maggiore è quello del giocatore : ${userNumber}`); // Stampo il numero maggiore
} else if (computerNumber == userNumber) { // Controllo SE il numero del computer e quello del giocatore sono uguali
    console.log(`Il numero dei concorrenti è uguale : ${userNumber}`); // Stampo il numero uguale
}