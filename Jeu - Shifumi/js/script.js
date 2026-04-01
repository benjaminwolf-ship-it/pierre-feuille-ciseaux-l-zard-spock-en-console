//le tableau simplifié pour l'aléatoire
let figures = ['pierre', 'feuille', 'ciseaux', 'lezard', 'spock'];
//le tableau de comparaison
let choix = {
  'pierre' : 
  { 'pierre':'tie',
    'feuille':'lose',
    'ciseaux':'win',
    'lezard':'win',
    'spock':'lose' },
  'feuille' : 
  { 'pierre':'win',
    'feuille':'tie',
    'ciseaux':'lose',
    'lezard':'lose',
    'spock':'win' },
  'ciseaux' : 
  { 'pierre':'lose',
    'feuille':'win',
    'ciseaux':'tie',
    'lezard':'win',
    'spock':'lose' },
  'lezard' : 
  { 'pierre':'lose',
    'feuille':'win',
    'ciseaux':'lose',
    'lezard':'tie',
    'spock':'win' },
  'spock' : 
  { 'pierre':'win',
    'feuille':'lose',
    'ciseaux':'win',
    'lezard':'lose',
    'spock':'tie' }
};
// récupérer un entier aléatoire
const getEntier = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
//initialiser les scores
  let scoreUser = 0;
  let scoreBot = 0;
//fonction pour afficher le score
const logRes = () => {
   console.log(" Le score est actuellement de " + scoreUser + " à " + scoreBot + " . ");
}
//fonction pour prendre le choix humain et comparer. Renvoit un résultat ( WIN / LOSE / TIE)
const jouer = (choixHumain) => {
  let choixVS = figures[getEntier(0, 5)];
  let resultat = choix[choixHumain][choixVS];

//afficher dans la console les 2 choix et le résultat
  console.log("Vous :", choixHumain);
  console.log("Ordinateur :", choixVS);
  console.log("Résultat :", resultat);
//incrémenter le score de l'utilisateur en cas de victoire
if (resultat == 'win'){
  scoreUser += 1;
}
// incrémenter le score de l'ordinateur en cas de défaite
if (resultat == 'lose'){
  scoreBot += 1;
}

 logRes(); 
};
logRes () ;
// Boutons
// sélectionner les boutons et lancer les fonctions
document.querySelector("#pierre").addEventListener("click", () => jouer("pierre"));
document.querySelector("#feuille").addEventListener("click", () => jouer("feuille"));
document.querySelector("#ciseaux").addEventListener("click", () => jouer("ciseaux"));
document.querySelector("#lezard").addEventListener("click", () => jouer("lezard"));
document.querySelector("#spock").addEventListener("click", () => jouer("spock"));