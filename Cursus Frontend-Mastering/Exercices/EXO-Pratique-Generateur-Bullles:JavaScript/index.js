// On creer une fonction qui permet de generer de bulles aleatoirement.
const generateurBulle = () => {
    // Creation d'element dans notre HTML avec JS.
    const bulle = document.createElement("span");

    // Et si on veut injecter ce span quelque-part on fait :
    document.body.appendChild(bulle); // ça veut dire : le body tu as un enfant qui est bulle.
    bulle.classList.add("bubble"); // on a ajouter la classe bubble à notre bulle.

    // Math.random() : genere un nombre aleatoire entre 0 et 1.
    // Math.randon() * 100 : genere un nombre aleatoire entre 0 et 100.
    // Math.randon() * 100 + 100 : genere un nombre aleatoire entre 100 et 200.
    // Math.random() * 200 + 100 : genere un nombre aleatoire entre 100 et 300.

    const size = Math.random() * 200 + 100 + "px"; // on a stocker dans une variable size un nombre aleatoire qui varie entre 100 et 300.

    // On peut ajouter du style a notre bulle en faisant :
    bulle.style.width = size; // veut dire la largeur de notre boite correspond au nombre aleatoire generer dans la variable size.
    bulle.style.height = size; // veut dire la hauteur de notre boite correspond au nombre aleatoire generer dans la variable size.

    // Puisque notre bulle est en position absolute, on peut lui donner une positionnement aleatoire en faisant :
    bulle.style.top = Math.random() * 100 + 50 + "%"; // genere une position aleatoire à la verticale de nimimum 50% du top(haut).
    bulle.style.left = Math.random() * 100 + "%"; // genere une position aleatoire à l'horizontale. 

    // Injecter un mouvement sur la gauche de notre animation
    bulle.style.setProperty("--left", Math.random() * 100 + "%")
}
// Ensuite on peut appeler la fonction dans le setInterval
setInterval(generateurBulle, 300)

