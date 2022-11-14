var gk = 0;
var yg = 1.35;
var gd;
var qk = 3;
var yq = 1.5;
var qd;
var fck;
var fcd;
const t = TAG("tbody")[0]
const tfoot = TAG("tfoot")[0]


function ID(element){
    return document.getElementById(element)
}    
function TAG(element){
    return document.getElementsByTagName(element)
}    
function unfocus(){
    let temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.focus();
    document.body.removeChild(temp);
}  
function show(element){
    document.getElementById(element).style.display = "inline";
}  
function hide(element){
    document.getElementById(element).style.display = "none";
}



function add(){
    if(ID("plus1").value !== "" && ID("plus2").value !== "" && ID("plus3").value !== ""){
        let rowCount = t.rows.length - 1
        let row = t.insertRow(rowCount)
        for(i = 0; i < 7; i++){
            var col = row.insertCell()
            if(i == 0){
                col.innerHTML = ID("plus1").value;
            } else if(i == 1){
                col.innerHTML = ID("plus2").value;
            } else if(i == 2){
                if(ID("plus3").value == 0){
                    col.innerHTML = "-";
                } else {
                    col.innerHTML = ID("plus3").value;
                }
            } else if(i == 3){
                col.innerHTML = 1;
            } else if(i == 4){
                col.colSpan = "2";
            } else if(i == 5){
                col.innerHTML = "-";
            } else if(i == 6){
                col.innerHTML = "-";
                col.colSpan = "2";
            }
        }
        gk = 0;
        updatebody()       
        updatefooter();

        ID("plus1").value = "";
        ID("plus2").value = "";
        ID("plus3").value = "";
        /* Focus to plus1 */
        window.setTimeout(() => ID("plus1").focus(), 0);
    }
}


/*
function updateqk(){
    if(ID("qk-input").value !== ""){
        qk = Math.round(ID("qk-input").value * 1000) / 1000;
        ID("qk").innerHTML = qk.toFixed(3);
        ID("qk-input").value = "";
        updatefooter();
        unfocus()
    }
}

function updateyg(){
    if(ID("yg-input").value !== ""){
        yg = Math.round(ID("yg-input").value * 1000) / 1000;
        ID("yg").innerHTML = yg.toFixed(2);
        ID("yg-input").value = "";
        updatefooter();
        unfocus()
    }
}

function updateyq(){
    if(ID("yq-input").value !== ""){
        yq = Math.round(ID("yq-input").value * 1000) / 1000;
        ID("yq").innerHTML = yq.toFixed(2);
        ID("yq-input").value = "";
        updatefooter();
        unfocus()
    }
}
*/

function updatebody(){
    let rowCount = t.rows.length - 1
    for(i = 0; i < rowCount; i++){
        if(t.rows[i].children[2].innerHTML == "-"){
            t.rows[i].children[4].innerHTML = "-";
        } else {
            t.rows[i].children[4].innerHTML = t.rows[i].children[1].innerHTML * t.rows[i].children[2].innerHTML;
            t.rows[i].children[4]
        }
        
        /* Check if value NotANumber = false, then add it to gk */
        if(isNaN(t.rows[i].children[4].innerHTML) == false){
            gk += Number(t.rows[i].children[4].innerHTML);
        }
    }

    ID("gk").innerHTML = Math.round(gk * 1000) / 1000;

    updatefooter()
}

function updatefooter(){
    yg = Number(ID("yg").innerHTML);
    yq = Number(ID("yq").innerHTML);
    qk = Number(ID("qk").innerHTML);

    fck = Math.round((gk + qk) * 1000) / 1000;
    ID("fck").innerHTML = fck.toFixed(3);

    gd = Math.round((gk * yg) * 1000) / 1000;
    ID("gd").innerHTML = gd.toFixed(3);
    
    qd = Math.round((qk * yq) * 1000) / 1000;
    ID("qd").innerHTML = qd.toFixed(3);
    
    fcd = Math.round((gd + qd) * 1000) / 1000;
    ID("fcd").innerHTML = fcd.toFixed(3);
}


function atEdit(stage){
    let val = ID("at-edit-select").value
    
    hide("at-edit-row")
    hide("at-edit-text")
    hide("at-edit-num")
    hide("at-edit-button")
    
    if(val == 1){
        window.setTimeout(() => ID("at-edit-row").focus(), 0);
        show("at-edit-row");
        show("at-edit-text");
        show("at-edit-button");
        if(stage == 1 &&
            ID("at-edit-row").value > 0 && 
            ID("at-edit-row").value < t.rows.length && 
            ID("at-edit-text").value != ""){
                t.rows[ID("at-edit-row").value - 1].children[0].innerHTML = ID("at-edit-text").value
                ID("at-edit-row").value = "";
                ID("at-edit-text").value = "";
        }
    } else if (val == 2 || val == 3){
        window.setTimeout(() => ID("at-edit-row").focus(), 0);
        show("at-edit-row");
        show("at-edit-num");
        show("at-edit-button");
        if(stage == 1 &&
            ID("at-edit-row").value > 0 &&
            ID("at-edit-row").value < t.rows.length &&
            ID("at-edit-num").value != ""){
                if(val == 2){
                    t.rows[ID("at-edit-row").value - 1].children[1].innerHTML = ID("at-edit-num").value;
                } else if(val == 3) {
                    t.rows[ID("at-edit-row").value - 1].children[2].innerHTML = ID("at-edit-num").value;
                }
                ID("at-edit-row").value = "";
                ID("at-edit-num").value = "";
        }
    } else if (val == 4 || val == 5 || val == 6){
        window.setTimeout(() => ID("at-edit-row").focus(), 0);
        show("at-edit-num");
        show("at-edit-button");
        if(stage == 1){
            if(val == 4){
                tfoot.rows[0].children[3].innerHTML = ID("at-edit-num").value;
                ID("at-edit-num").value = "";
            } else if (val == 5){
                tfoot.rows[1].children[2].innerHTML = ID("at-edit-num").value;
                ID("at-edit-num").value = "";
            } else if (val == 6){
                tfoot.rows[1].children[3].innerHTML = ID("at-edit-num").value;
                ID("at-edit-num").value = "";
            }
        }
    } else if (val == 7){
        window.setTimeout(() => ID("at-edit-num").focus(), 0);
        show("at-edit-text");
        show("at-edit-button");
        if(stage == 1){
            tfoot.rows[1].children[0].innerHTML = ("Premenné zaťaženie q -" + ID("at-edit-text").value);
            ID("at-edit-num").value = "";
        }
    }
    
    updatebody()
} 

function minusrow(){
    let row = ID("minusrow-input").value;
    if(row > 0 && row <= t.rows.length - 1){
        t.deleteRow(row - 1);
        ID("minusrow-input").value = "";
    }
}


/* Event listeners */
ID("plus1").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("plus1").value !== ""){
        ID("plus2").focus()
    }
});
ID("plus2").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("plus2").value !== ""){
        ID("plus3").focus()
    }
});
ID("plus3").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("plus3").value !== ""){
        ID("plus-button").click();
        unfocus();
    }
});


ID("at-edit-row").addEventListener("keypress", function(event){
    if(event.key === "Enter" && ID("at-edit-row").value !== ""){
        if(ID("at-edit-text").style.display == "inline"){
            ID("at-edit-text").focus()
        } else if (ID("at-edit-num").style.display == "inline"){
            ID("at-edit-num").focus()
        }
    }
})

ID("at-edit-text").addEventListener("keypress", function(event){
    if(event.key === "Enter" && ID("at-edit-text").value !== ""){
        ID("at-edit-button").click();
    }
});
ID("at-edit-num").addEventListener("keypress", function(event){
    if(event.key === "Enter" && ID("at-edit-num").value !== ""){
        ID("at-edit-button").click();
    }
})



/*
ID("qk-input").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("qk-input").value !== ""){
        ID("qk-button").click();
    }
})
ID("yg-input").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("yg-input").value !== ""){
        ID("yg-button").click();
    }
})
ID("yq-input").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("yq-input").value !== ""){
        ID("yq-button").click();
    }
})

ID("minusrow-input").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("minusrow-input").value !== ""){
        ID("minusrow-button").click();
    }
})
*/


/* Hide unwanted elements */
atEdit()
