maDiv = document.getElementById("button");
maDiv.addEventListener("click", affiche);
let tab=[-2, 1, 4];
// tab.length
function additionne(x){
        return x+2; 
}

function affiche(){
    alert("fonction additionne le premier élément :" + additionne(tab[0]));
    alert("fonction additionne le dernier élément :" + additionne(tab[tab.length - 1]));
}
