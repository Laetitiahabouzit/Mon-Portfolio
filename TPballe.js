let balle = document.getElementById('balle');

balle.coord_x = 0;
balle.coord_y = 0;

const deplacer = 2; //Marge de déplacement
const unite = 'px'; //Unité de la marge

balle.delta_x = deplacer;
balle.delta_y = deplacer;

function mvt (){

    let rect = balle.getBoundingClientRect();//Récupère position et dimensions de la balle

    //On ajoute aux coordonnées de la balle, la marge de déplacement
    balle.coord_x += balle.delta_x ;
    balle.coord_y += balle.delta_y ;

    //On ajoute l'unité à la marge
    balle.style.top = balle.coord_y+unite ;
    balle.style.left = balle.coord_x+unite ;

    //Si les coordonnées de la balle sont en contact avec une bordure du body, la balle change de direction
    if(balle.coord_y < 0 || balle.coord_y + rect.height > document.body.clientHeight){
        balle.delta_y = -balle.delta_y ;
    }
    else if(balle.coord_x < 0 || balle.coord_x + rect.width > document.body.clientWidth){
        balle.delta_x = -balle.delta_x ;
    }
}

setInterval(mvt, 10)//Vitesse de déplacement