
// WARNING: Qui inizia la fase di generazione dei numeri random da parte del PC (Simone)

//Questa funzione genera un numero random between
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numeriCasualiIA = new Array();//fisso l'array che conterrà i 5 numeri random proposti dal PC (Simone)

alert("Simone dice:")

//questo è un ciclo che con push andrà a riempire l'array con i numeri random e li farà visualizzare tramite alert
for (var i=0; i<5; i++) {//ciclo (ripeti per 5 volte)
  numeriCasualiIA.push(numeroRandom(1, 10));//all'interno dell'array numeriCasualiIA spingimi dentro un numero random tra 1 e 10
  alert(numeriCasualiIA[i]);//e quindi subito dopo apri un alert che faccia visualizzare questo numero
}

alert("Li hai memorizzati?");//quando questo ciclo è stato completato apri un alert "Li hai memorizzati?"

// WARNING: Qui comincia la fase di inserimento dei numeri memorizzati

var numeriInseritiUtente = new Array();//fisso l'array che conterrà i 5 numeri che il giocatore avrà inserito

//questa funzione è stata creata perchè dopo dovrà legarsi al comando setTimeout per ritardarne l'esecuzione di 5 secondi
function numeriInseritiUtenteDelayed() {
  alert("Ora tocca a te!")//alert che indica al giocatore che comincia la fase di inserimento dei numeri memorizzati
  //questo è un ciclo che con push andrà a riempire l'array numeriInseritiUtente di numeri che il giocatore inserisce
  for (var i=0; i<5; i++) {//ciclo (ripeti per 5 volte)
    numeriInseritiUtente.push(parseInt(prompt("Inserisci un numero che ti ricordi")));//all'interno dell'array numeriInseritiUtente spingimi dentro il numero che l'utente ha inserito
    alert("Hai inserito " + numeriInseritiUtente[i]);//e quindi subito dopo apri un alert di conferma che dica "hai inserito" + il numero che l'utente ha inserito
  }

}

setTimeout(numeriInseritiUtenteDelayed, 5000);//ritardami l'esecuzione della funzione numeriInseritiUtenteDelayed di 5 secondi

// WARNING: qui comincia la fase di verifica dei risultati
