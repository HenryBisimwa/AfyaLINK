const details = document.querySelectorAll(".details");

details.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Les détails du rendez-vous seront disponibles prochainement.");

    });

});