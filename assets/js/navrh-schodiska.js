var kv;
var n; var ncca;
var n1; var n2;
var n0; /* n/2; used in print */
var h; var hcca;
var b;
var l;
var rameno;
var podesta;
var medzipodesta;
var alfa; var alfacca;
var h1;
var h2;

const valuesToFill = [];
const classesToFill = [];

function E(element){
    return document.getElementById(element);
}
function hide(element){
    document.getElementById(element).style.display = "none";
}
function show(element){
    document.getElementById(element).style.display = "inline";
}
function enable(element){
    document.getElementById(element).disabled = false;
}
function disable(element){
    document.getElementById(element).disabled = true;
}
function unfocus(){
    let temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.focus();
    document.body.removeChild(temp);
}
/* val, icl = value, input class */
function fillClasses(val = NaN, icl = NaN){
    let cl = document.querySelectorAll(icl);
    cl.forEach(element=>{
        element.innerHTML = val;
    });
}


function stage1(){
    if (E("jednoramenne").checked){
        disable("dvojramenne");
    } else if (E("dvojramenne").checked){
        disable("jednoramenne")
    }
    show("div-kv");
    show("reset-button")
    E("kv").focus();
}

function stage2(){
    if (E("kv").value > 0){
        kv = E("kv").value;
        hide("kv-button");
        disable("kv-button");
        disable("kv")
        show("div-n");

        unfocus();

        ncca = Math.round((kv/170) * 100) / 100;

        if (E("jednoramenne").checked){
            n1 = Math.floor(ncca);
            n2 = Math.ceil(ncca);    
        } else {
            n1 = Math.floor(ncca);
            if (n1 % 2 == 1){
                n1 -= 1;
            }
            n2 = Math.ceil(ncca);
            if (n2 % 2 == 1){
                n2 += 1;
            }
        }


        if (kv/n1 > 180){
            n1 += 2;
            n2 += 2;
        } else if (kv/n2 > 180){
            n1 -= 2;
            n2 -= 2;
        }

        fillClasses(kv, ".kv");
        fillClasses(ncca, ".ncca");
        fillClasses(n, ".n");
        fillClasses(n1, ".n1");
        fillClasses(n2, ".n2");
    }
}

function stage3(){
    if (E("n1").checked){
        disable("n2");
        n = n1;
    } else if (E("n2").checked){
        disable("n1");
        n = n2;
    }
    n0 = n/2
    
    show("div-rameno");
    show("rameno1");
    E("rameno").focus({preventScroll:true});
}

function stage4(){
    if(E("rameno").value !== ""){
        hide("rameno1");
        show("rameno2")
        unfocus();
        
        /* Round to 5 */
        h = Math.round((kv/n) / 5) * 5;
        hcca = Math.round((kv/n) * 100) / 100
        b = 630 - 2*h;
        
        if(E("jednoramenne").checked){
            l = (n - 1) * b;
            show("div-l-jednoramenne")
        } else {
            l = (n/2 - 1) * b;
            show("div-l-dvojramenne");
        }
        rameno = E("rameno").value;
        podesta = Number(rameno) + 100;
        medzipodesta = rameno;
        alfacca = Math.round((Math.atan(h/b) * 180/Math.PI) * 100) / 100;
        alfa = Math.round(alfacca)
        h1 = Math.round(1500 + (750/(Math.cos(alfa * (Math.PI/180)))));
        h2 = Math.round(750 + 1500 * Math.cos(alfa * (Math.PI/180)));

        fillClasses(h, ".h");
        fillClasses(hcca, ".hcca");
        fillClasses(n, ".n");
        fillClasses(b, ".b");
        fillClasses(l, ".l");
        fillClasses(rameno, ".rameno");
        fillClasses(podesta, ".podesta");
        fillClasses(medzipodesta, ".medzipodesta");
        fillClasses(alfa, ".alfa");
        fillClasses(alfacca, ".alfacca");
        fillClasses(h1, ".h1");
        fillClasses(h2, ".h2");
        
        

        show("div-h");
        show("div-b");
        show("div-l");
        show("div-podesta");
        show("div-medzipodesta");
        show("div-alfa");
        show("div-h1");
        show("div-h2");

        if (h1 > 2100){
            show("h1-vyhovuje")
        } else {
            show("h1-nevyhovuje")
        }
        if (h2 > 1900){
            show("h2-vyhovuje")
        } else {
            show("h2-nevyhovuje")
        }
        
        show("tlacit-button")
    }
    print()
}


/* Event listeners - when "enter" is pressed, button will press itself */
E("kv").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        E("kv-button").click();
    }
});
E("rameno").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        E("rameno-button").click();
    }
})


function print(){
    console.log(h)
    console.log(hcca)
    if(h == hcca){
        hide("hisnothcca")
    } else {
        hide("hishcca")
    }
}


















function reset(){
    /* Scroll to top */
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
    /* Stage 1 */
    E("jednoramenne").checked = false;
    E("dvojramenne").checked = false;
    enable("jednoramenne");
    enable("dvojramenne");
    
    /* Stage 2 */
    E("kv").value = "";
    show("kv-button");
    enable("kv-button");
    enable("kv");
    
    /* Stage 3 */
    E("n1").checked = false;
    E("n2").checked = false;
    enable("n1")
    enable("n2")
    
    /* Stage 4 */
    E("rameno").value = "";
    show("rameno-button")

    /* Hide everything */
    hide("div-kv");
    hide("div-n");
    hide("div-h");
    hide("div-b");
    hide("div-l");
    hide("div-l-jednoramenne");
    hide("div-l-dvojramenne");
    hide("div-rameno");
    hide("rameno1");
    hide("rameno2");
    hide("div-podesta");
    hide("div-medzipodesta");
    hide("div-alfa");
    hide("div-h1");
    hide("h1-vyhovuje");
    hide("h1-nevyhovuje");
    hide("div-h2");
    hide("h2-vyhovuje");
    hide("h2-nevyhovuje");
    hide("reset-button")
    hide("tlacit-button")
}
reset();
