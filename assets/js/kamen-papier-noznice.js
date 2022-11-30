var user;
var pc;

function getRndInteger(min, max) {return Math.floor(Math.random() * (max - min + 1) ) + min;}

function play(n){
    user = n;
    pc = getRndInteger(1, 3)
    console.log(pc)
}
