const accepter = document.querySelectorAll(".accepter");
const refuser = document.querySelectorAll(".refuser");
const details = document.querySelectorAll(".details");

const statuts = [
    document.querySelector("#statut1"),
    document.querySelector("#statut2")
];


accepter.forEach(function(bouton, index){
    bouton.addEventListener("click", function(){
        statuts[index].textContent = "Confirmé";
        statuts[index].className ="bg-green-100 text-green-700 px-4 py-2 rounded-full h-fit";
    });
});



refuser.forEach(function(bouton, index){
    bouton.addEventListener("click", function(){
        const choix = confirm("Refuser ce rendez-vous ?");
        if(choix){
            statuts[index].textContent = "Refusé";
            statuts[index].className ="bg-red-100 text-red-700 px-4 py-2 rounded-full h-fit";
        }
    });
});



details.forEach(function(bouton, index){
    bouton.addEventListener("click", function(){
        if(index === 0){
            alert( "Patient : Henry Bisimwa\nService : Cardiologie\nDate : 15 Août 2026\nHeure : 09:30" );
        }
        else{
            alert( "Patient : Alice Ndayishimiye\nService : Pédiatrie\nDate : 18 Août 2026\nHeure : 11:00");
        }
    });
});