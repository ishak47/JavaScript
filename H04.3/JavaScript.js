var plaatjesOgen = [1,2,3,4,5];
var plaatjesNeus = [1,2,3,4,5];
var plaatjesMond = [1,2,3,4,5];

var tellerOgen = 0;
var tellerNeus = 0;
var tellerMond = 0;

//image
var ogenholder =document.getElementById("ogen");
ogenholder.style.backgroundImage = "url('img-crook/Ogen/crookOgen1.jpg')";

var neusholder = document.getElementById("neus");
neusholder.style.backgroundImage = "url('img-crook/Neuzen/crookNeus1.jpg')";

var mondholder = document.getElementById("mond");
mondholder.style.backgroundImage = "url('img-crook/Monden/crookMond1.jpg')";

//click
ogenholder.addEventListener("click", function (){
    ogenholder.style.backgroundImage = "url('img-crook/Ogen/crookOgen"+getOgen()+".jpg')";
});

neusholder.addEventListener("click", function (){
    neusholder.style.backgroundImage = "url('img-crook/Neuzen/crookNeus"+getNeus()+".jpg')";
});

mondholder.addEventListener("click",function (){
    mondholder.style.backgroundImage = "url('img-crook/Monden/crookMond"+getMond()+".jpg')";
});

//function
function getOgen(){
    if (tellerOgen>= plaatjesOgen.length){
        tellerOgen=1;
    }else {
        tellerOgen++;
    }
    return tellerOgen;
}

function getNeus(){
    if (tellerNeus>=plaatjesNeus.length){
        tellerNeus= 1;
    }else{
        tellerNeus++;
    }
    return tellerNeus;
}

function getMond(){
    if (tellerMond>= plaatjesMond.length){
        tellerMond = 1;
    }else{
        tellerMond++;
    }
    return tellerMond;
}