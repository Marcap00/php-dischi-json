<?php
// Recuperiamo i dati dal file json
$records = file_get_contents("../db/dischi.json");

header("Content-Type: application/json");
// Restituiamo i dati 
echo $records;
