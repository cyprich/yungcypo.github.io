const hodnoty = []
var gk
var gammag = 1.35
var gd
var qk
var gammaq = 1.5
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
    updatefooter()
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
        mi.value = "";
        hi.value = "";
        oti.value = "";
        updatebody()
        updatefooter()
    }
}
function updatebody(){
    b = ID("tabulka").children[1]  // body of table
    row = b.insertRow(hodnoty.length - 1)
    for(i in hodnoty[0]){
        col = row.insertCell()
        if(i == 3 || i == 4 || i == 6){
            col.colSpan = 2
        }
        col.innerHTML = hodnoty[hodnoty.length - 1][i]
    }
}
function updatefooter(){
    gk = 0
    for(i in hodnoty){
        if(hodnoty[i][4] != "-"){
            gk += hodnoty[i][4]
        }
    }
    ID("gk").innerHTML = gk

    gd = gk * gammag
    ID("gd").innerHTML = gd

    qk = ID("typprevadzkyselect").value
    ID("qk").innerHTML = qk

    qd = qk * gammaq
    ID("qd").innerHTML = qd

    fck = gk + qk
    ID("fck").innerHTML = fck

}





























getTyp()
