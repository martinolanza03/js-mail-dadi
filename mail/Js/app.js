let emails = [ //Inizializzo  l'array 
    "martino@gmail.com" ,
    'pippo@gmail.com' ,
    'piero@gmail.com' ,
    'luca@gmail.com' ,
    'mattia@gmail.com' ,
    'lorenzo@gmail.com' ,
    'donato@gmail.com' ,
    'gaetano@gmail.com' ,
    'giuseppe@gmail.com' ,
    'paperino@gmail.com'
];

// Chiedo all'utente quale email vuole cercare
let requestEmail = prompt('Inserisci l email che desideri cercare');

// Ciclo for per cercare l'email
for(i = 0; i < emails.length; i++) { 

    if (requestEmail == emails[i]) { // Condizione che confronta l'email
        console.log(`L'email ${requestEmail} è presente nel database`); // SE l'email è presente stampa
        break;
    } else if (i == emails.length - 1){
        console.log(`L'email ${requestEmail} non è presente nel database`);// SE l'email non è presente stampa 
    }
}