<?php
// Chemin du fichier JSON
$jsonFilePath = 'cargaison.json';

// Vérifie si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupère les données du formulaire
    $distance = $_POST['distance'];
    $type = $_POST['type-cargaison'];

    // Charge les données existantes du fichier JSON
    $jsonData = file_get_contents($jsonFilePath);
    $cargaison = json_decode($jsonData, true);

    // Ajoute la nouvelle cargaison au tableau de cargaisons
    $cargaison[] = array(
        'type' => $type,
        'distance' => $distance
    );

    // Convertit le tableau en format JSON
    $newJsonData = json_encode($cargaison, JSON_PRETTY_PRINT);

    // Écrit les données JSON dans le fichier
    if (file_put_contents($jsonFilePath, $newJsonData)) {
        echo "La cargaison a été ajoutée avec succès au fichier JSON.";
    } else {
        echo "Erreur lors de l'écriture des données dans le fichier JSON.";
    }
}
?>
