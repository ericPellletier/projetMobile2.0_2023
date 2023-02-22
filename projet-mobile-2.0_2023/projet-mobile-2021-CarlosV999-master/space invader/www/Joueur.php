<?php

class Joueur
{
	public static $filtres = 
		array(
			'id' => FILTER_VALIDATE_INT,
			'position' => FILTER_SANITIZE_ENCODED,
			'nom' => FILTER_SANITIZE_ENCODED,
			'score' => FILTER_SANITIZE_ENCODED,
			'musique' => FILTER_SANITIZE_ENCODED,
		);
		
	public $position;
	public $nom;
	public $score;
	public $musique;
	
	public function __construct($tableau)
	{
		$tableau = filter_var_array($tableau, Joueur::$filtres);

		$this->id = $tableau['id'];
		$this->position = $tableau['position'];
		$this->nom = $tableau['nom'];
		$this->score = $tableau['score'];
		$this->musique = $tableau['musique'];
	}
	
	public function __set($propriete, $valeur)
	{
		switch($propriete)
		{
			case 'id':
				$this->id = $valeur;
			break;
			case 'position':
				$this->position = $valeur;
			break;
			case 'nom':
				$this->nom = $valeur;
			break;
			case 'score':
				$this->score = $valeur;
			break;
			case 'musique':
				$this->musique = $valeur;
			break;
		}
	}

	public function __get($propriete)
	{
		//$variable = '$this->'.$propriete;
		//return $$variable;
		$self = get_object_vars($this); // externaliser pour optimiser
		//print_r($self);
		return $self[$propriete];
	}	
}
//$contrat = new Contrat();
//$contrat->titre = "coucou";
//echo $contrat->titre;
?>