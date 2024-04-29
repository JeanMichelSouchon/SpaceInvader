var posAlienX;
var posAlienY;
var isSens;
var isDown;
var isAlienTouchee = false;
var isEndOfGame;

function initAlien() {
    posAlienX = 1;
    posAlienY = 1; // déclare la position initial de l'alien
    isSens = false;
    isDown = false;

    afficerAlien();
    parcoursGrille(); 
}

// Fonction pour gérer le parcours de l'alien sur la grille    TRUE = gauche FALSE = Droite
function parcoursGrille() {
    
        effacerAlien();
        // Déplacer l'alien vers la droite ou la gauche en fonction de isSens
        if (!isSens) { // Vers la droite
            if (posAlienX < largeur) {
                posAlienX++;
            } else { // Changement de ligne si l'alien atteint le bord droit
                posAlienY++;
                isSens = true;
            }
        } else { // Vers la gauche
            if (posAlienX > 1) {
                posAlienX--;
            } else { // Changement de ligne si l'alien atteint le bord gauche
                posAlienY++;
                isSens = false;
            }
        }
        afficerAlien();
        if (posAlienY === hauteur ) {
            // Si l'alien atteint la dernière ligne, la partie se termine
            alert('Game Over! L\'alien a atteint la dernière ligne.');
            effacerAlien;
        } else if (!isAlienTouchee) {
            // Appeler récursivement la fonction pour créer un déplacement continu de l'alien
            isAlienTouchee = false;
            setTimeout(parcoursGrille, 500); 
        }
    
}
function effacerAlien(){
    var celluleAlienActuelle = document.querySelector('tr:nth-child(' + posAlienY + ') td:nth-child(' + posAlienX + ')');
    celluleAlienActuelle.innerHTML = '<img src="ASSET/vide.png">'; // récupère la position de l'alien puis la remplace par du vide
}

function afficerAlien(){
    var celluleAlienNouvelle = document.querySelector('tr:nth-child(' + posAlienY + ') td:nth-child(' + posAlienX + ')');
    celluleAlienNouvelle.innerHTML = '<img src="ASSET/alien.gif">';    // Afficher l'alien à sa nouvelle position
}

function resetAlien() {
    // Réinitialiser la variable pour indiquer que l'alien n'est plus touché
    alienTouche = false;
    // Réinitialiser l'alien en haut à gauche de l'écran
    effacerAlien();
    posAlienX = 1;
    posAlienY = 1;
    isSens = false;
    isDown = false;
    afficerAlien();
}
// Exporter les fonctions parcoursGrille,initAlien et deplaceAlien pour qu'elles soient accessibles depuis l'extérieur du fichier
window.initAlien = initAlien;
window.resetAlien = resetAlien;
window.effacerAlien = effacerAlien;
window.afficerAlien = afficerAlien;
window.parcoursGrille = parcoursGrille;
