class VueClassement{
    constructor(){
      this.html = document.getElementById("html-vue-classement").innerHTML;
    }


    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        //this.pan();
      }

      afficherListe(listeClassementDonnee)
      {
        let listeClassement = document.getElementById("container");
        const listeClassementItemHTML = listeClassement.innerHTML;
        let listeClassementHTMLRemplacement = "";
    
        for(var numeroClassement in listeClassementDonnee){
          let listeClassementItemHTMLRemplacement = listeClassementItemHTML;
          listeClassementItemHTMLRemplacement = listeClassementItemHTMLRemplacement.replace("{Classement.position}",listeClassementDonnee[numeroClassement].position);
          listeClassementItemHTMLRemplacement = listeClassementItemHTMLRemplacement.replace("{Classement.nom}",listeClassementDonnee[numeroClassement].nom);
          listeClassementItemHTMLRemplacement = listeClassementItemHTMLRemplacement.replace("{Classement.score}",listeClassementDonnee[numeroClassement].score);
          listeClassementHTMLRemplacement += listeClassementItemHTMLRemplacement;
        }
    
        listeClassement.innerHTML = listeClassementHTMLRemplacement;
      }

      pan(){
        var myElement = document.getElementById("body-classement");
        //console.log(document.getElementById("body-classement").innerHTML);
        var zingTouch = new ZingTouch.Region(document.getElementById("parent"));
        
        zingTouch.bind(myElement, "pan", function(e) {
          let angle = e.detail.data[0].directionFromOrigin;
          if ((angle >= 315 && angle <= 360) || (angle <= 45 && angle >= 0)) {
            (e.detail.events).forEach(_e => _e.originalEvent.preventDefault());
            window.location = "";
            return;
          }
        });
      }
}