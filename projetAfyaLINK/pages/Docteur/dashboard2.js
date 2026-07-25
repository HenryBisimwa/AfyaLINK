const salutation = document.querySelector("#salutation");

const heure = new Date().getHours();
console.log(heure);

if (heure < 12) {
    salutation.textContent = "Bonjour Dr Niyonkuru ☀️";
}
else if (heure < 18) {
    salutation.textContent = "Bon après-midi Dr Niyonkuru 🌤️";
}
else {
    salutation.textContent = "Bonsoir Dr Niyonkuru 🌙";
}

const actualiser = document.querySelector("#actualiser");

const rdv = document.querySelector("#rdv");
const attente = document.querySelector("#attente");
const patients = document.querySelector("#patients");
const ordonnances = document.querySelector("#ordonnances");

actualiser.addEventListener("click", function () {

    rdv.textContent = Math.floor(Math.random() * 20) + 5;
    attente.textContent = Math.floor(Math.random() * 10) + 1;
    patients.textContent = Math.floor(Math.random() * 80) + 20;
    ordonnances.textContent = Math.floor(Math.random() * 50) + 10;

});
const logout = document.querySelector("#logout");
logout.addEventListener("click", function () {
    const confirmation = confirm("Voulez-vous vraiment vous déconnecter ?");
    if (confirmation) {
        window.location.href = "../login.html";
    }
});