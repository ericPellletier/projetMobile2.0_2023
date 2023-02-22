<?php
require_once "Joueur.php";

class Accesseur{
    public static $basededonnees = null;

		public static function initialiser()
		{
			$usager = 'sqlpied';
			$motdepasse = '$pied123';
			$hote = 'localhost';
			$base = 'asteroidJeu';
            $charset = 'utf8mb4';
			$dsn = 'mysql:dbname='.$base.';host='.$hote.';charset='.$charset;
			JoueurDAO::$basededonnees = new PDO($dsn, $usager, $motdepasse,  array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));
			JoueurDAO::$basededonnees->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}
}

class JoueurDAO extends Accesseur{

    public static function listerJoueurs()
    {
        JoueurDAO::initialiser();

        $demandeJoueurs = JoueurDAO::$basededonnees->prepare("SELECT id,position,nom,score,musique FROM joueur");
        $demandeJoueurs->execute();
        //$contrats = $demandeContrats->fetchAll(PDO::FETCH_OBJ);
        $joueursTableau = $demandeJoueurs->fetchAll(PDO::FETCH_ASSOC);
        foreach($joueursTableau as $joueurTableau) $joueurs[] = new Joueur($joueurTableau);
        return $joueurs;
    }
}