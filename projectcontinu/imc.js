let btn = document.querySelector('button');
        let tds = document.querySelectorAll('input');
        let rlt = document.querySelector('#rlt');

        let sys = document.querySelector(".entree").querySelectorAll("th");
      
        function mesure() {
            let slt = document.querySelector('#mySelect');
            let i = slt.selectedIndex;
            if (i == 1) {
                sys[0].innerHTML = "Poids (lbs)";
                sys[1].innerHTML = "Taille (pouce)";
            } else {
                sys[0].innerHTML = "Poids (kgs)";
                sys[1].innerHTML = "Taille (m)";
            }
        }

       

        btn.onclick = function() {
            let slt = document.querySelector('#mySelect');
            let i = slt.selectedIndex;
            console.log(i);
            let imc = parseFloat(tds[0].value) /((parseFloat(tds[1].value) )** 2 );
            if (i == 1) {
                imc = parseFloat(tds[0].value) * 0.4536 /((parseFloat(tds[1].value) * 0.3048)** 2 );
            }
            
            imc = imc.toFixed(2);
            rlt.innerHTML = imc;
            
        }
