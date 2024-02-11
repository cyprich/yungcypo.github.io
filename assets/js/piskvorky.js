var xo = true;  /* kto je na rade */
var running = true;  /* či sa hrá alebo sa dohralo */
var x = 0;  /* počet výhier x */
var o = 0;  /* počet výhier o */


function ID(element){return document.getElementById(element)} 
function val(element){return document.getElementById(element).innerHTML}
function hide(element){element.style.display = "none"}
function show(element){element.style.display = "inline"}
function color(element){document.getElementById(element).style.color = "var(--color1)"}


function action(n){
    if(val(n) == "" && running){
        if(xo){ID(n).innerHTML = "X";} 
        else {ID(n).innerHTML = "O"}
        xo = !xo;
        
        /* Vyhodnotenie - trochu bordel v tom... */
        if(val(1) == val(2) && val(2) == val(3)){
            if(val(1) == "X"){
                color(1)
                color(2)
                color(3)
                win(true)
            } else if (val(1) == ("O")){
                color(1)
                color(2)
                color(3)
                win(false)
            }
        }
        else if (val(4) == val(5) && val(5) == val(6)){
            if(val(4) == "X"){
                color(4)
                color(5)
                color(6)
                win(true)
            } else if (val(4) == ("O")){
                color(4)
                color(5)
                color(6)
                win(false)
            }
        }
        else if (val(7) == val(8) && val(8) == val(9)){
            if(val(7) == "X"){
                color(7)
                color(8)
                color(9)
                win(true)
            } else if (val(7) == ("O")){
                color(7)
                color(8)
                color(9)
                win(false)
            }
        }
        else if (val(1) == val(4) && val(4) == val(7)){
            if(val(1) == "X"){
                color(1)
                color(4)
                color(7)
                win(true)
            } else if (val(1) == ("O")){
                color(1)
                color(4)
                color(7)
                win(false)
            }
        }
        else if (val(2) == val(5) && val(5) == val(8)){
            if(val(2) == "X"){
                color(2)
                color(5)
                color(8)
                win(true)
            } else if (val(2) == ("O")){
                color(2)
                color(5)
                color(8)
                win(false)
            }
        }
        else if (val(3) == val(6) && val(6) == val(9)){
            if(val(3) == "X"){
                color(3)
                color(6)
                color(9)
                win(true)
            } else if (val(3) == ("O")){
                color(3)
                color(6)
                color(9)
                win(false)
            }
        }
        else if (val(1) == val(5) && val(5) == val(9)){
            if(val(1) == "X"){
                color(1)
                color(5)
                color(9)
                win(true)
            } else if (val(1) == ("O")){
                color(1)
                color(5)
                color(9)
                win(false)
            }
        }
        else if (val(7) == val(5) && val(5) == val(3)){
            if(val(7) == "X"){
                color(7)
                color(5)
                color(3)
                win(true)
            } else if (val(7) == ("O")){
                color(7)
                color(5)
                color(3)
                win(false)
            }
        }

        if(
            val(1) != "" &&
            val(2) != "" &&
            val(3) != "" &&
            val(4) != "" &&
            val(5) != "" &&
            val(6) != "" &&
            val(7) != "" &&
            val(8) != "" &&
            val(9) != ""
        ){
            win("none")
        }
    }
    else if (!running){
        reset()
    }
}

function win(who){
    running = false
    if(who != "none"){
        if(who){
            x++;
            ID("x").innerHTML = x;
        } else{
            o++;
            ID("o").innerHTML = o;
        }
    }
}


function reset(){
    running = true;
    for(i = 1; i <= 9; i++){
        ID(i).innerHTML = "";
        ID(i).style.color = "white";
    }
}


/* Event listeners */
window.addEventListener("keypress", function(event){
    if (running){
        for(i = 1; i <= 9; i++){
            if(event.key == i && ID(i).innerHTML == ""){
                event.preventDefault()
                action(i)
            }
        }
        
        
    } else {
        reset()
    }
});


reset()
