const form = document.querySelector("#formOrdonnance");
const patient = document.querySelector("#patient");
const diagnostic = document.querySelector("#diagnostic");
const prescription = document.querySelector("#prescription");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    

    if (
        patient.value.trim() === "" ||
        diagnostic.value.trim() === "" ||
        prescription.value.trim() === ""
    ) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    

    const confirmation = confirm(
        "Patient : " + patient.value +
        "\n\nDiagnostic : " + diagnostic.value +
        "\n\nPrescription : " + prescription.value +
        "\n\nEnregistrer cette ordonnance ?"

    );
    if (!confirmation) {
        return;
    }

    
    alert("Ordonnance enregistrée avec succès !");
    form.reset();

});