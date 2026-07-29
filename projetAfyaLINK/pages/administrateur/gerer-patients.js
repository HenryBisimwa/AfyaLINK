const recherche = document.querySelector("#recherche");
const patients = document.querySelectorAll(".patient");

recherche.addEventListener("keyup", function () {
    const texte = recherche.value.toLowerCase();
    patients.forEach(function (ligne) {
        const nom = ligne.querySelector(".nom").textContent.toLowerCase();
        if (nom.includes(texte)) {
            ligne.style.display = "";
        } else {
            ligne.style.display = "none";

        }
    });
});




const voir = document.querySelectorAll(".voir");
voir.forEach(function (bouton, index) {
    bouton.addEventListener("click", function () {
        if (index === 0) {
            alert("Henry Bisimwa\n21 ans\nTéléphone : +257 79 123 456");
        }
        else if (index === 1) {
            alert("Alice Ndayishimiye\n19 ans\nTéléphone : +257 78 654 321");

        }
        else {
            alert("Jean Mukasa\n30 ans\nTéléphone : +257 77 888 999");

        }
    });
});




const desactiver = document.querySelectorAll(".desactiver");
desactiver.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        const choix = confirm("Voulez-vous désactiver ce compte ?");
        if (choix) {
            bouton.textContent = "Compte désactivé";
            bouton.disabled = true;
            bouton.className =
                "bg-gray-400 text-white px-3 py-1 rounded cursor-not-allowed";

        }
    });
});