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

    // Retirer le missile après un court délai de 500 Ms
    setTimeout(function() { celluleMissile.innerHTML = '<img src="vide.png">'; }, 500);
}

// Exporter la fonction pewPew pour qu'elle soit accessible depuis l'extérieur (dans ce cas, depuis app.js)
window.pewPew = pewPew;
