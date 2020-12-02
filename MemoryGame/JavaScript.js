var winner = null;
var zetten = 0;
var laatstGeklikt = null;
var volgendeZet = true;

var speler1 = "Amir: ";
var speler2 = "Ishak: ";
var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
var spelers = ["Amir", "Ishak"];

var spelerAanZet = Math.floor(Math.random() * 2);

//aangeroepte methodes
toonScore();
spelerBeurt();

//plaatjes tonen overlay
var plaatjesArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
for (var i =1 ; i <=18 ; i++){
    var blok = document.createElement("div");
    blok.className = "overlay";
    blok.id = i;
    blok.style.background = 'url("img/overlay.jpg")';
    document.getElementById("grid").appendChild(blok);
}

//score van speler

function toonScore(){
    document.getElementById("speler1").innerHTML = speler1;
    document.getElementById("puntenSpeler1").innerHTML = puntenSpeler1;
    document.getElementById("speler2").innerHTML = speler2;
    document.getElementById("puntenSpeler2").innerHTML = puntenSpeler2;
}

//speler aan de beurt
function spelerBeurt(){
    document.getElementById("beurt").innerHTML = spelers[spelerAanZet];
}
