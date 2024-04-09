// Variables déterminant l'emplacement du vaisseau
var posShipY = hauteur - 1; //récupère la hauteur du tableau fais -1 pour mettre sur la dernière ligne
var posShipX = (largeur - 1) / 2; //récupère la largeur du tableau et fais -1 pour etre sur la dernière colone puis / 2 pour mettre au centre

// Fonction pour lancer la partie en plaçant le vaisseau sur le plateau
function lancerPartie() {
    // Récupération de la cellule où se trouve le vaisseau, et on défini la position du vaisseau avec les valeurs inscrit au dessus
    var celluleVaisseau = document.querySelector('tr:nth-child(' + (posShipY + 1) + ') td:nth-child(' + (posShipX + 1) + ')'); // Le sélecteur :nth-child(n) correspond à tout élément qui est le nième enfant de son parent.
    // Remplacement de l'image vide par l'image du vaisseau
    celluleVaisseau.innerHTML = '<img src="/ASSET/vaisseau.gif">';// on remplace l'image
}

// Événement click sur le bouton "Jouer"
document.getElementById('boutonJouer').addEventListener('click', function() {
    lancerPartie(); //dès que l'on click sur le bouton jouer
});


// Fonction pour effacer le vaisseau de sa position actuelle
function effaceShip() {
    var celluleVaisseau = document.querySelector('tr:nth-child(' + (posShipY + 1) + ') td:nth-child(' + (posShipX + 1) + ')');
    celluleVaisseau.innerHTML = '<img src="/ASSET/vide.png">';// on change l'image ou se trouve le vaisseau par du vide
}

// Fonction pour afficher le vaisseau à sa nouvelle position
function afficheShip() {
    var celluleVaisseau = document.querySelector('tr:nth-child(' + (posShipY + 1) + ') td:nth-child(' + (posShipX + 1) + ')');
    celluleVaisseau.innerHTML = '<img src="/ASSET/vaisseau.gif">'; // on change l'image ou se trouve le vaisseau par le vaisseau
}

// Fonction pour déplacer le vaisseau en fonction de la touche appuyée
function deplacerVaisseau(event) {
    switch (event.code) {
        case "ArrowLeft":
            effaceShip();
            posShipX = Math.max(posShipX - 1, 0); // Empêche le vaisseau de sortir du plateau à gauche
            afficheShip();
            break;
        case "ArrowRight":
            effaceShip();
            posShipX = Math.min(posShipX + 1, largeur - 1); // Empêche le vaisseau de sortir du plateau à droite
            afficheShip();
            break;
        case "ArrowUp":
            pewPew(); // Appel de la fonction pour tirer le missile
            break;
    }
}


// Attacher la fonction de déplacement aux événements clavier
window.addEventListener("keydown", deplacerVaisseau);
