const form = document.querySelector("#register-form");

const message = document.querySelector("#message");



form.addEventListener("submit", function(e){

    e.preventDefault();

    const nom = document.querySelector("#nom").value.trim();

    const email = document.querySelector("#email").value.trim();

    const password = document.querySelector("#password").value;

    const confirmPassword = document.querySelector("#confirmPassword").value;

    if(password !== confirmPassword){

        message.className =
        "p-3 mb-5 rounded-lg text-center bg-red-100 text-red-700";

        message.textContent =
        "Les mots de passe ne correspondent pas.";

        return;

    }

    message.className =
    "p-3 mb-5 rounded-lg text-center bg-green-100 text-green-700";

    message.textContent =
    "Compte créé avec succès !";

    console.log({

        nom,

        email,

        password

    });

    setTimeout(function(){

        window.location.href="login.html";

    },1000);

});