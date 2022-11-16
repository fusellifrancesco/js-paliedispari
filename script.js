// ESERCIZIO 1
// Data una parola, controlla che essa sia un palindromo.

//------------------------- MAIN ---------------------------

let inputUtente = prompt("Inserisci una parola");

palindromo(inputUtente);

//----------------------------------------------------------

function palindromo(parola){
    let parolaMinuscolo = parola.toLowerCase();
    let parolaInArray = parolaMinuscolo.split("");
    let parolaArrayContrario = parolaInArray.reverse();
    let parolaContrario = parolaArrayContrario.join("");

        if (parolaMinuscolo == parolaContrario){
            console.log(parola + " è un palindromo");
        } else {
            console.log(parola + " non è un palindromo");
        }

    return true;
}
