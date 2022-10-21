var a;
var b;
var c;
var d;
var x1;
var x2;

function unfocus(){
    let temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.focus();
    document.body.removeChild(temp)
}

function getD(){
    unfocus()
    if (document.getElementById("a-input").value != "" &&
        document.getElementById("b-input").value != "" &&
        document.getElementById("c-input").value != ""){
            a = document.getElementById("a-input").value;
            b = document.getElementById("b-input").value;
            c = document.getElementById("c-input").value;
            document.getElementById("d").style.display = "inline";
            d = Math.pow(b, 2) - 4 * a * c
            if (d > 0){
                x1 = (-b + Math.sqrt(d))/(2*a)
                x2 = (-b - Math.sqrt(d))/(2*a)
                document.getElementById("x1x2").style.display = "inline";
            } else if (d == 0){
                x1 = -b / (2*a)
                document.getElementById("x1").style.display = "inline";
            } else if (d < 0){
                document.getElementById("x0").style.display = "inline";
            }
            
            let element1 = document.getElementsByClassName("a");
                for(let i=0; i < element1.length; i++){
                    element1[i].innerHTML = a;
                }
            let element2 = document.getElementsByClassName("b");
                for(let i=0; i < element2.length; i++){
                    element2[i].innerHTML = b;
                }
            let element3 = document.getElementsByClassName("c");
                for(let i=0; i < element3.length; i++){
                    element3[i].innerHTML = c;
                }
            let element4 = document.getElementsByClassName("d");
                for(let i=0; i < element4.length; i++){
                    element4[i].innerHTML = d;
                }
            let element5 = document.getElementsByClassName("x1");
                for(let i=0; i < element5.length; i++){
                    element5[i].innerHTML = x1;
                }
            let element6 = document.getElementsByClassName("x2");
                for(let i=0; i < element6.length; i++){
                    element6[i].innerHTML = x2;
                }
        }
}

function reset(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    // Reset all butons and inputs
    document.getElementById("a-input").value = "";
    document.getElementById("b-input").value = "";
    document.getElementById("c-input").value = "";
    document.getElementById("d").style.display = "none";
    document.getElementById("x1x2").style.display = "none";
    document.getElementById("x1").style.display = "none";
    document.getElementById("x0").style.display = "none";
    document.getElementById("a-input").focus()
}
