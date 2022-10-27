var a;
var b;
var c;
var d;
var x1;
var x2;


function E(element){return document.getElementById(element)}
function show(element){document.getElementById(element).style.display = "inline"}
function hide(element){document.getElementById(element).style.display = "none"}
function unfocus(){
    var temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.focus();
    document.body.removeChild(temp);
}


function getD(){
    if (E("a").value !== 0 && E("b").value !== 0 && E("c").value !== 0){
        unfocus()
        
        a = E("a").value;
        b = E("b").value;
        c = E("c").value;
        d = Math.pow(b, 2) - 4 * a * c
        x1 = (-b + Math.sqrt(d)) / (2 * a)
        x2 = (-b - Math.sqrt(d)) / (2 * a)

        
        const valuesToFill = [a, b, c, d, x1, x2];
        const classesToFill = [".a", ".b", ".c", ".d", ".x1", ".x2"];
        
        /* Fill all classes with coresponding values */
        for(i = 0; i < classesToFill.length; i++){
            let cl = document.querySelectorAll(classesToFill[i])
            cl.forEach(element=>{
                if (valuesToFill[i] < 0 && i < (classesToFill.length - 2)){  /* Add () around negative number (instead of x1, x2, bacause thats not needes) */
                    element.innerHTML = "(" + valuesToFill[i] + ")"
                } else{
                    element.innerHTML = valuesToFill[i]
                }
            })
        }
        
        if (d > 0){
            show("k2-div")
        } else if (d == 0){
            show("k1-div")
        } else {
            show("k0-div")
        }
        show("d-div");
        show("k-div");
    }
}

function reset(){
    hide("d-div")
    hide("k2-div")
    hide("k1-div")
    hide("k0-div")
    E("a").focus()
    E("a").value = ""
    E("b").value = ""
    E("c").value = ""
    document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll to top
}


E("a").focus()
/* Switch to another inputbox if enter is pressed and value is present */
E("a").addEventListener("keypress", function(event){
    if (event.key === "Enter" && E("a").value != ""){
        event.preventDefault();
        E("b").focus()
        }
    }
);
E("b").addEventListener("keypress", function(event){
    if (event.key === "Enter" && E("b").value != ""){
        event.preventDefault();
        E("c").focus()
        }
    }
);
E("c").addEventListener("keypress", function(event){
    if (event.key === "Enter" && E("c").value != ""){
        event.preventDefault();
        E("abc-button").click();
        }
    }
);
