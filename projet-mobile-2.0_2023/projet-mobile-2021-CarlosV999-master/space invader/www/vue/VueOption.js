class VueOption
{

    constructor()
    {
        this.html = document.getElementById("html-vue-option").innerHTML;
        this.modifierOption = null;
    }

    afficher()
    {

        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("id").value = this.modifierOption.id;
        document.getElementById("position").value = this.modifierOption.position;
        document.getElementById("nom").value = this.modifierOption.nom;
        document.getElementById("score").value = this.modifierOption.score;
        document.getElementById("musique").value = this.modifierOption.musique;
        document.getElementById("effets-sonores").value = this.modifierOption.effets;
        

        document.getElementById("formulaire-option").addEventListener("submit", evenement => this.modifier(evenement));

    }

    modifier(evenement)
    {
        evenement.preventDefault();

        let id = document.getElementById("id").value;
        let position = document.getElementById("position").value;
        let nom = document.getElementById("nom").value
        let score = document.getElementById("score").value
        let musique = document.getElementById("musique").value;
        let effets = document.getElementById("effets-sonores").value;
        
        this.modifierOption(new Joueur(id, position, nom, score, musique, effets));
    }

}