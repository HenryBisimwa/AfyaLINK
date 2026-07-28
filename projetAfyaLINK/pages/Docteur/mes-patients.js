const recherche = document.querySelector("#recherche");
const patients = document.querySelectorAll(".patient");

recherche.addEventListener("keyup", function () {

    const texte = recherche.value.toLowerCase();
    patients.forEach(function (patient) {
        const nom = patient.querySelector(".nom").textContent.toLowerCase();
        if (nom.includes(texte)) {
            patient.style.display = "block";
        } else {
            patient.style.display = "none";

        }

    });

});



const voir = document.querySelectorAll(".voir");
voir.forEach(function (bouton, index) {
    bouton.addEventListener("click", function () {
        if (index === 0) {
            alert(
                "Nom : Henry Bisimwa\nÂge : 21 ans\nService : Cardiologie"
            );
        } else {
            alert(
                "Nom : Alice Ndayishimiye\nÂge : 19 ans\nService : Pédiatrie"
            );

        }
    });
});




const contacter = document.querySelectorAll(".contact");
contacter.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        alert("La messagerie sera disponible prochainement.");

    });

});