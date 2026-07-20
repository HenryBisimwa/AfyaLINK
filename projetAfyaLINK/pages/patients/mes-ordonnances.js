const boutons = document.querySelectorAll(".voir");

boutons.forEach(function (bouton) {

    bouton.addEventListener("click", function () {

        alert("L'ordonnance complète sera disponible prochainement.");

    });

});