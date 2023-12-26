function ID(element){return document.getElementById(element)}

function mail(){
    let subject = ID("email-subject").value;
    let body = ID("email-body").value;
    if(subject == 0){
        subject = ""
    }
    window.open("mailto:cypooriginal@gmail.com?subject=" + subject + "&body=" + body)
}
