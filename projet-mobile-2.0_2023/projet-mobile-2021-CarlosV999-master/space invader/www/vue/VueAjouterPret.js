class VueAjouterPret{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-pret").innerHTML;
        this.actionAjouterPret = null;
    }

    initialiserActionAjouterPret(actionAjouterPret){
        this.actionAjouterPret = actionAjouterPret;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener("submit", evenement =>this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let montant = document.getElementById("pret-montant").value;
        let date = document.getElementById("pret-date").value;
        let description = document.getElementById("pret-description").value;

        this.actionAjouterPret(new Pret(montant, date, description, null));
    }
}