var x = 1
function smileclick(){
    x++;
    if(x % 2 == 0){
        document.getElementById("smile").src = "/assets/images/hand.svg"
    } else {
        document.getElementById("smile").src = "/assets/images/smile.svg"
    }
}
