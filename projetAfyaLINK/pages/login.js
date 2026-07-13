

const form = document.querySelector("#login-form");
const message = document.querySelector("#message");



const utilisateurs = [

    {
        email: "patient@test.com",
        password: "1234",
        role: "patient"
    },

    {
        email: "medecin@test.com",
        password: "1234",
        role: "medecin"
    },

    {
        email: "admin@test.com",
        password: "1234",
        role: "admin"
    }

];



form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.querySelector("#email").value.trim();

    const password = document.querySelector("#password").value;

    const utilisateur = utilisateurs.find(function(user){

        return user.email === email &&
               user.password === password;

    });

    if(utilisateur){

        message.className =
        "p-3 rounded-lg mb-4 bg-green-100 text-green-700";

        message.textContent =
        "Connexion réussie !";

        setTimeout(function(){

            if(utilisateur.role === "patient"){

                window.location.href="../patients/dashboard1.html";

            }

            else if(utilisateur.role === "medecin"){

                window.location.href="../docteur/dashboard.html";

            }

            else{

                window.location.href="../admin/dashboard.html";

            }

        },1000);

    }

    else{

        message.className =
        "p-3 rounded-lg mb-4 bg-red-100 text-red-700";

        message.textContent =
        "Email ou mot de passe incorrect.";

    }

});
