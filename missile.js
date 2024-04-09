// Variables représentant l'emplacement du missile
var posMissileX;
var posMissileY;

// Fonction pour représenter un tir de missile
function pewPew() {
    // Initialiser les variables pour que le missile démarre juste au-dessus du vaisseau et initialise le lancer de missile
    posMissileX = posShipX; 
    posMissileY = posShipY - 1; // place le missile la ligne au dessus du vaisseau

    // Mettre à jour le plateau pour afficher le missile à l'emplacement correspondant
    var celluleMissile = document.querySelector('tr:nth-child(' + (posMissileY + 1) + ') td:nth-child(' + (posMissileX + 1) + ')');
    celluleMissile.innerHTML = '<img src="missile.png">'; //remplace l'image vide par le missile

    // Déplacer le missile automatiquement vers le haut
    deplacementMissile(posMissileY, posMissileX);
}

// Fonction pour déplacer le missile vers le haut
function deplacementMissile(y, x) {
    // Effacer l'image de missile des coordonnées actuelles
    var celluleMissile = document.querySelector('tr:nth-child(' + (y + 1) + ') td:nth-child(' + (x + 1) + ')');
    celluleMissile.innerHTML = '<img src="vide.png">';

    // Si le missile est à la limite supérieure du plateau, ne pas le déplacer davantage
    if (y === 0) return;

    // Écrire une image de missile aux coordonnées y-1
    var nouvellePositionY = y - 1;
    var nouvelleCelluleMissile = document.querySelector('tr:nth-child(' + (nouvellePositionY + 1) + ') td:nth-child(' + (x + 1) + ')');
    nouvelleCelluleMissile.innerHTML = '<img src="missile.png">';

    // Appeler la fonction deplacementMissile de façon récursive avec un délai de 200ms
    setTimeout(function() {
        deplacementMissile(nouvellePositionY, x);
    }, 200);
}

// Exporter la fonction deplacementMissile pour qu'elle soit accessible depuis l'extérieur (dans ce cas, depuis app.js)
window.deplacementMissile = deplacementMissile;

// Exporter la fonction pewPew pour qu'elle soit accessible depuis l'extérieur (dans ce cas, depuis app.js)
window.pewPew = pewPew;
