var gk;
var yg = 1.35;
var gd;
var qk = 3;
var yq = 1.5;
var qd;
var fck;
var fcd;
const t = TAG("tbody")[0]


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




function add(){
    if(ID("plus1").value !== "" && ID("plus2").value !== "" && ID("plus3").value !== ""){
        var rowCount = TAG('tbody')[0].rows.length - 1
        var row = t.insertRow(rowCount)
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
        for(i = 0; i < rowCount + 1; i++){
            if(t.children[i].children[2].innerHTML == "-"){
                t.children[i].children[4].innerHTML = "-"
            } else {
                t.children[i].children[4].innerHTML = 
                    t.children[i].children[1].innerHTML * t.children[i].children[2].innerHTML;
            }

            /*
            console.log(t.children[i].children[4])
            console.log(isNaN(t.children[i].children[4].innerHTML))
            */

            if(isNaN(t.children[i].children[4].innerHTML) == false){
                gk += Number(t.children[i].children[4].innerHTML);
            }





        }
        
        ID("gk").innerHTML = gk;

        
        updatefooter();






        







        ID("plus1").value = "";
        ID("plus2").value = "";
        ID("plus3").value = "";
        /* Focus to plus1 */
        window.setTimeout(() => ID("plus1").focus(), 0);
    }
}



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
function updatefooter(){
    fck = gk + qk;
    ID("fck").innerHTML = fck;

    gd = Math.round((gk * yg) * 1000) / 1000;
    ID("gd").innerHTML = gd;
    
    qd = Math.round((qk * yq) * 1000) / 1000;
    ID("qd").innerHTML = qd;
    
    fcd = gd + qd;
    ID("fcd").innerHTML = fcd;
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









