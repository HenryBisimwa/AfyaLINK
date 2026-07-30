const date = document.querySelector("#date");
const aujourdhui = new Date();
date.textContent =
"Aujourd'hui : " + aujourdhui.toLocaleDateString("fr-FR");



const actualiser = document.querySelector("#actualiser");
const patients = document.querySelector("#patients");
const medecins = document.querySelector("#medecins");
const rdv = document.querySelector("#rdv");
const ordonnances = document.querySelector("#ordonnances");
const resume = document.querySelector("#resume");

actualiser.addEventListener("click", function(){
    patients.textContent = Math.floor(Math.random()*300)+100;
    medecins.textContent = Math.floor(Math.random()*30)+10;
    rdv.textContent = Math.floor(Math.random()*80)+20;
    ordonnances.textContent = Math.floor(Math.random()*200)+50;
    resume.textContent =
    "Les statistiques ont été mises à jour avec succès.";

});