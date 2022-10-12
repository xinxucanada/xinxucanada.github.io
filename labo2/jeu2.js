let cartes = document.querySelector(".cartes");
        // let table2 = document.querySelector("#tb2");
        let listX = [];
        let listY = [];
        function initial() {
            for (let i = 0; i < 4; i++) {
            let ul = document.createElement("ul");
            let indexY = i * 216;
            for (let j = 0; j < 13; j++) {
                let indexX = j * 149;
                let li = document.createElement("li");
                li.style.backgroundPositionY =  -indexY + 'px';
                li.style.backgroundPositionX =  -indexX + "px";
                listX.push(-indexX + "px");
                listY.push(-indexY + "px");
    
                ul.appendChild(li);
            }
            cartes.appendChild(ul);
            let br = document.createElement("br");
            cartes.appendChild(br);
            
        }
         
        }
        initial()
        let lis = document.querySelectorAll("li");
        function affichage() {
            for (let i = 0; i < 52; i++) {
                lis[i].style.backgroundPositionX = listX[i];
                lis[i].style.backgroundPositionY = listY[i];
            }
        }

        function decouper(liste) {
            let newliste = [];
            for (let i = 0, j = 26; i < 26; i++, j++ ) {
                newliste.push(liste[i]);
                newliste.push(liste[j]);
            }
            return newliste;
        }

        let listtest = []
        for (i=1;i<=52;i++) {
            listtest.push(i);
        }
        console.log(listtest);

        console.log(decouper(listtest));

        function brassage() {
            listX = decouper(listX);
            listY = decouper(listY);
            affichage()
        }

        let btn2 = document.querySelector("#brassage2");
        btn2.addEventListener("click", brassage);
        