const recherche = document.querySelector("#recherche");
const medecins = document.querySelectorAll(".medecin");

recherche.addEventListener("keyup", function () {
    const texte = recherche.value.toLowerCase();
    medecins.forEach(function (ligne) {
        const nom = ligne.querySelector(".nom").textContent.toLowerCase();
        if (nom.includes(texte)) {
            ligne.style.display = "";

        } else {
            ligne.style.display = "none";
        }
    });
});




const modifier = document.querySelectorAll(".modifier");
modifier.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        alert("Modification du médecin bientôt disponible.");
    });
});




const supprimer = document.querySelectorAll(".supprimer");
supprimer.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        const choix = confirm("Voulez-vous supprimer ce médecin ?");
        if (choix) {
            bouton.closest("tr").remove();

        }
    });
});