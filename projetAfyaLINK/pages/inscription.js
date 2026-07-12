document.getElementById('inscription-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
        nom: document.getElementById('nom').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value,
        telephone: document.getElementById('telephone').value.trim()
    };

    const result = register(userData);

    if (result.success) {
        afficherMessage('message', 'Compte créé ! Redirection...', 'success');
        setTimeout(() => redirectByRole('patient'), 800);
    } else {
        afficherMessage('message', result.message, 'error');
    }
});
