const modifier = document.querySelector("#modifier");
const password = document.querySelector("#password");




modifier.addEventListener("click", function(){
    alert("La modification du profil sera bientôt disponible.");

});




password.addEventListener("click", function(){

    const choix = confirm("Voulez-vous modifier votre mot de passe ?");
    if(choix){
        alert("Cette fonctionnalité sera disponible prochainement.");

    }

});