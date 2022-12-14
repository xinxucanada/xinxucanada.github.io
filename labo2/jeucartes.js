// creer tableau 13 x 4, remplir par les images
let table = document.querySelector("table");
for (let i = 0; i < 4; i++) {
    let tr = document.createElement("tr")
    for (j = 1; j < 14; j++) {
        let td = document.createElement("td");
        let img = document.createElement("img");
        img.src = "images/" + (i * 13 + j) + ".jpg"; 
        td.appendChild(img);
        tr.appendChild(td);
    }
    table.appendChild(tr)
}
let btnBrassage = document.querySelector("#brassage")
let btnInitial = document.querySelector("#init")
let imgs = document.querySelectorAll('img')
let cartes = [];
let carteschange = [];

// creer une liste int 1 à 52

function initial() {
    cartes = [];
    carteschange = [];
    for (let i = 1; i < 53; i++) {
    
    cartes.push(i);
    carteschange.push(i);
    affichage()
}
}
initial()

function affichage() {
    let k = 0;
    let timer = setInterval(function() {
        if (k < 52) {
            imgs[k].src = "images/" +  carteschange[k] + ".jpg"; 
            k++;
        } else {
            clearInterval(timer);
        }
    },20);
}

btnBrassage.addEventListener("click", brassage)

function brassage () {
    for (i = 0, j = 26; i < 26; i++, j++) {
        carteschange[i * 2] = cartes[i];
        carteschange[i * 2 + 1] = cartes[j];
    }
    affichage();
    cartes = []
    for (let i = 0; i < 52; i++) {
        cartes.push(carteschange[i]);
    }
}

btnInitial.addEventListener("click", initial)