var plaatjes= document.getElementsByTagName("img");
var random = 0;
var randomNumber = [];

while (randomNumber.length < 9){
    random =Math.floor(Math.random() * 9) + 1;
    if (randomNumber.lastIndexOf(random)== -1){
        randomNumber.push(random);
    }
}

random = 0;
for (var plaatje in plaatjes){
plaatjes[plaatje].src="img/logo" + randomNumber[random] + ".jpg";
random++;
}