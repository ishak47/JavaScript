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