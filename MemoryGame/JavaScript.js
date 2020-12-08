var winner = null;
var zetten = 0;
var laatstGeklikt = null;
var volgendeZet = true;

var speler1 = "Amir: ";
var speler2 = "Ishak: ";
var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
var spelers = ["Amir", "Ishak"];
var winnaarSpeler1 = "amir";
var winnaarSpeler2 = "ishak";

var openKaarten = [null, null];
var spelerAanZet = Math.floor(Math.random() * 2);

//aangeroepte methodes
toonScore();
spelerBeurt();


//de gekozen kaart
var GeklikteKaart = function (){
    if (this.id !== laatstGeklikt && volgendeZet){
        zetten++;
        laatstGeklikt = this.id;
        draaiKaart(this.id);
        if (zetten === 2){
            overeenkomst();
            reseten();
        }
    }
};

//methode overlay weg laten halen
var reageerOpKlik = function (){
    var alleOverlays = document.getElementsByClassName("overlay");
    for (var i = 0; i < alleOverlays; i++) {
        if (plaatjesArray[i] != null){
            alleOverlays[i].style.background = 'url (\"img/overlay.jpg\")';
        }
    }
    button.style.display = 'none';
    zetten = 0;
    laatstGeklikt = null;
    volgendeZet = true;
    veranderSpeler();
    spelerBeurt();
};

//plaatjes tonen overlay
var plaatjesArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
randomize(plaatjesArray);
for (var i =1 ; i <=18 ; i++){
    var blok = document.createElement("div");
    blok.className = "overlay";
    blok.id = i;
    blok.addEventListener('click', GeklikteKaart);
    blok.style.background = 'url("img/overlay.jpg")';
    document.getElementById("grid").appendChild(blok);
}

//overlay verdwijnen en plaatjes tonen
function draaiKaart(id) {
    var blok = document.getElementById(id);
    blok.style.background = 'url("IMG/logo' + plaatjesArray[id - 1] + '.jpg")';
    if (zetten === 1) {
        openKaarten[0] = plaatjesArray[id - 1];
    } else {
        openKaarten[1] = plaatjesArray[id - 1];
    }
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

//kaartjes randomizen
function randomize(plaatjesArray){
    for (var i = 0; i < plaatjesArray.length; i++) {
        var random = Math.floor(Math.random() * plaatjesArray.length);
        var template = plaatjesArray[i];
        plaatjesArray[i] = plaatjesArray[random];
        plaatjesArray[random] = template;
    }
}

//overeenkomst tussen de 2 plaatjes
function overeenkomst(){
    if (openKaarten[0] === openKaarten[1]){
        var winnen = openKaarten[0];
        if (spelerAanZet === 0){
            puntenSpeler1++;
        }else{
            puntenSpeler2++;
        }
        toonScore();
        veranderSpeler();

        var alleOverlays = document.getElementsByClassName("overlay");
        for (var i = 0; i < 18; i++) {
            if (plaatjesArray[i] === winnen){
                alleOverlays[i].removeEventListener("click", GeklikteKaart);
                console.log("verwijderde event" + i);
                plaatjesArray[i] = null;
            }
        }
    }
}

//beurt speler veranderen
function veranderSpeler(){
    if (spelerAanZet === 0){
        spelerAanZet = 1
    }else{
        spelerAanZet = 0
    }
}

//reseten game
function reseten(){
    volgendeZet = false;
    var button = document.getElementById("button")
    if (puntenSpeler1 + puntenSpeler2 <9){
        button.style.display = "block";
    }else{
        winnaar();
    }
    button.addEventListener('click', reageerOpKlik);
    openKaarten = [null, null];
}

//winaar
function winnaar(){
    if (puntenSpeler1 > puntenSpeler2){
        winner = winnaarSpeler1 ;
    }else{
         winner = winnaarSpeler2 ;
    }
    var button = document.getElementById("button");
    button.innerHTML = winner + " wint ";
    button.style.display = 'block';
}