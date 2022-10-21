var kv;
var n; var n1; var n2;
var n0; // = n/2; požívané pri printe
var h;
var b;
var l;
var alfa;
var alfatg; // alfa tangens - nezaokruhlena (resp. menej zaokruhlena) hodnota alfa
var h1;
var h2;
var rameno; // šírka ramena
var podesta;
var medzipodesta;
var printnadpis = "NÁVRH SCHODISKA"

/***
FUNCTION THAT SAVED MY LIFE 

God bless whoever made this video:
https://www.youtube.com/watch?v=0pqLp51w7dw&ab_channel=Telusko

var element = document.getElementsByClassName("kv");
    for(var i=0; i < element.length; i++){
        element[i].innerHTML = kv;
    }
*/


function getTyp(){
    if (document.getElementById("jednoramenne").checked){
            document.getElementById("dvojramenne").disabled = true;
            document.getElementById("dotaznik-kv").style.display = "inline";
    } else if (document.getElementById("dvojramenne").checked){
            document.getElementById("jednoramenne").disabled = true;
            document.getElementById("dotaznik-kv").style.display = "inline";
    }
    document.getElementById("kv").focus();
}

function getKv(){
    if (document.getElementById("kv").value > 0){
        kv = document.getElementById("kv").value;
        document.getElementById("kv-button").disabled = true;
        document.getElementById("dotaznik-n").style.display = "inline";
        
        let element = document.getElementsByClassName("kv");
        for(let i=0; i < element.length; i++){
            element[i].innerHTML = kv;
        }

        getN()
    }
}

function getN(){
    n = Math.round(kv/170 * 100) / 100
    let element = document.getElementsByClassName("kv/170");
        for(let i=0; i < element.length; i++){
            element[i].innerHTML = Math.round((kv/170) * 100) / 100;
        }
    
    if (document.getElementById("jednoramenne").checked){
        n1 = Math.floor(n);
        n2 = Math.ceil(n);
        let element12 = document.getElementsByClassName("print-dvojramenne");
        for(let i=0; i < element12.length; i++){
            element12[i].style.display = "none";
        }
    } else if (document.getElementById("dvojramenne").checked){
        n1 = Math.floor(n)
        if (n1 % 2 == 1){
            n1 -= 1
        }
        n2 = Math.ceil(n)
        if (n2 % 2 == 1){
            n2 += 1
        }
        let element13 = document.getElementsByClassName("print-jednoramenne");
        for(let i=0; i < element13.length; i++){
            element13[i].style.display = "none"
        }
    }
    
    document.getElementById("n1-label").innerHTML = n1 + " stupňov";
    document.getElementById("n2-label").innerHTML = n2 + " stupňov";
    
    if (kv/n1 > 180){
        document.getElementById("n1-label").style.color = "rgba(255, 255, 255, 0.75)";
        document.getElementById("n1-label").innerHTML = n1 + " stupňov (nevyhovuje norme)"
    } if (kv/n2 > 180){    
        document.getElementById("n2-label").style.color = "rgba(255, 255, 255, 0.75)";
        document.getElementById("n2-label").innerHTML = n2 + " stupňov (nevyhovuje norme)"
    }
    
    if (document.getElementById("n1").checked || document.getElementById("n2").checked){
        document.getElementById("dotaznik-rameno").style.display = "inline";
        getRameno()
    }
}

function getRameno(){
    if (document.getElementById("n1").checked){
        document.getElementById("n2").disabled = true;
        n = n1;
        h = Math.round((kv/n) / 5) * 5;
        b = 630 - 2 * h;
        document.getElementById("dotaznik-l-jednoramenne").style.display = "inline";
        document.getElementById("dotaznik-rameno").style.display = "inline";
        document.getElementById("dotaznik-rameno1").style.display = "inline";
        document.getElementById("rameno").focus()
    } if (document.getElementById("n2").checked){
        document.getElementById("n1").disabled = true;
        n = n2;
        h = Math.round((kv/n) / 5) * 5;
        b = 630 - 2 * h;
        document.getElementById("dotaznik-l-dvojramenne").style.display = "inline";
        document.getElementById("dotaznik-rameno").style.display = "inline";
        document.getElementById("dotaznik-rameno1").style.display = "inline";
        document.getElementById("rameno").focus()
    }
    
    if (document.getElementById("jednoramenne").checked){
        l = (n - 1) * b;
    } else if (document.getElementById("dvojramenne").checked) {
        l = (n/2 - 1) * b;
    }

    if (document.getElementById("rameno").value > 0){
        rameno = document.getElementById("rameno").value;
        document.getElementById("rameno-button").disabled = true;
        document.getElementById("dotaznik-rameno1").style.display = "none";
        document.getElementById("dotaznik-rameno2").style.display = "inline";
        let element = document.getElementsByClassName("rameno");
        for(let i=0; i < element.length; i++){
            element[i].innerHTML = rameno;
        }
        
        getH()
    }
}

function getH(){
    n0 = n/2;
    podesta = Number(rameno) + 100;
    medzipodesta = rameno;
    alfatg = Math.round((Math.atan(h/b) * 180/Math.PI) * 100) / 100;
    alfa = Math.round(alfatg);
    h1 = Math.round(1500 + (750/(Math.cos(alfa * (Math.PI/180)))));
    h2 = Math.round(750 + 1500 * Math.cos(alfa * (Math.PI/180)));

    let element1 = document.getElementsByClassName("kv");
        for(let i=0; i < element1.length; i++){
            element1[i].innerHTML = kv;
        }
    
    let element2 = document.getElementsByClassName("n");
        for(let i=0; i < element2.length; i++){
            element2[i].innerHTML = n;
        }
        
    let element3 = document.getElementsByClassName("h");
    for(let i=0; i < element3.length; i++){
        element3[i].innerHTML = h;
    }

    let element4 = document.getElementsByClassName("b");
    for(let i=0; i < element4.length; i++){
        element4[i].innerHTML = b;
    }
    
    let element5 = document.getElementsByClassName("l");
    for(let i=0; i < element5.length; i++){
        element5[i].innerHTML = l;
    }

    let element6 = document.getElementsByClassName("alfa");
    for(let i=0; i < element6.length; i++){
        element6[i].innerHTML = alfa;
    }
    
    let element7 = document.getElementsByClassName("h1");
    for(let i=0; i < element7.length; i++){
        element7[i].innerHTML = h1;
    }

    let element8 = document.getElementsByClassName("h2");
    for(let i=0; i < element8.length; i++){
        element8[i].innerHTML = h2;
    }

    let element9 = document.getElementsByClassName("n1");
    for(let i=0; i < element9.length; i++){
        element9[i].innerHTML = n1;
    }

    let element10 = document.getElementsByClassName("n2");
    for(let i=0; i < element10.length; i++){
        element10[i].innerHTML = n2;
    }

    let element11 = document.getElementsByClassName("n0");
    for(let i=0; i < element11.length; i++){
        element11[i].innerHTML = n0;
    }

    let element12 = document.getElementsByClassName("podesta");
    for(let i=0; i < element12.length; i++){
        element12[i].innerHTML = podesta;
    }

    let element13 = document.getElementsByClassName("medzipodesta");
    for(let i=0; i < element13.length; i++){
        element13[i].innerHTML = medzipodesta;
    }
    
    let element14 = document.getElementsByClassName("alfatg");
    for(let i=0; i < element14.length; i++){
        element14[i].innerHTML = alfatg;
    }

    
    
    document.getElementById("dotaznik-h").style.display = "inline";
    document.getElementById("dotaznik-b").style.display = "inline";
    document.getElementById("dotaznik-l").style.display = "inline";
    document.getElementById("dotaznik-podesta").style.display = "inline";
    document.getElementById("dotaznik-medzipodesta").style.display = "inline";
    document.getElementById("dotaznik-alfa").style.display = "inline";
    document.getElementById("dotaznik-h1").style.display = "inline";
    document.getElementById("dotaznik-h2").style.display = "inline";
    document.getElementById("printbutton").style.display = "inline";
    
    if (h1 > 2100){
        document.getElementById("dotaznik-h1-vyhovuje").style.display = "inline";
        document.getElementById("print-h1-vyhovuje").style.display = "inline";
        document.getElementById("print-h1-nevyhovuje").style.display = "none";
    } else {
        document.getElementById("dotaznik-h1-nevyhovuje").style.display = "inline";
        document.getElementById("print-h1-nevyhovuje").style.display = "inline";
        document.getElementById("print-h1-vyhovuje").style.display = "none";
        
    }
    
    if (h2 > 1900) {
        document.getElementById("dotaznik-h2-vyhovuje").style.display = "inline";
        document.getElementById("print-h2-vyhovuje").style.display = "inline";
        document.getElementById("print-h2-nevyhovuje").style.display = "none";
    } else {
        document.getElementById("dotaznik-h2-nevyhovuje").style.display = "inline";
        document.getElementById("print-h2-nevyhovuje").style.display = "inline";
        document.getElementById("print-h2-vyhovuje").style.display = "none";
    }
}

function reset(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    // reset all buttons and inputs
    document.getElementById("jednoramenne").checked = false;
    document.getElementById("dvojramenne").checked = false;
    document.getElementById("jednoramenne").disabled = false;
    document.getElementById("dvojramenne").disabled = false;
    document.getElementById("kv").value = "";
    document.getElementById("kv-button").disabled = false;
    document.getElementById("n1").checked = false;
    document.getElementById("n2").checked = false;
    document.getElementById("n1").disabled = false;
    document.getElementById("n2").disabled = false;
    document.getElementById("rameno").value = "";
    document.getElementById("rameno-button").disabled = false;

    // hide all unwanted elements
    document.getElementById("dotaznik-kv").style.display = "none";
    document.getElementById("dotaznik-n").style.display = "none";
    document.getElementById("dotaznik-h").style.display = "none";
    document.getElementById("dotaznik-b").style.display = "none";
    document.getElementById("dotaznik-l").style.display = "none";
    document.getElementById("dotaznik-l-jednoramenne").style.display = "none";
    document.getElementById("dotaznik-l-dvojramenne").style.display = "none";
    document.getElementById("dotaznik-rameno").style.display = "none";
    document.getElementById("dotaznik-rameno1").style.display = "none";
    document.getElementById("dotaznik-rameno2").style.display = "none";
    document.getElementById("dotaznik-podesta").style.display = "none";
    document.getElementById("dotaznik-medzipodesta").style.display = "none";
    document.getElementById("dotaznik-alfa").style.display = "none";
    document.getElementById("dotaznik-h1").style.display = "none";
    document.getElementById("dotaznik-h1-vyhovuje").style.display = "none";
    document.getElementById("dotaznik-h1-nevyhovuje").style.display = "none";
    document.getElementById("dotaznik-h2").style.display = "none";
    document.getElementById("dotaznik-h2-vyhovuje").style.display = "none";
    document.getElementById("dotaznik-h2-nevyhovuje").style.display = "none";
    document.getElementById("nadpis").style.display = "none";
    document.getElementById("nadpis-button").style.display = "none";
    
    
    
    let element = document.getElementsByClassName("print-jednoramenne");
    for(let i=0; i < element.length; i++){
        element[i].style.display = "inline"
    }let element2 = document.getElementsByClassName("print-dvojramenne");
    for(let i=0; i < element2.length; i++){
        element2[i].style.display = "inline"
    }
    document.getElementById("print-h1-vyhovuje").style.display = "inline";
    document.getElementById("print-h1-nevyhovuje").style.display = "inline";
    document.getElementById("print-h2-vyhovuje").style.display = "inline";
    document.getElementById("print-h2-nevyhovuje").style.display = "inline";
}

function printpage(x){
    if (x == 1){
        document.getElementById("nadpis").style.display = "inline";
        document.getElementById("nadpis-button").style.display = "inline";
        document.getElementById("nadpis").focus()
    }
    if (x == 2){
        if (document.getElementById("nadpis").value !== ""){
            printnadpis = document.getElementById("nadpis").value
            document.getElementById("printnadpis").innerHTML = printnadpis.toUpperCase();
            document.title = window.parent.document.title = printnadpis;
        }
        window.print();
        document.title = window.parent.document.title = "Cypo | Návrh schodiska";
    }
}
