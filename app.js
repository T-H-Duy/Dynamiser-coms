let prenom = document.getElementById("first-name").value;
let nom = document.getElementById("last-name").value;
let commentaire = document.getElementById("message").value;

const champVide = document.getElementById("error-message");
const bouton = document.querySelector("button");


function sendComment() {

    event.preventDefault();

    if (prenom == ""){
        champVide.style.display = "block";
    } else {
        erreur.style.display = "none";
    }
    if (nom == ""){
        champVide.style.display = "block";
    } else {
        champVide.style.display = "none";
    }
    if (commentaire == ""){
        champVide.style.display = "block";
    } else {
        champVide.style.display = "none";
    }
}

bouton.addEventListener("click", sendComment);