const recherche = document.querySelector("#recherche");
const rendezVous = document.querySelectorAll(".rdv");

recherche.addEventListener("keyup", function () {
    const texte = recherche.value.toLowerCase();
    rendezVous.forEach(function (ligne) {
        const nom = ligne.querySelector(".nom").textContent.toLowerCase();
        if (nom.includes(texte)) {
            ligne.style.display = "";
        } else {
            ligne.style.display = "none";

        }
    });
});



const valider = document.querySelectorAll(".valider");
valider.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        const ligne = bouton.closest("tr");
        const statut = ligne.querySelector(".statut");
        statut.textContent = "Validé";
        statut.className = "statut text-green-600 font-semibold";

    });
});




const annuler = document.querySelectorAll(".annuler");
annuler.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        const choix = confirm("Annuler ce rendez-vous ?");
        if (choix) {
            const ligne = bouton.closest("tr");
            const statut = ligne.querySelector(".statut");
            statut.textContent = "Annulé";
            statut.className = "statut text-red-600 font-semibold";

        }
    });
});