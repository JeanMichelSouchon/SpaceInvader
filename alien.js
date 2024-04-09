// Variables représentant l'emplacement de l'alien
var posAlienX;
var posAlienY;
var isSens;
var isDown;
var isEndOfGame;

// Fonction pour initialiser l'alien en haut à gauche de l'écran
function initAlien() {
    posAlienX = 1;
    posAlienY = 1;
    isSens = false;
    isDown = false;

    var celluleAlien = document.querySelector('tr:nth-child(' + (posAlienY) + ') td:nth-child(' + (posAlienX) + ')'); // Position en haut a gauche du table
    celluleAlien.innerHTML = '<img src="alien.gif">';

    // Appeler la fonction deplaceAlien de façon récursive pour déplacer l'alien
    setTimeout(function() {
        parcoursGrille(); // Déplacement horizontal : de droite à gauche
    }, 500);
}

// Fonction pour gérer le parcours de l'alien sur la grille    TRUE = gauche FALSE = Droite
function parcoursGrille() {

    // Effacer l'alien de sa position actuelle
    var celluleAlienActuelle = document.querySelector('tr:nth-child(' + posAlienY + ') td:nth-child(' + posAlienX + ')');
    celluleAlienActuelle.innerHTML = '<img src="vide.png">';

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

    // Afficher l'alien à sa nouvelle position
    var celluleAlienNouvelle = document.querySelector('tr:nth-child(' + posAlienY + ') td:nth-child(' + posAlienX + ')');
    celluleAlienNouvelle.innerHTML = '<img src="alien.gif">';
    
    
    // Appeler récursivement la fonction pour créer un déplacement continu de l'alien
    setTimeout(parcoursGrille, 1000); // Appel toutes les secondes 
}


// Exporter les fonctions parcoursGrille,initAlien et deplaceAlien pour qu'elles soient accessibles depuis l'extérieur du fichier
window.initAlien = initAlien;
window.parcoursGrille = parcoursGrille;
