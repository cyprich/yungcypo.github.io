var user;
var pc;

function ID(element){return document.getElementById(element)}
function hide(element){document.getElementById(element).style.display = "none"}
function show(element){document.getElementById(element).style.display = "flex"}
function getRndInteger(min, max) {return Math.floor(Math.random() * (max - min + 1) ) + min;}

const obrazky = [
    "/assets/images/rock.svg", 
    "/assets/images/paper.svg", 
    "/assets/images/scissors.svg"
]

function play(n){
    user = n;
    pc = getRndInteger(1, 3)
    ID("pc").children[0].src = obrazky[pc - 1]
    document.getElementsByTagName("main")[0].style.gridTemplateColumns = "1fr 1fr";
    if(n == 1){
        hide("papier-div")
        hide("noznice-div")
        if(pc == 1){
            win(0)
        } else if (pc == 2){
            win(2)
        } else {
            win(1)
        }
    } else if (n == 2){
        hide("kamen-div")
        hide("noznice-div")
        if (pc == 1){
            win(1)
        } else if (pc == 2){
            win(0)
        } else {
            win(2)
        }
    } else {
        hide("kamen-div")
        hide("papier-div")
        if (pc == 1){
            win(2)
        } else if (pc == 2){
            win(1)
        } else {
            win(0)
        }
    }
}

function win(who){
    /* 
        0 = draw 
        1 = user
        2 = pc
    */
}


function reset(){
    console.log(document.getElementsByTagName("main"))
}

reset()