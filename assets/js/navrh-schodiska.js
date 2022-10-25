var kv;
var n; var ncca;
var n1; var n2;
var h;
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
function disable(element){
    document.getElementById(element).disabled = "true";
}
function enable(element){
    document.getElementById(element).disabled = "false";
}
function unfocus(){
    let temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.focus();
    document.body.removeChild(temp);
}
/* val, icl = value, input class */
function fillClasses(val = NaN, icl = NaN){
    

    /* Fill all classes with coresponding values */
    /*for(i = 0; i < classesToFill.length; i++){
        let cl = document.querySelectorAll(classesToFill[i])
        cl.forEach(element=>{
            element.innerHTML = valuesToFill[i]
        })
    }*/

    let cl = document.querySelectorAll(icl);
    cl.forEach(element=>{
        element.innerHTML = val;
    });
}


function getKV(){
    if (E("jednoramenne").checked){
        disable("dvojramenne");
        show("div-kv");
        E("kv").focus()
    } else if (E("dvojramenne").checked){
        disable("jednoramenne")
        show("div-kv");
        E("kv").focus()
    }
}

function getN(){
    if (E("kv").value != ""){
        kv = E("kv").value;
        hide("kv-button");
        unfocus()
        show("div-n")
        ncca = Math.round((kv/170) * 100) / 100;
        console.log(ncca)

        if (E("jednoramenne").checked){
            n1 = Math.floor(ncca);
            n2 = Math.ceil(ncca);    
        } else if (E("dvojramenne").checked){
            n1 = Math.floor(ncca);
            if (n1 % 2 == 1){
                n1 -= 1
            }
            n2 = Math.ceil(ncca);
            if (n2 % 2 == 1){
                n2 += 1
            }
        }

        if (kv/n1 > 180){
            n1 -= 2;
            n2 -= 2;
        } else if (kv/n2 > 180){
            n1 += 2;
            n2 += 2;
        }

        fillClasses(kv, ".kv")
        fillClasses(ncca, ".ncca")
        fillClasses(n, ".n")
        fillClasses(n1, ".n1")
        fillClasses(n2, ".n2")
    }
}






















/* Event listeners - when "enter" is pressed, button will press itself */
E("kv").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        E("kv-button").click();
    }
});








function reset(){
    hide("div-kv");
    hide("div-n");
    hide("div-h");
    hide("div-b");
    hide("div-l");
    hide("div-rameno");
    hide("div-podesta");
    hide("div-medzipodesta");
    hide("div-alfa");
    hide("div-h1");
    hide("div-h2");
}
reset();
