pics = document.getElementById("pics");
createPicsHolder();
createClubImages();

function createPicsHolder(){
    for (var i =0; i<9; i++){
    pictureHolder= document.createElement("div");
    pictureHolder.className = "picture-holder";
    pictureHolder.id - "picture-holder-" + i;
    pics.appendChild(pictureHolder);
    }
}

function createClubImages(){
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolder.length; i++){
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet" + (i+1);
        clubPlaatje = document.createElement("img");
        clubPlaatje.src = "img/logo" + (i+1) + ".jpg";
        clubPlaatje.id = (i+1);
        clubPlaatje.addEventListener("click", function (){
            maakFavoriet(this.id);
        });
        pictureHolder[i].appendChild(favoriet);
        pictureHolder[i].appendChild(clubPlaatje);
    }
}

function maakFavoriet(id){
    console.log("maak mij favo het gaat om logo " + id );
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++){
        notsofavoriet[i].style.backgroundImage ="none";
    }

    favoriet = document.getElementById("favoriet" + id);
    favoriet.style.backgroundImage = "url('img/heart.jpg')";
    console.log(favoriet.style.backgroundImage);
}