maDiv = document.getElementById("button");
maDiv.addEventListener("click", soustrait);

maDiv = document.getElementById("button");
maDiv.addEventListener("click", affiche);

var tab=[-2, 1, 4];
function soustrait(x){
    if(x >= 0){
        return x - 2;
    } else {
        return "Nombre négatif !";
    }
}

function affiche(){
    for(var i = 0; i < tab.length; i++){
        alert("voici la valeur du tableau à l'emplacement" + i + ":" + tab[i]);
    }
}
