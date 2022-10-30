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

var gk;
var gd;
var qk;
var qd;
var fck;
var fcd;

/*
var x = document.getElementsByTagName("tbody")[0]
var colNumber = document.getElementsByTagName('table')[0].rows[0].cells.length

function add(){
    var row = x.insertRow(1)
    for(i = 0; i < colNumber; i++){
        var col = row.insertCell();
        col.style.padding = "0.5em";
        col.innerHTML = "<input type=\"number\"></input>";
        

        var inp = col.getElementsByTagName("input")[0]
        inp.focus();
        
    }
}
*/

const t = TAG("tbody")[0]

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
            } else if(i == 5){
                col.innerHTML = "-";
            } else if(i == 6){
                col.innerHTML = "-";
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

            gk += Number(t.children[i].children[4].innerHTML);




        }
        
        ID("gk").innerHTML = gk
        console.log(gk)
        
        






        







        ID("plus1").value = "";
        ID("plus2").value = "";
        ID("plus3").value = "";
        /* Focus to plus1 */
        window.setTimeout(() => ID("plus1").focus(), 0);
    }
}






















/* Event listeners */
ID("plus1").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("plus1").value !== "") {
        ID("plus2").focus()
    }
});
ID("plus2").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("plus2").value !== "") {
        ID("plus3").focus()
    }
});
ID("plus3").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("plus3").value !== "") {
        ID("plus-button").click();
        unfocus();
    }
});
