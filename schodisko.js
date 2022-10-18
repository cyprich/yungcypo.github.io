var kv;
var n; var n1; var n2;
var h;
var b;
var l;
var alfa;

/***
FUNCTION THAT SAVED MY LIFE 

God bless whoever made this video:
https://www.youtube.com/watch?v=0pqLp51w7dw&ab_channel=Telusko

var element = document.getElementsByClassName("kv");
    for(var i=0; i < element.length; i++){
        element[i].innerHTML = kv;
    }
*/



function getTyp(){
    if (document.getElementById("jednoramenne").checked || document.getElementById("dvojramenne").checked){
        document.getElementById("dotaznik-kv").style.display = "inline"
    }
}

function getKv(){
    if (document.getElementById("kv").value > 0){
        kv = document.getElementById("kv").value;
        document.getElementById("kv-button").disabled = true;
        document.getElementById("dotaznik-n").style.display = "inline";
        
        let element = document.getElementsByClassName("kv");
        for(let i=0; i < element.length; i++){
            element[i].innerHTML = kv;
        }

        n()
    }
}

function n(){
    n = Math.round(kv/170 * 100) / 100
    let element = document.getElementsByClassName("n");
        for(let i=0; i < element.length; i++){
            element[i].innerHTML = n;
        }
    
    if (document.getElementById("jednoramenne").checked){
        n1 = Math.floor(n);
        n2 = Math.ceil(n)
    } else if (document.getElementById("dvojramenne").checked){
        n1 = Math.floor(n)
        if (n1 % 2 == 1){
            n1 -= 1
        }
        
        n2 = Math.ceil(n)
        if (n2 % 2 == 1){
            n2 += 1
        }
    }
    
    
    document.getElementById("n1-label").innerHTML = n1 + " stupňov"
    document.getElementById("n2-label").innerHTML = n2 + " stupňov"

    console.log(n)
    console.log(n1)
    console.log(n2)
}












