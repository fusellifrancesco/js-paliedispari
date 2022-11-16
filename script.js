// ESERCIZIO 1
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata

//------------------------- MAIN ---------------------------

let inputUtente = prompt("Inserisci una parola");

palindromo(inputUtente);

//----------------------------------------------------------



//------------------DICHIARAZIONE FUNZIONI------------------

function palindromo(parola){
    // converto l'input in caratteri minuscoli
    let parolaMinuscolo = parola.toLowerCase();
    
    // trasformo l'input in un array contenente tutti i 
    // caratteri separati singolarmente
    let parolaInArray = parolaMinuscolo.split("");
    
    // cambio l'ordine dell'array al contrario
    let parolaArrayContrario = parolaInArray.reverse();
    
    // riunisco tutti i caratteri in una singola stringa
    let parolaContrario = parolaArrayContrario.join("");

        // stabilisco se la parola inserita 
        // dall'utente sia un palindromo
        if (parolaMinuscolo == parolaContrario){
            console.log(parola + " è un palindromo");
        } else {
            console.log(parola + " non è un palindromo");
        }

    return true;
}

//----------------------------------------------------------






// ESERCIZIO 2
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//------------------------- MAIN -------------------------------------------------

let pariDispariUtente = prompt("PARI o DISPARI?");
let inputUtenteMaiuscolo = pariDispariUtente.toUpperCase();
let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5"));
let numeroComputer = generatoreNumero();
let somma = numeroUtente + numeroComputer

console.log("il numero generato dal computer è: " + numeroComputer);
console.log("il numero generato dall'utente è: " + numeroUtente);
console.log("l'utente ha scelto: " + inputUtenteMaiuscolo)
console.log("la somma dei due numeri è: " + risultatoPariDispari(somma))

risultatoPariDispari(somma);

if (inputUtenteMaiuscolo == "PARI" && risultatoPariDispari(somma) == 0){
    console.log("HAI VINTO");
} else {
    console.log("HAI PERSO");
}

//--------------------------------------------------------------------------------






//------------------DICHIARAZIONE FUNZIONI----------------------------------------

function generatoreNumero(){
    let numeroGenerato = Math.random() * 6;
    let numeroGeneratoIntero = Math.floor(numeroGenerato);
    return numeroGeneratoIntero;
}

function risultatoPariDispari(risultato){ 
        if (risultato % 2 != 0){
            return risultato;
        } else {
            return risultato;
        }
}

//--------------------------------------------------------------------------------


