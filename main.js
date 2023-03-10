maDiv = document.getElementById("button");
maDiv.addEventListener("click", affiche);

var a = 3;
var b = 2;

function multiplier(x = 8){
    return x * 3;
}
function affiche(){
    alert("fonction avec a :" + multiplier(a));
    alert("fonction avec b :" + multiplier(b));
    alert("fonction avec x :" + multiplier());
}
