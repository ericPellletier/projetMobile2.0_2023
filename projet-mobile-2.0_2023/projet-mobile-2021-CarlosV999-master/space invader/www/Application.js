class Application
{
    constructor(window, classementDAO, vueMenu, jeuDAO, vueClassement, vueJeu, vueFinDuJeu, vueOption)
    {
        this.window = window;
        this.vueMenu = vueMenu;
        this.vueJeu = vueJeu;
        this.jeuDAO = jeuDAO;
        this.vueFinDuJeu = vueFinDuJeu;
        this.vueClassement = vueClassement;
        this.classementDAO = classementDAO;
        this.vueOption = vueOption;
        this.vueMenu.afficher();
        //this.vueClassement.initialiserListeClassement(this.classementDAO.lister());
        //this.vueClassement.afficher();
        //this.vueFinDuJeu.afficher();
        //this.vueJeu.afficher();

        this.window.addEventListener("hashchange", () =>this.naviguer());
        
        this.naviguer();
        
    }

    actionModifierOption(joueur)
    {
        this.jeuDAO.modifier(joueur);
        this.window.location.hash = "#";
    }

    actionReceptionClassement(listeClassement)
    {
      this.vueClassement.afficherListe(listeClassement);
    }

    naviguer(){
        let hash = window.location.hash;
        console.log(hash);
        if(!hash){
            //this.vueFinDuJeu.afficher();
            //this.vueClassement.afficher();
            this.vueMenu.afficher();    
        }
        else if(hash.match(/^#jouer/)){
    
            this.vueJeu.afficher();
            this.vueJeu.jouer();
          }
          else if(hash.match(/^#options/))
          {
            this.vueOption.afficher();
          }
          else if(hash.match(/^#classement/))
          {
            console.log("Application.js->naviguer()->classement");
            this.vueClassement.afficher();
            this.classementDAO.lister(listeClassement =>this.actionReceptionClassement(listeClassement));
          }
          else if(hash.match(/^#findejeu/))
          {
            this.vueFinDuJeu.afficher();
          }
          
      }



}

new Application(window, new ClassementDAO(), new VueMenu(), new JeuDAO(), new VueClassement(), new VueJeu(), new VueFinDuJeu(), new VueOption());
