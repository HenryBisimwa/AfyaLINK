const form = document.querySelector("#rdvForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Votre demande de rendez-vous a été envoyée avec succès !");

    form.reset();

});