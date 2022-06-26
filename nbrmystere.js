const MAX_VALUE=10;
let myst=Math.floor(Math.random()*(MAX_VALUE+1));
let compteur = 0;

function check(){
    let test = document.getElementById("valeur").check();
    if (test != -1){
            compteur++;
            if (test > myst)
            document.getElementById("info").innerHTML="Trop grand ";
            
            else if (test < myst)
            document.getElementById("info").innerHTML="Trop petit ";

            else
            document.getElementById("info").innerHTML="Nombre mystère trouvé en "+compteur+" tentatives";
        } 
}


