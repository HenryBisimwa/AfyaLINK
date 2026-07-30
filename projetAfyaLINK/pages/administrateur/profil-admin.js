const modifier = document.querySelector("#modifier");
const password = document.querySelector("#password");


modifier.addEventListener("click", function () {
    alert("La modification du profil sera disponible prochainement.");
});


password.addEventListener("click", function () {
    const confirmation = confirm("Voulez-vous changer votre mot de passe ?");
    if (confirmation) {
        alert("La modification du mot de passe sera disponible prochainement.");

    }

});