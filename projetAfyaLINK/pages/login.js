
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

   
    const resultat = login(email, password);

    if (resultat.success) {
        afficherMessage('message', 'Connexion réussie ! Redirection...', 'success');
       
        setTimeout(function() {
            redirectByRole(resultat.user.role);
        }, 800);
    } else {
        
        afficherMessage('message', resultat.message, 'error');
    }
});


const utilisateurConnecte = getCurrentUser();
if (utilisateurConnecte) {
    redirectByRole(utilisateurConnecte.role);
}
