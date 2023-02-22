class VueFinDuJeu{
    constructor(){
        this.html = document.getElementById("html-vue-fin-du-jeu").innerHTML;
        this.score = "230492";
        this.record = "359298";
    }

    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
     
      let listeScore = document.getElementById("container");
      const listeScoreItemHTML = listeScore.innerHTML;
      
      let listeScoreItemHTMLRemplacement = listeScoreItemHTML;
          listeScoreItemHTMLRemplacement = listeScoreItemHTMLRemplacement.replace("{FinDuJeu.record}",this.record);
          listeScoreItemHTMLRemplacement = listeScoreItemHTMLRemplacement.replace("{FinDuJeu.score}",this.score);

          listeScore.innerHTML = listeScoreItemHTMLRemplacement;
    }


}