// Variables déterminant l'emplacement du vaisseau
var posShipY = hauteur - 1; //récupère la hauteur du tableau fais -1 pour mettre sur la dernière ligne
var posShipX = (largeur - 1) / 2; //récupère la largeur du tableau et fais -1 pour etre sur la dernière colone puis / 2 pour mettre au centre

// Fonction pour lancer la partie en plaçant le vaisseau sur le plateau
function lancerPartie() {
    // Récupération de la cellule où se trouve le vaisseau, et on défini la position du vaisseau avec les valeurs inscrit au dessus
    var celluleVaisseau = document.querySelector('tr:nth-child(' + (posShipY + 1) + ') td:nth-child(' + (posShipX + 1) + ')'); // Le sélecteur :nth-child(n) correspond à tout élément qui est le nième enfant de son parent.
    // Remplacement de l'image vide par l'image du vaisseau
    celluleVaisseau.innerHTML = '<img src="vaisseau.png">';// on remplace l'image
}

// Événement click sur le bouton "Jouer"
document.getElementById('boutonJouer').addEventListener('click', function() {
    lancerPartie(); //dès que l'on click sur le bouton jouer
});
