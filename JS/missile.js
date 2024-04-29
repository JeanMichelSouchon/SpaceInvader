// Variables représentant l'emplacement du missile
var posMissileX;
var posMissileY;

// Fonction pour représenter un tir de missile
function pewPew() {
    // Initialiser les variables pour que le missile démarre juste au-dessus du vaisseau et initialise le lancer de missile
    posMissileX = posShipX; 
    posMissileY = posShipY; // place le missile la ligne au dessus du vaisseau

    // Mettre à jour le plateau pour afficher le missile à l'emplacement correspondant
    var celluleMissile = document.querySelector('tr:nth-child(' + (posMissileY) + ') td:nth-child(' + (posMissileX + 1) + ')');
    celluleMissile.innerHTML = '<img src="ASSET/missile.gif">'; 
    

    // Déplacer le missile automatiquement vers le haut
    deplacementMissile(posMissileY, posMissileX);
}


// Fonction pour déplacer le missile vers le haut
function deplacementMissile(y, x) {
    if (posAlienX === x && posAlienY === y) {
        effacerAlien();
        // Effacer l'image de missile des coordonnées actuelles
        effaceMissile(y, x);
        updateScore();
        // Réinitialiser l'alien en haut à gauche de l'écran
        resetAlien();

        
    } else {
        if(y === 4){ // Ce If est pour eviter de supprimer le vaisseau au lancement du missile
            // Si le missile est à la limite supérieure du plateau, ne pas le déplacer davantage
            if (y === 0) return;

            // Écrire une image de missile aux coordonnées y-1
            var nouvellePositionY = y - 1;
            var nouvelleCelluleMissile = document.querySelector('tr:nth-child(' + (nouvellePositionY + 1) + ') td:nth-child(' + (x + 1) + ')');
            nouvelleCelluleMissile.innerHTML = '<img src="ASSET/missile.gif">';

            // Appeler la fonction deplacementMissile de façon récursive avec un délai de 200ms
            setTimeout(function() {
            deplacementMissile(nouvellePositionY, x);
            }, 200);
        } else{
            // Effacer l'image de missile des coordonnées actuelles
            var celluleMissile = document.querySelector('tr:nth-child(' + (y + 1) + ') td:nth-child(' + (x + 1) + ')');
            celluleMissile.innerHTML = '<img src="ASSET/vide.png">';

            // Si le missile est à la limite supérieure du plateau, ne pas le déplacer davantage
            if (y === 0) return;

            // Écrire une image de missile aux coordonnées y-1
            var nouvellePositionY = y - 1;
            var nouvelleCelluleMissile = document.querySelector('tr:nth-child(' + (nouvellePositionY + 1) + ') td:nth-child(' + (x + 1) + ')');
            nouvelleCelluleMissile.innerHTML = '<img src="ASSET/missile.gif">';

            // Appeler la fonction deplacementMissile de façon récursive avec un délai de 200ms
            setTimeout(function() {
            deplacementMissile(nouvellePositionY, x);
            }, 200);
        }
    }
}

function effaceMissile(y, x) {
    var celluleMissilePrecedent = document.querySelector('tr:nth-child(' + (y + 1) + ') td:nth-child(' + (x + 1) + ')');
    celluleMissilePrecedent.innerHTML = '<img src="ASSET/vide.png">'; // Efface l'image du missile à sa position précédente
}

// Exporter la fonction deplacementMissile pour qu'elle soit accessible depuis l'extérieur (dans ce cas, depuis app.js)
window.deplacementMissile = deplacementMissile;

// Exporter la fonction pewPew pour qu'elle soit accessible depuis l'extérieur (dans ce cas, depuis app.js)
window.pewPew = pewPew;


