const salutation = document.querySelector("#salutation");
const heure = new Date().getHours();

if (heure < 12) {
    salutation.textContent = "Bonjour Administrateur ☀️";

}
else if (heure < 18) {
    salutation.textContent = "Bon après-midi Administrateur 🌤️";

}
else {
    salutation.textContent = "Bonsoir Administrateur 🌙";

}



const actualiser = document.querySelector("#actualiser");
const patients = document.querySelector("#patients");
const medecins = document.querySelector("#medecins");
const rdv = document.querySelector("#rdv");
const ordonnances = document.querySelector("#ordonnances");

actualiser.addEventListener("click", function () {
    patients.textContent = Math.floor(Math.random() * 300) + 100;
    medecins.textContent = Math.floor(Math.random() * 30) + 10;
    rdv.textContent = Math.floor(Math.random() * 80) + 20;
    ordonnances.textContent = Math.floor(Math.random() * 200) + 50;

});




const logout = document.querySelector("#logout");
logout.addEventListener("click", function () {
    const choix = confirm("Voulez-vous vraiment vous déconnecter ?");
    if (choix) {
        window.location.href = "../login.html";

    }

});