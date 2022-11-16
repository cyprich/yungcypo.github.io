/*
t = tabulka 'maintable'
datum - datum zakupenia
mesiac - mesiac zakupenia
rok - rok zakupenia
oc - obstarávacia cena
os - odpisová skupina
dlo - dĺžka odopisovania [roky] {do is not allowed}
pr - počet rokov
    * ak sa majetok nezakupil v januari, pr = dlo + 1
ro = ročný odpis
opr = oprávky
zc = zostatková cena
*/



function ID(element){return document.getElementById(element)}  
function show(element){element.style.display = "inline"}
function hide(element){element.style.display = "none"}
function enable(element){element.disabled = false}
function disable(element){element.disabled = true}
function unfocus(){
    let temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.focus();
    document.body.removeChild(temp);
}


//ID("datum").value = new Date().toISOString().slice(0, 10)  // when input type is date
function fillDatum(){ID("datum").value = (new Date().getFullYear() + "-" + (Number(new Date().getMonth()) + 1))}

function getTypOdpisovania(){
    if(ID("os").value == "2" || ID("os").value == "3"){
        show(ID("typ-odpisovania"))
        for(i = 0; i < 4; i++){
            ID("inputtable").children[0].children[0].children[i].style.width = "25%"
        }
    } else {
        hide(ID("typ-odpisovania"))
        for(i = 0; i < 3; i++){
            ID("inputtable").children[0].children[0].children[i].style.width = "33%"
        }
    }
}

function calculate(){
    if(ID("oc").value > 0 && ID("os").value >= 0 && ID("os").value <= 6 && ID("datum").value != ""){
        const t = ID("maintable").children[0]
        const datum = ID("datum").value;
        const mesiac = Number(datum.split("-")[1])
        let rok = Number(datum.split("-")[0])
        const oc = ID("oc").value;
        const os = ID("os").value;
        let dlo;
        let pr;
        let ro;
        let opr;
        let zc;
        

        switch(Number(os)){
            case 0:
                dlo = 2;
                break;
            case 1:
                dlo = 4;
                break;
            case 2:
                dlo = 6;
                break;
            case 3:
                dlo = 8;
                break;
            case 4:
                dlo = 12;
                break;
            case 5:
                dlo = 20;
                break;
            case 6:
                dlo = 40;           
        }

        if(mesiac != 1){
            pr = dlo + 1
        } else {
            pr = dlo
        }

        
        if(ID("zrychlene").checked){
            
            while(zc <= 0){

            }            

        } else {
            for(i = 0; i < pr; i++){
                let row = t.insertRow()
                if(i == 0){
                    ro = Math.ceil((oc / dlo) / 12 * (12 - (mesiac - 1)))
                    opr = Math.ceil(ro);
                    zc = Math.ceil(oc - ro);
                } else if (i == pr - 1){
                    ro = Math.ceil(zc)
                    opr = Math.ceil(oc);
                    zc = 0;
                } else {
                    ro = Math.ceil(oc / dlo);
                    opr = Math.ceil(Number(opr) + Number(ro));
                    zc -= Math.ceil(ro);
                }

                row.insertCell().innerHTML = rok;
                row.insertCell().innerHTML = ro;              
                row.insertCell().innerHTML = opr;
                row.insertCell().innerHTML = zc;

                rok++
            }

            
            
            
            
            
            
            
            
            
            
        }

        disable(ID("datum"))
        disable(ID("oc"))
        disable(ID("os"))
        if(ID("rovnomerne").checked){
            disable(ID("zrychlene"))
        }else{disable(ID("rovnomerne"))}

        show(ID("maintable-div"))
        hide(ID("submitbutton"))
    }
}








/* Event listeners */
ID("datum").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        ID("oc").focus()
    }
});
ID("oc").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        ID("os").focus()
    }
});
ID("os").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if(ID("os").value == "2" || ID("os").value == "3"){
            event.preventDefault();
            unfocus()
            show(ID("typ-odpisovania"))
        }else if(ID("os").value >= 0 && ID("os").value <= 6){
            event.preventDefault();
            unfocus()
            ID("submitbutton").click()
        }
    }
});



function reset(){
    hide(ID("maintable-div"))
    show(ID("submitbutton"))
    
    ID("oc").value = "";
    ID("os").value = "";

    enable(ID("rovnomerne"))
    ID("rovnomerne").click()
    enable(ID("zrychlene"))

    getTypOdpisovania()
}


fillDatum()
reset()
