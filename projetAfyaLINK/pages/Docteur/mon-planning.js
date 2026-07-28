const commencer = document.querySelectorAll(".commencer");
const voir = document.querySelectorAll(".voir");

const etats = [
    document.querySelector("#etat1"),
    document.querySelector("#etat2")
];



commencer.forEach(function (bouton, index) {
    bouton.addEventListener("click", function () {
        if (bouton.textContent === "Commencer") {
            etats[index].textContent = "En consultation";
            etats[index].className =
                "bg-green-100 text-green-700 px-4 py-2 rounded-full";
            bouton.textContent = "Terminer";
        } 
        else {
            etats[index].textContent = "Terminée";
            etats[index].className = "bg-blue-100 text-blue-700 px-4 py-2 rounded-full";
            bouton.disabled = true;
            bouton.className = "bg-gray-400 text-white px-5 py-2 rounded cursor-not-allowed";
            bouton.textContent = "Terminée";
        }
    });
});



voir.forEach(function (bouton, index) {
    bouton.addEventListener("click", function () {
        if (index === 0) {
            alert( "Patient : Henry Bisimwa\nHeure : 08:30\nService : Cardiologie"  );
        }
        else {
            alert(  "Patient : Alice Ndayishimiye\nHeure : 11:00\nService : Pédiatrie");
        }
    });
});