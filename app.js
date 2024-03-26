// Variables
var largeur = 9;
var hauteur = 5;
var plateau = [];

// Fonction pour initialiser le plateau
function initPlateau() {
    var contenuDiv = document.getElementById('contenu'); // localise la balise div par l'élément contenu
    var tableau = document.createElement('table'); // créer la création de balise tableau (html)

    // Création des lignes et des cellules
    for (var i = 0; i < hauteur; i++) { // boucle for dépendant de la variable hauteur
        var ligne = document.createElement('tr'); // créer la ligne
        for (var j = 0; j < largeur; j++) { // boucle for dépendant de la variable largeur
            var cellule = document.createElement('td'); //Créer la cellule
            var image = document.createElement('img'); //créer la balise image
            image.src = 'vide.png'; // Source de l'image
            cellule.appendChild(image); // ajoute la balise image dans la cellule
            ligne.appendChild(cellule);// ajoute la cellule dans la ligne
        }
        tableau.appendChild(ligne);// ajoute la ligne dans le tableau
    }

    // Ajout du tableau à la div de contenu
    contenuDiv.appendChild(tableau);
}

