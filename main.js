maDiv = document.getElementById("button");
maDiv.addEventListener("click", calcul);

function calcul(evenement) {
    var longueur = window.prompt('Quel rayon ?');
    var aire = (longueur * longueur) * Math.PI;
    var perimetre = (2*(longueur)) * Math.PI;
    alert("aire :"+ aire + "périmètre :" + perimetre);
}
