maDiv = document.getElementById("button");
maDiv.addEventListener("click", jourDeLaSemaine);
var min=1; 
var max=10;  
var random = Math.floor(Math.random() * (max - min)) + min; 

function jourDeLaSemaine(){
    switch (random){
        case 1:
            alert('nous sommes lundi')
        case 2:
            alert('nous sommes mardi')
        case 3:
            alert('nous sommes mercredi')
        case 4:
            alert('nous sommes jeudi')
        case 5:
            alert('nous sommes vendredi')
        case 6:
            alert('nous sommes samedi')
        case 7:
            alert('nous sommes dimanche')
    }
}
