const hodnoty = []
var gk
var gammag
var gd
var qk
var gammaq
var qd
var fck
var fcd

function ID(element){return document.getElementById(element)}
function hide(element){element.style.display = "none"}
function show(element){element.style.display = "inline"}

function getTyp(){
    var typ = ID("typselect").value;
    let pz = ID("premennezatazenie")
    let pzp = ID("premennezatazeniepopisok")
    let tps = ID("typprevadzkyselect")
    let sos = ID("snehovaoblastselect")
    if(typ == 0){
        hide(tps)
        hide(sos)
    } else if(typ == 1){
        ID("nadpis").innerHTML = "Výpočet zaťaženia <span class='lighter'>na strop</span>";
        show(tps)
        hide(sos)
        pz.innerHTML = "Premenné zaťaženie q"
        if(tps.value != 0){    
            pzp.innerHTML = tps.options[tps.selectedIndex].text;
        }
        ID("qkpopisok").innerHTML = "q<sub>k</sub>";
        ID("qdpopisok").innerHTML = "q<sub>d</sub>";
    } else if (typ == 2){
        ID("nadpis").innerHTML = "Výpočet zaťaženia <span class='lighter'>na strechu</span>"
        hide(tps)
        show(sos)
        pz.innerHTML = "Premenné klimatické zaťaženie<br>Sneh S"
        switch(Number(sos.value)){
            case 1:
                pzp.innerHTML = "I.";
                break;
            case 2:
                pzp.innerHTML = "II.";
                break;
            case 3:
                pzp.innerHTML = "III.";
                break;
            case 4:
                pzp.innerHTML = "IV.";
        }
        ID("qkpopisok").innerHTML = "S<sub>k</sub>";
        ID("qdpopisok").innerHTML = "S<sub>d</sub>";
    }
    update()
}
function add(){
    let mi = ID("materialinput")
    let hi = ID("hrubkainput")
    let oti = ID("objemovatiazinput")
    if(mi.value != "" && hi.value != "" && oti.value != ""){
        if(oti.value != 0){
            hodnoty.push([
                mi.value,
                Number(hi.value),
                Number(oti.value),
                1,
                Number(hi.value) * Number(oti.value),
                "-", 
                "-"
                ])
        } else if (oti.value == 0){
            hodnoty.push([
                mi.value,
                Number(hi.value),
                "-",
                1,
                "-",
                "-", 
                "-"
                ])
        }
    }
    update()
}
function update(){
    let t = ID("tabulka").children[1]  // tabulka
    let f = ID("tabulka").children[2]  // footer
    let l = t.children.length - 1 // lenght of t
    
    if(l > 0){
        for(i in l){
            t.deleteRow(i)
        }
    } 

    for(i in hodnoty){
        let row = t.insertRow(i)
        for(j in hodnoty[i]){
            let col = row.insertCell(j)
            col.innerHTML = hodnoty[i][j]
        }
    }












}






























getTyp()
