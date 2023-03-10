maDiv = document.getElementById("button");
maDiv.addEventListener("click", boucle);
maDiv = document.getElementById("button2");
maDiv.addEventListener("click", boucle2);
// tab.length
function boucle(){
    let tab=new Array(3);
    for(var i = 0; i < 3; i++){
        tab[i]= i*i;
    }
    alert("voici les éléments du tableau :"+ tab[0] + ',' + tab[1] + ',' + tab[2]);

    
}

function boucle2(){
    var nbr = window.prompt("saisissez la longueur souhaitée pour le tableau :");
    let tab=new Array(nbr);
    for(var i = 0; i < nbr; i++){
        tab[i]= i*i;
    }
    alert("voici les éléments du tableau :"+ tab);  
}