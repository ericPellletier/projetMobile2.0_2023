<?php
require "Joueur.php";
require "JoueurDAO.php";

$listeJoueur = JoueurDAO::listerJoueurs();

$jsonJoueur = json_encode($listeJoueur);

echo($jsonJoueur);
?>