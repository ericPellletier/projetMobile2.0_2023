# projet-initial

##Jeux type space invader

- Architecture: Cordova
- Gesture: swipe vers un autre écran
- Données distantes: BDD pour les scores et les joueurs (XML)
- Librairie: https://createjs.com/
- Composant de l’appareil: GPS (pour le scoreboard local)

Résumé : 

Le projet est un shoot'em up fixe en deux dimensions. 

L'écran d'accueil affiche le nom du jeu, un boutton play qui lorsqu'il est pressé lance une partie. Le joueur à la possiblité en faisant un swipe sur la gauche d'afficher une page qui affiche les highscore des joueurs dans la région du joueur local (cette fonctionnalité utilise le GPS du téléphone).

Le joueur contrôle un canon laser qu'il peut déplacer horizontalement, au bas de l'écran. Dans les airs, des rangées d'aliens se déplacent latéralement tout en se rapprochant progressivement du sol et en lançant des missiles. L'objectif est de détruire avec le canon laser une vague ennemie, qui se compose de cinq rangées de onze aliens chacune, avant qu'elle n'atteigne le bas de l'écran. Le joueur gagne des points à chaque fois qu'il détruit un envahisseur. Le score du joueur est affiché en haut de l'écran avec sont Highscore. Le jeu n'autorise qu'un tir à la fois et permet d'annuler ceux des ennemis en tirant dessus. La vitesse et la musique s'accélèrent au fur et à mesure que le nombre d'aliens diminue. L'élimination totale de ces derniers amène une nouvelle vague ennemie plus difficile, et ce indéfiniment. Le jeu ne se termine que lorsque le joueur perd toutes ses vies qui sont représentés par un modèle de canons en dehors du champ de jeu.

Les aliens tentent de détruire le canon en tirant dessus pendant qu'ils s'approchent du bas de l'écran. S'ils l'atteignent ou arrivent jusqu'au sol, ils ont réussi leur invasion et le jeu est fini. De temps en temps, un vaisseau spatial apparait tout en haut de l'écran et fait gagner des points bonus s'il est détruit. Quatre bâtiments destructibles permettent au joueur de se protéger des tirs ennemis. Ces défenses se désintègrent progressivement sous l'effet des projectiles adverses et de ceux du joueur.

L'écran de fin du jeu est un popup avec en arrière plan la partie mis en pause. Le popup affiche un message "Game Over" avec le score indiqué en dessous ainsi que le highscore encore en dessous. Un boutton permettra au joueur de relancer une nouvelle partie, un autre boutton mènera au menu.

**Protocole**:
Première ouverture -> Verification du local storage si pseudo déjà existant, si oui il récupère les données, sinon il créer le joueur et et récupère les infos.
Menu swipe vers Classement -> récupère le nom du joueur et le highscore puis l'affiche Et la liste des noms + HS de toute la BDD et les trie et les affiche.
Vue option -> récupère et affiche dans le champ pseudo le pseudo actuel et permet la modification. Envoie une requête pour le modifier lorsque le joueur appuie sur le boutton d'enregistrement.
Vue Jeu et game over -> Si highscore modifié met à jour le high score et le rcupère pour afficher. 
Réouverture de l'application -> récupération highscore et pseudo via l'id enregistré.

**Échantillons des données échangées**:
JSON

vidéo de présentation du projet en fin de semestre : https://youtu.be/Fmgze4CLdKk
