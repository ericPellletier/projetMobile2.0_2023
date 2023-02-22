const grille = document.querySelector('.grille');
const etatDePartie = document.querySelector('.resultat');
let emplacementJoueur = 202;
let niveau = 1;
let deplacement = 15;
let direction = 1;
let idEnvahisseurs;
let seDeplaceDroite = true;
let envahisseursTues = [];
let pointage = 0;

for(let i = 0; i < 225; i++)
{
    const carre = document.createElement('div')
    grille.appendChild(carre)
}

const miniCarres = Array.from(document.querySelectorAll('.grille div'));

const envahisseurs = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
];

function dessiner() 
{
    for(let i = 0; i < envahisseurs.length; i++)
    {
        if(!envahisseursTues.includes(i))
        {
            miniCarres[envahisseurs[i]].classList.add('envahisseur')
        }

    }
}

dessiner();

function effacer() 
{
    for(let i = 0; i < envahisseurs.length; i++)
    {
        miniCarres[envahisseurs[i]].classList.remove('envahisseur')
    }
}


miniCarres[emplacementJoueur].classList.add('joueur')


function deplacerJoueur(e)
{
    miniCarres[emplacementJoueur].classList.remove('joueur')

    switch(e.key)
    {
        case 'ArrowLeft':
            if(emplacementJoueur % deplacement != 0)
                emplacementJoueur -=1;
            break;
        case 'ArrowRight':
            if(emplacementJoueur % deplacement < deplacement -1)
                emplacementJoueur +=1;
                break;
    }

    miniCarres[emplacementJoueur].classList.add('joueur')
}

document.addEventListener('keydown', deplacerJoueur)

function deplacementEnvahisseurs()
{
    const bordGauche = envahisseurs[0] % deplacement === 0
    const bordDroit = envahisseurs[envahisseurs.length - 1] % deplacement === deplacement - 1
    effacer()

    if(bordDroit && seDeplaceDroite)
    {
        for(let i = 0; i < envahisseurs.length; i++)
        {
            envahisseurs[i] += deplacement +1
            direction = -1
            seDeplaceDroite = false
        }
    }

    if(bordGauche && !seDeplaceDroite)
    {
        for(let i = 0; i < envahisseurs.length; i++)
        {
            envahisseurs[i] += deplacement -1
            direction = 1
            seDeplaceDroite = true;
        }
    }
    for(let i = 0; i < envahisseurs.length; i++)
    {
        envahisseurs[i] += direction
    }
    
    dessiner()

    if(miniCarres[emplacementJoueur].classList.contains('envahisseur', 'joueur'))
    {
        etatDePartie.innerHTML = 'PERDU!!!'
        clearInterval(idEnvahisseurs)
    }
  
    for(let i = 0; i< envahisseurs.length; i++)
    {
      if(envahisseurs[i] > miniCarres.length)
      {
        etatDePartie.innerHTML = 'PERDU!!!'
        clearInterval(idEnvahisseurs)
      }     
    }
    if(envahisseursTues.length === envahisseurs.length)
    {
        etatDePartie.innerHTML = 'Vous avez Gagné!!!'
        clearInterval(idEnvahisseurs)
    }
    
}

idEnvahisseurs = setInterval(deplacementEnvahisseurs, 500)

function tirer(e)
{
    let idTire
    let emplacementTire = emplacementJoueur
    function mouvementTir()
    {
        miniCarres[emplacementTire].classList.remove('tire')
        emplacementTire -= deplacement
        miniCarres[emplacementTire].classList.add('tire')
        
        if(miniCarres[emplacementTire].classList.contains('envahisseur'))
        {
            miniCarres[emplacementTire].classList.remove('tire')
            miniCarres[emplacementTire].classList.remove('envahisseur')
            miniCarres[emplacementTire].classList.add('explosion')
            setTimeout(()=> miniCarres[emplacementTire].classList.remove('explosion'), 50)
            clearInterval(idTire)

            const supprissionDennemis = envahisseurs.indexOf(emplacementTire)
            envahisseursTues.push(supprissionDennemis)
            pointage++
        } 
    }
    
    switch(e.key)
    {
        case 'ArrowUp':
            idTire = setInterval(mouvementTir, 100)
    }
}

document.addEventListener('keydown', tirer)