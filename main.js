var maDiv = document.getElementById("button")
maDiv.addEventListener("click", Click);

function Click(evenement) {
    var longueur = window.prompt('Quelle longueur ?');
    var largeur = window.prompt('Quelle largeur ?');
    var aire = longueur * largeur;
    var perimetre = (largeur + longueur)*2;
    alert("aire :"+ aire + "périmètre :" + perimetre);
}
