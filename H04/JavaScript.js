var mijnauto ={
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,

    gasgeven: function (){
        this.snelheid+= 5
        console.log(this.snelheid);
    },

    toeter: function (){
        console.log("toet!")
    }
}

mijnauto.toeter();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();

//4.2
var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img/logo2.jpg')";

slideholder.addEventListener("click", function (){
    getLogo();
    slideholder.style.backgroundImage = "url('img/logo"+getLogo()+".jpg')"
});

function getLogo() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}