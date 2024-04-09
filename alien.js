// Variables représentant l'emplacement de l'alien
var posAlienX;
var posAlienY;
var isSens;
var isDown;

// Fonction pour initialiser l'alien en haut à gauche de l'écran
function initAlien() {
    posAlienX = 1;
    posAlienY = 1;
    isSens = false;
    isDown = false;

    var celluleAlien = document.querySelector('tr:nth-child(' + (posAlienY) + ') td:nth-child(' + (posAlienX) + ')');
    celluleAlien.innerHTML = '<img src="alien.png">';

    // Appeler la fonction deplaceAlien de façon récursive pour déplacer l'alien
    setTimeout(function() {
        parcoursGrille(); // Déplacement horizontal : de droite à gauche
    }, 500);
}

// Fonction pour déplacer l'alien
function deplaceAlien(x, y) {
    // Effacer l'alien de sa position actuelle
    var celluleAlien = document.querySelector('tr:nth-child(' + (posAlienY) + ') td:nth-child(' + (posAlienX) + ')');
    celluleAlien.innerHTML = '<img src="vide.png">';

    // Afficher l'alien à la nouvelle position
    var nouvelleCelluleAlien = document.querySelector('tr:nth-child(' + (y) + ') td:nth-child(' + (x) + ')');
    nouvelleCelluleAlien.innerHTML = '<img src="alien.png">';

    // Mettre à jour les variables de position de l'alien
    posAlienX = x;
    posAlienY = y;
}

// Fonction pour gérer le parcours de l'alien sur la grille    TRUE = gauche FALSE = Droite
function parcoursGrille() {

    if (posAlienX === 1 && isSens === true){ // anti débordement Coté Droit
        posAlienY++;
        deplaceAlien(posAlienX,posAlienY);
        isSens= false;
    }
    if (posAlienX === largeur && isSens === false){ // anti débordement Coté Droit
        posAlienY++;
        deplaceAlien(posAlienX,posAlienY);
        isSens= true;
    }

    
    var newX;
    if(isSens === false ){
        newX = posAlienX + 1;
    }else{
        newX = posAlienX - 1;
    }
    deplaceAlien(newX,posAlienY);
    
    // Appeler récursivement la fonction pour créer un déplacement continu de l'alien
    setTimeout(parcoursGrille, 1000); // Appel toutes les secondes


    
}


// Exporter les fonctions parcoursGrille,initAlien et deplaceAlien pour qu'elles soient accessibles depuis l'extérieur
window.initAlien = initAlien;
window.deplaceAlien = deplaceAlien;
window.parcoursGrille = parcoursGrille;
