let diceKinds = ["100","20","12","10","8","6","4"];
//console.log (diceKinds) ;

function createDices (diceKind){
    let dicesTop = 20;
    diceKind.forEach(function(element) {
       // let divname = 'd' + element + 'div';
       
        let div = document.createElement("div");
        div.className = 'd' + element + 'div';
        document.getElementsByClassName('back')[0].appendChild(div);
        div.classList.add("dice");
        div.style.top = dicesTop + 'px';
        div.style.background = `url(./image/d${element}.png) center /contain no-repeat`;
                
        let h1 = document.createElement("h1");
        h1.className = 'd' + element + 'divValue';
        h1.textContent = 'd' + element;
        document.getElementsByClassName(div.className)[0].appendChild(h1);
        h1.classList.add("diceValue");

        div.onclick = function() {
            diceClick(div,h1,element);
        };

        dicesTop+= 120;
          
     console.log (div) ;
    });

}

function diceClick (div,h1,maxvalue){
    let time = 2500;
    rotate(div,h1);
    setTimeout(removeRotate, time, div);
    setTimeout(diceRandom,time,h1,maxvalue);

}

function diceRandom (hh,maxvalue) {

    hh.textContent = Math.floor(Math.random() * maxvalue) + 1;
}

function rotate(div,hh){
    //console.log(div);
    hh.textContent ='???';
    div.classList.add("rotate");
    
    }

function removeRotate(div) {
    //document.getElementsByClassName(div)[0].classList.remove("rotate");
    div.classList.remove("rotate");    
}

createDices(diceKinds);