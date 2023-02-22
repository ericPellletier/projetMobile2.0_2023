class JeuDAO
{
    constructor()
    {
        this.banqueJoueurs = {id:0, position:1, nom:"LeTueur", score:666, musique:true, effets:true};
    }

    lister()
    {
        
            let joueur = new Joueur(this.banqueJoueurs.id,
                                    this.banqueJoueurs.position,
                                    this.banqueJoueurs.nom,
                                    this.banqueJoueurs.score,
                                    this.banqueJoueurs.musique,
                                    this.banqueJoueurs.effets);
        
        return joueur;    

    }

    modifier(joueur)
    {
        joueur.id = this.banqueJoueurs.id;
        joueur.position = this.banqueJoueurs.position;
        joueur.nom = this.banqueJoueurs.nom;
        joueur.score = this.banqueJoueurs.score;
        joueur.musique = this.banqueJoueurs.musique;
        joueur.effets = this.banqueJoueurs.effets;
    }

}