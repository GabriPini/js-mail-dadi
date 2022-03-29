/*
 Mail
 Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere 
 , e stampa un messaggio appropriato sull’esito del controllo.
 */    

// A
// Establish the variables
let registeredEmail;
let userEmail;
let flag  = false;

// Create the array with the registered e-mail
registeredEmail = ["lele19977@gmail.com", "Deadpool@gmail.com", "Skywalker@gmail.com", "HelloKitty@gmail.com", "Ungabunga@gmail.com", ];

// Get the user e-mail with a prompt
userEmail = prompt("Inserire la mail tua mail!")

// Check if the user email is in the e-mail array and Create the appropiate message 
for (var i = 0; i < registeredEmail.length ; i++ ){
    
    console.log(i, registeredEmail[i])

    if (registeredEmail[i] == userEmail){
        
        flag = true;   
    }
    
} 
console.log(flag);
if ( flag ){
    // If true
    document.getElementById("my_user-registered").innerHTML = 'Utente registrato <i class="far fa-check-square"></i>';
    
    } else {
      // If false
        document.getElementById("my_user-not-registered").innerHTML = 'Utente non registrato <i class="fas fa-exclamation-triangle"></i>';
 }


// B 
/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore o giocatrice sia per il computer. 
Stabilire il vincitore o la vincitrice, in base a chi fa il punteggio più alto.
*/

// Establish the variables
let userRandomNumber;
let computerRandomNumber;

// Generate random number for the user
userRandomNumber = parseInt( 6 * Math.random()) + 1;
console.log(userRandomNumber);

// Generate random number for the computer
computerRandomNumber = parseInt( 6 * Math.random()) + 1;
console.log(computerRandomNumber);

// Compare the assigned numbers to get the winner
if (userRandomNumber > computerRandomNumber){
    // user wins
    console.log("Ha vinto l'Utente!")

} else if ( userRandomNumber < computerRandomNumber ){
    // user lose
    console.log("Ha vinto il Computer!")

} else {
    // It's a draw
    console.log("è un pareggio!")

}