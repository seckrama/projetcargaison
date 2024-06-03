<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
/* 
function lireJSON($filename) {
    $json_data = file_get_contents($filename);
    if ($json_data === false) {
        error_log("Erreur de lecture du fichier $filename");
        return [];
    }
    return json_decode($json_data, true);
}

function ecrireJSON($filename, $data) {
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    if (file_put_contents($filename, $json_data) === false) {
        error_log("Erreur d'écriture dans le fichier $filename");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    if ($data !== null) {
        $newCargaison = [ 
            "idcargo" => uniqid(),
            "type" => $data['type'],
            "datedebut" => $data['datedebut'],
            "datefin" => $data['datefin'],
            "distance" => $data['distance'],
        ];

        error_log("Nouvelle cargaison: " . print_r($newCargaison, true));

        $currentData = lireJSON('cargaisons.json');
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier cargaisons.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        $currentData[] = $newCargaison;
        array_unshift($currentData['cargaisons'],$newCargaison);
        ecrireJSON('cargaisons.json', $currentData);

        // Re-lire le fichier pour vérifier
        $verifData = lireJSON('cargaisons.json');
        error_log("Données après écriture: " . print_r($verifData, true));

        echo json_encode(["status" => "success", "message" => "Cargaison ajoutée avec succès"]);
        exit;
    } else {
        echo json_encode(["status" => "error", "message" => "Données non valides"]);
        exit;
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = lireJSON('cargaisons.json');
    if ($data === null) {
        echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
    } else {
        echo json_encode($data);
    }
    exit;
} */



function lireJSON($filename) {
    if (!file_exists($filename)) {
        return ["cargaisons" => []];
    }
    
    $json_data = file_get_contents($filename);
    if ($json_data === false) {
        error_log("Erreur de lecture du fichier $filename");
        return ["cargaisons" => []];
    }
    
    $data = json_decode($json_data, true);
    if ($data === null) {
        error_log("Erreur de décodage JSON pour le fichier $filename");
        return ["cargaisons" => []];
    }
    
    return $data;
}

function ecrireJSON($filename, $data) {
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    if (file_put_contents($filename, $json_data) === false) {
        error_log("Erreur d'écriture dans le fichier $filename");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data !== null) {
        $newCargaison = [

            "idcargo" => uniqid(),
            "codeUnique" => $data['codeUnique'],
            "type" => $data['type'],
            "distance" => $data['distance'],
            "datedebut" => $data['datedebut'],
            "datefin" => $data['datefin'],
            "lieu_depart" => $data['lieu_depart'],
            "lieu_arrive" => $data['lieu_arrive'],




        ];

        error_log("Nouvelle cargaison: " . print_r($newCargaison, true));

        $currentData = lireJSON('cargaisons.json');
        if (!isset($currentData['cargaisons'])) {
            $currentData['cargaisons'] = [];
        }
        
        $currentData['cargaisons'][] = $newCargaison;
        
        ecrireJSON('cargaisons.json', $currentData);

        // Re-lire le fichier pour vérifier
        $verifData = lireJSON('cargaisons.json');
        error_log("Données après écriture: " . print_r($verifData, true));

        echo json_encode(["status" => "success", "message" => "Cargaison ajoutée avec succès"]);
        exit;
    } else {
        echo json_encode(["status" => "error", "message" => "Données non valides"]);
        exit;
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = lireJSON('cargaisons.json');
    if ($data === null) {
        echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
    } else {
        echo json_encode($data);
    }
    exit;
}
?>
